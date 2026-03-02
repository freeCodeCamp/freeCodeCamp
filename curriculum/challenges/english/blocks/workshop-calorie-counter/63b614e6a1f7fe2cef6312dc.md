---
id: 63b614e6a1f7fe2cef6312dc
title: Step 17
challengeType: 0
dashedName: step-17
---

# --description--

In programming, prefixing a variable with `is` or `has` is a common practice to signify that the variable represents a boolean value.

Here are a few examples:

```js
let isRunning = true;
let hasCompleted = false;
```

Declare a variable named `isError` using `let` and initialize it with `false`, allowing for its reassignment later.

Later on in the project, you will update the value of `isError` if the user provides an invalid input.

# --hints--

You should declare an `isError` variable.

```js
assert.isDefined(isError);
```

Your `isError` variable should be set to `false`.

```js
assert.isFalse(isError);
```

You should use `let` to declare your `isError` variable.

```js
assert.match(code, /let\s+isError\s*=\s*false/g);
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
            <button type="submit">
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

button {
  cursor: pointer;
  text-decoration: none;
  background-color: var(--light-yellow);
  border: 2px solid var(--dark-yellow);
}

button,
input,
select {
  min-height: 24px;
  color: var(--dark-blue);
}

fieldset,
label,
button,
input,
select {
  margin-bottom: 10px;
}

.output {
  border: 2px solid var(--light-grey);
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
  color: var(--light-pink);
}

.deficit {
  color: var(--light-green);
}
```

```js
--fcc-editable-region--
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

--fcc-editable-region--
```
