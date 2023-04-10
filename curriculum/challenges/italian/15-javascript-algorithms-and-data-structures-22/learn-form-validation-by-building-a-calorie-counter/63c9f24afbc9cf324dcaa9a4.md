---
id: 63c9f24afbc9cf324dcaa9a4
title: Step 92
challengeType: 0
dashedName: step-92
---

# --description--

Devi anche cancellare il testo dell'elemento `output`. Puoi farlo impostando la proprietà `innerText` su una stringa vuota.

La differenza tra `innerText` e `innerHTML` è che `innerText` non renderizza gli elementi HTML, ma mostra i tag e il contenuto come testo grezzo.

# --hints--

La funzione `clearForm` dovrebbe accedere alla proprietà `innerText` dell'elemento `output`.

```js
assert.match(clearForm.toString(), /output\.innerText/);
```

La funzione `clearForm` dovrebbe impostare la proprietà `innerText` dell'elemento `output` su una stringa vuota.

```js
assert.match(clearForm.toString(), /output\.innerText\s*=\s*('|"|`)\1/);
```

Dovresti modificare `output` dopo aver modificato `budgetNumberInput`.

```js
assert.isAbove(clearForm.toString().indexOf('output'), clearForm.toString().indexOf('budgetNumberInput'));
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
    <title>Calorie Counter</title>
  </head>
  <body>
    <main>
      <h1>Calorie Counter</h1>
      <div class="container">
        <form id="calorie-counter">
          <label for="budget">Budget</label>
          <input
            type="number"
            min="0"
            id="budget"
            placeholder="Daily calorie budget"
            required
          />
          <fieldset id="breakfast">
            <legend>Breakfast</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="lunch">
            <legend>Lunch</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="dinner">
            <legend>Dinner</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="snacks">
            <legend>Snacks</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="exercise">
            <legend>Exercise</legend>
            <div class="input-container"></div>
          </fieldset>
          <div class="controls">
            <span>
              <label for="entry-dropdown">Add food or exercise:</label>
              <select id="entry-dropdown" name="options">
                <option value="breakfast" selected>Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snacks">Snacks</option>
                <option value="exercise">Exercise</option>
              </select>
              <button type="button" id="add-entry">Add Entry</button>
            </span>
          </div>
          <div>
            <button type="submit" id="calculate-calories">
              Calculate Remaining Calories
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
body {
  font-family: "Lato", Arial;
}

h1 {
  text-align: center;
}

.container {
  width: 90%;
  max-width: 680px;
}

h1,
.container,
.output {
  margin: 20px auto;
}

label,
legend {
  font-weight: bold;
}

.input-container {
  display: flex;
  flex-direction: column;
}

button:hover {
  cursor: pointer;
}

fieldset,
label,
button,
input,
select {
  margin-bottom: 10px;
}

.output {
  border: 2px solid black;
  padding: 10px;
  text-align: center;
}

.hide {
  display: none;
}

.output span {
  font-weight: bold;
  font-size: 1.2em;
}

.surplus {
  color: #006627;
}

.deficit {
  color: #B30000;
}
```

```js
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
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
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function calculateCalories(e) {
  e.preventDefault();
  isError = false;

  const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
  const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
  const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
  const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
  const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  if (isError) {
    return;
  }

  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  const surplusOrDeficit = remainingCalories >= 0 ? 'Surplus' : 'Deficit';
  output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;

  output.classList.remove('hide');
}

function getCaloriesFromInputs(list) {
  let calories = 0;

  for (let i = 0; i < list.length; i++) {
    const currVal = cleanInputString(list[i].value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
}

--fcc-editable-region--
function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));

  for (let i = 0; i < inputContainers.length; i++) {
    inputContainers[i].innerHTML = '';
  }

  budgetNumberInput.value = '';

}
--fcc-editable-region--

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
```
