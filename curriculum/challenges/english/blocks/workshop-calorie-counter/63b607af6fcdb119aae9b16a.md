---
id: 63b607af6fcdb119aae9b16a
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

In your form, users should have the capability to add various meal types along with their calorie counts.

Create a `fieldset` element with the `id` set to `breakfast`.

Within that element, create a `legend` with the text `Breakfast`, and an empty `div` with the `class` set to `input-container`.

# --hints--

You should create a `fieldset` element in your `form`.

```js
assert.exists(document.querySelector('form fieldset'));
```

Your `fieldset` element should come after your `input` element.

```js
assert.equal(document.querySelector('form fieldset')?.previousElementSibling?.tagName, "INPUT");
```

Your `fieldset` element should have an `id` set to `breakfast`.

```js
assert.equal(document.querySelector('form fieldset')?.id, "breakfast");
```

You should create a `legend` element within your `fieldset`.

```js
assert.exists(document.querySelector('form fieldset legend'));
```

Your `legend` element should have the text `Breakfast`.

```js
assert.equal(document.querySelector('form fieldset legend')?.innerText, "Breakfast");
```

You should create a `div` element within your `fieldset`.

```js
assert.exists(document.querySelector('form fieldset div'));
```

Your `div` element should come after your `legend` element.

```js
assert.equal(document.querySelector('form fieldset div')?.previousElementSibling?.tagName, "LEGEND");
```

Your `div` element should have a `class` set to `input-container`.

```js
assert.equal(document.querySelector('form fieldset div')?.className, "input-container");
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
