---
id: 63b6075a62883218d282504c
title: Step 3
challengeType: 0
dashedName: step-3
---

# --description--

Your `input` element needs some additional attributes. Give it a `type` set to `number` to only allow numeric inputs, a `min` attribute set to `0` to only allow positive numbers, and a `placeholder` set to `Daily calorie budget`.

Finally, mark the `input` element as `required`.

# --hints--

Your `input` element should have a `type` attribute set to `number`.

```js
assert.equal(document.querySelector('form input').type, 'number');
```

Your `input` element should have a `min` attribute set to `0`.

```js
assert.equal(document.querySelector('form input').min, '0');
```

Your `input` element should have a `placeholder` attribute set to `Daily calorie budget`.

```js
assert.equal(document.querySelector('form input').placeholder, 'Daily calorie budget');
```

Your `input` element should have a `required` attribute.

```js
assert.equal(document.querySelector('form input').hasAttribute('required'), true);
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
--fcc-editable-region--
        <form id="calorie-counter">
          <label for="budget">Budget</label>
          <input id="budget" />
        </form>
--fcc-editable-region--
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
