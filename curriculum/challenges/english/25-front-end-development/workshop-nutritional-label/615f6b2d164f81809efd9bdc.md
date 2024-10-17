---
id: 615f6b2d164f81809efd9bdc
title: Step 43
challengeType: 0
dashedName: step-43
---

# --description--

After your last `.divider` element, create a `p` element and give it the text `Total Fat 8g 10%`. Then, wrap the text `Total Fat` in one `span` element, the text `10%` in another, and give them each a class of `bold`.

# --hints--

You should create a new `p` element at the end of your `.daily-value` element.

```js
assert(document.querySelector('.daily-value.small-text')?.lastElementChild?.localName === 'p');
```

Your new `p` element should have the text `Total Fat 8g 10%`.

```js
assert(document.querySelector('.daily-value.small-text')?.lastElementChild?.innerText?.match(/Total Fat[\s|\n]+8g[\s|\n]+10%/));
```

Your `p` element should have two `span` elements.

```js
assert(document.querySelector('.daily-value.small-text')?.lastElementChild?.querySelectorAll('span')?.length === 2);
```

One `span` element should wrap the text `Total Fat`.

```js
assert(document.querySelector('.daily-value.small-text')?.lastElementChild?.querySelector('span')?.innerText === 'Total Fat');
```

The `span` element around `Total Fat` should have the `class` set to `bold`.

```js
assert(document.querySelector('.daily-value.small-text')?.lastElementChild?.querySelector('span')?.className === 'bold');
```

A `span` element should wrap the text `10%`.

```js
assert(document.querySelector('.daily-value.small-text')?.lastElementChild?.querySelector('span + span')?.innerText === '10%');
```

The `span` element around `10%` should have the `class` set to `bold`.

```js
assert(document.querySelector('.daily-value.small-text')?.lastElementChild?.querySelectorAll('span')?.[1]?.className === 'bold');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Nutrition Label</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" rel="stylesheet">
  <link href="./styles.css" rel="stylesheet">
</head>

<body>
  <div class="label">
    <header>
      <h1 class="bold">Nutrition Facts</h1>
      <div class="divider"></div>
      <p>8 servings per container</p>
      <p class="bold">Serving size <span>2/3 cup (55g)</span></p>
    </header>
    <div class="divider large"></div>
    <div class="calories-info">
      <div class="left-container">
        <h2 class="bold small-text">Amount per serving</h2>
        <p>Calories</p>
      </div>
      <span>230</span>
    </div>
    <div class="divider medium"></div>
    --fcc-editable-region--
    <div class="daily-value small-text">
      <p class="bold right">% Daily Value *</p>
      <div class="divider"></div>
    </div>
    --fcc-editable-region--
  </div>
</body>
</html>
```

```css
* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: 'Open Sans', sans-serif;
}

.label {
  border: 2px solid black;
  width: 270px;
  margin: 20px auto;
  padding: 0 7px;
}

header h1 {
  text-align: center;
  margin: -4px 0;
  letter-spacing: 0.15px
}

p {
  margin: 0;
  display: flex;
  justify-content: space-between;
}

.divider {
  border-bottom: 1px solid #888989;
  margin: 2px 0;
}

.bold {
  font-weight: 800;
}

.large {
  height: 10px;
}

.large, .medium {
  background-color: black;
  border: 0;
}

.medium {
  height: 5px;
}

.small-text {
  font-size: 0.85rem;
}

.calories-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.calories-info h2 {
  margin: 0;
}

.left-container p {
  margin: -5px -2px;
  font-size: 2em;
  font-weight: 700;
}

.calories-info span {
  margin: -7px -2px;
  font-size: 2.4em;
  font-weight: 700;
}

.right {
  justify-content: flex-end;
}
```
