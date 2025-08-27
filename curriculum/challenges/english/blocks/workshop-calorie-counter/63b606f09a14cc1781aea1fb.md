---
id: 63b606f09a14cc1781aea1fb
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

In your form, users will be able to input a number which represents their daily calorie budget.

Create a `label` element, give it a `for` attribute set to `budget` and the text `Budget`, then create an `input` element with the `id` set to `budget`.

# --hints--

You should create a `label` element in your `form`.

```js
assert.exists(document.querySelector('form label'));
```

Your `label` element should have a `for` attribute set to `budget`.

```js
assert.equal(document.querySelector('form label')?.getAttribute('for'), 'budget');
```

Your `label` element should have the text `Budget`.

```js
assert.equal(document.querySelector('form label')?.innerText, 'Budget');
```

You should create an `input` element within your `form`.

```js
assert.exists(document.querySelector('form input'));
```

Your `input` element should come after your `label` element.

```js
assert.equal(document.querySelector('form input')?.previousElementSibling?.tagName, "LABEL");
```

Your `input` element should have an `id` set to `budget`.

```js
assert.equal(document.querySelector('form input')?.id, "budget");
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
