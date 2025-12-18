# smart-expense-analyzer

A frontend-only expense analyzer that tracks spending, analyzes patterns,
and visualizes category-wise expenses.

## Features
- Add daily expenses
- Category-wise analysis
- Total & average spending
- Highest spending category
- Data persistence using localStorage
- Pie chart visualization

## Tech Stack
- HTML, CSS, JavaScript
- Chart.js
- localStorage

##  Challenges Faced & Solutions

### 1. Data Persistence Across Page Reloads
**Challenge:**  
Expense data was lost whenever the page was refreshed because browser memory resets.

**Solution:**  
Implemented `localStorage` to persist data. Used `JSON.stringify()` while saving and `JSON.parse()` while retrieving data, with fallback handling to prevent null errors.



### 2. Expense Data Analysis & Aggregation
**Challenge:**  
Calculating insights such as total spending, highest spending category, and average daily spend from raw expense entries.

**Solution:**  
Used JavaScript array methods like `reduce()` for totals, objects as hash maps for category grouping, and `Set` to calculate unique days for accurate average spending.



### 3. Keeping UI and Application State in Sync
**Challenge:**  
Ensuring the UI updated correctly whenever expenses were added or modified.

**Solution:**  
Centralized all UI updates into a single `updateUI()` function that re-renders the expense list, summary metrics, and charts from the same data source.



### 4. Chart Rendering & Memory Management
**Challenge:**  
Chart.js graphs overlapped or failed to update when new expenses were added.

**Solution:**  
Stored the chart instance and destroyed the previous chart before rendering a new one, preventing memory leaks and visual issues.



### 5. Input Validation & Edge Case Handling
**Challenge:**  
Handling invalid inputs such as empty amounts, missing dates, or incorrect values that could break the UI.

**Solution:**  
Added input validation before processing data to ensure only valid expense entries are stored and displayed.



### 6. Scope Management
**Challenge:**  
Avoiding over-engineering the project while still keeping it interview-ready.

**Solution:**  
Focused on core frontend logic, data analysis, and visualization instead of adding unnecessary backend complexity.



###  Key Learnings
- Frontend state management
- Data aggregation & analysis
- Browser storage mechanisms
- Visualization with third-party libraries
- Writing clean, maintainable JavaScript

