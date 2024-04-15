---
id: 63b60c09c5039f25a3b2dda9
title: Step 11
challengeType: 0
dashedName: step-11
---

# --description--

Create another `div` element. Within it, nest a `button` to `submit` the form. This button should have the text `Calculate Remaining Calories`.

Then add a `button` with the `id` set to `clear` to clear the form (don't forget to give it a `type` attribute that prevents it from submitting the form). This button needs the text `Clear`.


# --hints--

You should create a second `div` element.

```js
assert.equal(document.querySelectorAll('form > div')?.length, 2);
```

Your new `div` element should have a `button` element.

```js
assert.exists(document.querySelectorAll('form > div')?.[1]?.querySelector('button'));
```

Your `button` element should have a `type` attribute set to `submit`.

```js
assert.equal(document.querySelectorAll('form > div')?.[1]?.querySelector('button')?.getAttribute('type'), 'submit');
```

Your `button` element should have the text `Calculate Remaining Calories`.

```js
assert.equal(document.querySelectorAll('form > div')?.[1]?.querySelector('button')?.innerText, 'Calculate Remaining Calories');
```

Your `div` element should have a second `button` element.

```js
assert.exists(document.querySelectorAll('form > div')?.[1]?.querySelectorAll('button')?.[1]);
```

Your second `button` element should have a `type` attribute set to `button`.

```js
assert.equal(document.querySelectorAll('form > div')?.[1]?.querySelectorAll('button')?.[1]?.getAttribute('type'), 'button');
```

Your second `button` element should have an `id` attribute set to `clear`.

```js
assert.equal(document.querySelectorAll('form > div')?.[1]?.querySelectorAll('button')?.[1]?.getAttribute('id'), 'clear');
```

Your second `button` element should have the text `Clear`.

```js
assert.equal(document.querySelectorAll('form > div')?.[1]?.querySelectorAll('button')?.[1]?.innerText, 'Clear');
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
--fcc-editable-region--

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
