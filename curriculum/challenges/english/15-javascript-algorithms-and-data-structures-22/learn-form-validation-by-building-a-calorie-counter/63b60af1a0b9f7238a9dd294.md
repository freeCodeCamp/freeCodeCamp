---
id: 63b60af1a0b9f7238a9dd294
title: Step 10
challengeType: 0
dashedName: step-10
---

# --description--

Your select menu needs options for each of the food and exercise `fieldset` elements you created in the previous steps. Use the `option` element to create a new option for each `fieldset`. The `value` attribute of each option should be the `id` of the `fieldset`, and the text of each option should be the text of the `legend`.

Set the `Breakfast` option as the `selected` option.

# --hints--

You should create five `option` elements within your `select` element.

```js
assert.equal(document.querySelectorAll('.controls select option')?.length, 5);
```

Your first `option` should have the text `Breakfast`.

```js
assert.equal(document.querySelectorAll('.controls select option')?.[0]?.textContent?.trim(), 'Breakfast');
```

Your first `option` should have the `value` attribute set to `breakfast`.

```js
assert.equal(document.querySelectorAll('.controls select option')?.[0]?.value, 'breakfast');
```

Your second `option` should have the text `Lunch`.

```js
assert.equal(document.querySelectorAll('.controls select option')?.[1]?.textContent?.trim(), 'Lunch');
```

Your second `option` should have the `value` attribute set to `lunch`.

```js
assert.equal(document.querySelectorAll('.controls select option')?.[1]?.value, 'lunch');
```

Your third `option` should have the text `Dinner`.

```js
assert.equal(document.querySelectorAll('.controls select option')?.[2]?.textContent?.trim(), 'Dinner');
```

Your third `option` should have the `value` attribute set to `dinner`.

```js
assert.equal(document.querySelectorAll('.controls select option')?.[2]?.value, 'dinner');
```

Your fourth `option` should have the text `Snacks`.

```js
assert.equal(document.querySelectorAll('.controls select option')?.[3]?.textContent?.trim(), 'Snacks');
```

Your fourth `option` should have the `value` attribute set to `snacks`.

```js
assert.equal(document.querySelectorAll('.controls select option')?.[3]?.value, 'snacks');
```

Your fifth `option` should have the text `Exercise`.

```js
assert.equal(document.querySelectorAll('.controls select option')?.[4]?.textContent?.trim(), 'Exercise');
```

Your fifth `option` should have the `value` attribute set to `exercise`.

```js
assert.equal(document.querySelectorAll('.controls select option')?.[4]?.value, 'exercise');
```

Your first `option` should be selected by default.

```js
const isFirstOptionSelected = document.querySelectorAll('.controls select option')?.[0]?.getAttributeNames()?.includes('selected');
const selectedOptions = document.querySelectorAll('.controls select option[selected]');
assert.isTrue(isFirstOptionSelected && selectedOptions.length === 1);
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
--fcc-editable-region--
          <div class="controls">
            <span>
              <label for="entry-dropdown">Add food or exercise:</label>
              <select id="entry-dropdown" name="options">

              </select>
              <button type="button" id="add-entry">Add Entry</button>
            </span>
          </div>
--fcc-editable-region--
        </form>
      </div>
    </main>
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

```
