let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let chart;

function addExpense() {
  const amount = Number(document.getElementById("amount").value);
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;

  if (!amount || !date) {
    alert("Please enter all fields");
    return;
  }

  expenses.push({ amount, category, date });
  localStorage.setItem("expenses", JSON.stringify(expenses));

  updateUI();
}

function updateUI() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  expenses.forEach(e => {
    const li = document.createElement("li");
    li.textContent = `${e.date} - ${e.category}: ₹${e.amount}`;
    list.appendChild(li);
  });

  calculateSummary();
  renderChart();
}

function calculateSummary() {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  document.getElementById("total").innerText = total;

  const categoryMap = {};
  expenses.forEach(e => {
    categoryMap[e.category] = (categoryMap[e.category] || 0) + e.amount;
  });

  const topCategory = Object.keys(categoryMap)
    .reduce((a, b) => categoryMap[a] > categoryMap[b] ? a : b, "-");

  document.getElementById("topCategory").innerText = topCategory;

  const uniqueDays = new Set(expenses.map(e => e.date));
  document.getElementById("avg").innerText =
    (total / uniqueDays.size || 0).toFixed(2);
}

function renderChart() {
  const ctx = document.getElementById("expenseChart");

  const categoryMap = {};
  expenses.forEach(e => {
    categoryMap[e.category] = (categoryMap[e.category] || 0) + e.amount;
  });

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(categoryMap),
      datasets: [{
        data: Object.values(categoryMap)
      }]
    }
  });
}

updateUI();
