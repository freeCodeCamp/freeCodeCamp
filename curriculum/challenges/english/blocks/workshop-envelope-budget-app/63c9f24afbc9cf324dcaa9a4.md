---
id: 63c9f24afbc9cf324dcaa9a4
title: Step 94
challengeType: 0
dashedName: step-94
---

# --description--

It is time for another loop. Create a `for...of` loop with a variable called `container` to iterate through the `inputContainers` array.

Inside the loop, set the `innerHTML` property of the `container` to an empty string. This will clear all of the contents of that input container.

# --hints--

Your `for...of` loop should iterate through the `inputContainers` array. The loop's variable name should be `container`.

```js
const clearForm = code.split("function clearForm()")[1];
assert.match(clearForm, /for\s*\(\s*(const|let|var)\s+container\s+of\s+inputContainers\s*\)/);
```

Your `for...of` loop should set the `innerHTML` property of `container` to an empty string.

```js
const clearForm = code.split("function clearForm()")[1];
const forOfLoop = clearForm.split("for")[1];
assert.match(forOfLoop, /container\s*\.\s*innerHTML\s*=\s*(`|'|")\1\s*/);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Envelope Budgeter</title>
  </head>

  <body>
    <main>
      <h1>Envelope Budgeter</h1>
      <div class="container">
        <form id="budget-form">
          <label for="income">Total Monthly Income</label>
          <input 
          type="number" 
          min="0" 
          id="income" 
          placeholder="e.g. 2000" 
          required 
          />
          <fieldset id="rent">
            <legend>Rent</legend>
            <label for="rent-amount">Amount</label>
            <input type="number" min="0" id="rent-amount" placeholder="e.g. 1000" />
        </fieldset>
        <fieldset id="food">
          <legend>Food</legend>
          <div class="input-container"></div>
        </fieldset>
        <fieldset id="utilities">
          <legend>Utilities</legend>
          <div class="input-container"></div>
        </fieldset>
        <fieldset id="entertainment">
          <legend>Entertainment</legend>
          <div class="input-container"></div>
        </fieldset>
          <div class="controls">
            <span>
              <label for="entry-dropdown">Add expense to:</label>
              <select id="entry-dropdown" name="options">
                <option value="rent" selected>Rent</option>
                <option value="food">Food</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
              </select>
              <button type="button" id="add-entry">Add Entry</button>
            </span>
          </div>
          <div>
            <button type="submit">
              Calculate Remaining Budget
            </button>
            <button type="button" id="clear">Clear</button>
          </div>
        </form>
        <div id="output" class="output hide"></div>
      </div>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
```

```css
:root {
  --light-grey: #f5f6f7;
  --dark-blue: #0a0a23;
  --fcc-blue: #1b1b32;
  --light-yellow: #fecc4c;
  --dark-yellow: #feac32;
  --light-pink: #ffadad;
  --dark-red: #850000;
  --light-green: #acd157;
}

body {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color: var(--fcc-blue);
  color: var(--light-grey);
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1 {
  text-align: center;
  margin-top: 30px;
  font-size: 2em;
}

.container {
  width: 90%;
  max-width: 680px;
  margin: 20px auto;
  padding: 20px;
  background-color: var(--dark-blue);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

label,
legend {
  font-weight: bold;
  margin-bottom: 5px;
}

fieldset {
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
}

legend {
  padding: 0 8px;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}

input,
select,
button {
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  min-height: 32px;
  box-sizing: border-box;
}

input:focus,
select:focus,
button:focus {
  outline: 2px solid var(--light-yellow);
  border-color: var(--dark-yellow);
}

button {
  cursor: pointer;
  text-decoration: none;
  background-color: var(--light-yellow);
  border: 2px solid var(--dark-yellow);
  transition: background-color 0.2s ease, border 0.2s ease;
}

button:hover {
  background-color: var(--dark-yellow);
  color: white;
}

.controls {
  margin-bottom: 20px;
}

.controls span {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.output {
  border: 2px solid var(--light-grey);
  padding: 15px;
  text-align: center;
  background-color: var(--dark-blue);
  border-radius: 6px;
  margin-top: 20px;
}

.output span {
  font-weight: bold;
  font-size: 1.4em;
}

.surplus {
  color: var(--light-green);
}

.deficit {
  color: var(--light-pink);
}

.hide {
  display: none;
}

@media (max-width: 600px) {
  body {
    font-size: 16px;
  }

  .controls span {
    flex-direction: column;
    align-items: stretch;
  }

  button,
  input,
  select {
    width: 100%;
  }
}
```

```js
const budgetForm = document.getElementById('budget-form');
const incomeInput = document.getElementById("income");
const rentInput = document.getElementById("rent-amount");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  const category = entryDropdown.value;
  const targetInputContainer = document.querySelector(`#${category} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
  <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
  <label for="${category}-${entryNumber}-amount">Expense ${entryNumber} Amount</label>
  <input 
    type="number" 
    min="0" 
    id="${category}-${entryNumber}-amount" placeholder="Amount" 
    />`;
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function calculateBudget(e) {
  e.preventDefault();
  isError = false;

  const foodInputs = document.querySelectorAll("#food input[type='number']");
  const utilitiesInputs = document.querySelectorAll("#utilities input[type='number']");
  const entertainmentInputs = document.querySelectorAll("#entertainment input[type='number']");

  const rent = getTotalFromInputs([rentInput]);
  const food = getTotalFromInputs(foodInputs);
  const utilities = getTotalFromInputs(utilitiesInputs);
  const entertainment = getTotalFromInputs(entertainmentInputs);
  const income = getTotalFromInputs([incomeInput]);

  if (isError) {
    return;
  }

  const expenses = rent + food + utilities + entertainment;
  const netRemaining = income - expenses;

  let statusText = "";
  let statusClass = "";
  
  if (netRemaining < 0) {
    statusText = `Over Budget by $${Math.abs(netRemaining)}`;
    statusClass = "deficit";
  } else {
    statusText = `$${netRemaining} Remaining`;
    statusClass = "surplus";
  }

  output.innerHTML = `
    <span class="${statusClass}">${statusText}</span>
    <hr>
    <p>$${income} Total Income</p>
    <p>$${expenses} Total Expenses</p>
  `;

  output.classList.remove("hide");

}

function getTotalFromInputs(list) {
  let total = 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    total += Number(currVal);
  }
  return total;
}

--fcc-editable-region--
function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));


}
--fcc-editable-region--

addEntryButton.addEventListener("click", addEntry);
budgetForm.addEventListener("submit", calculateBudget);
```
