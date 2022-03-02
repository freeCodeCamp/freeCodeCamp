---
id: 615f6cc778f7698258467596
title: Step 43
challengeType: 0
dashedName: step-43
---

# --description--

Below your element with the `Total Fat` text, create a new `p` element with the text `Saturated Fat 1g 5%`. Wrap the `5%` in a `span` with the `class` attribute set to `bold right`.

# --hints--

You should create a new `p` element below your element with the `Total Fat` text.

```js
assert(document.querySelector('.daily-value.sm-text')?.lastElementChild?.localName === 'p');
assert(document.querySelector('.daily-value.sm-text')?.lastElementChild?.previousElementSibling?.innerText.match(/Total Fat 8g\s*10%/));
```

Your new `p` element should have the text `Saturated Fat 1g 5%`.

```js
assert(document.querySelector('.daily-value.sm-text')?.lastElementChild?.innerText.match(/Saturated Fat 1g\s*5%/));
```

Your new `p` element should have a `span` element.

```js
assert(document.querySelector('.daily-value.sm-text')?.lastElementChild?.lastElementChild?.localName === 'span');
```

Your `span` element should have the `class` attribute set to `bold right`.

```js
assert(document.querySelector('.daily-value.sm-text')?.lastElementChild?.lastElementChild?.classList?.contains('bold'));
assert(document.querySelector('.daily-value.sm-text')?.lastElementChild?.lastElementChild?.classList?.contains('right'));
```

Your `span` element should wrap the `5%` text.

```js
assert(document.querySelector('.daily-value.sm-text')?.lastElementChild?.lastElementChild?.innerText === "5%");
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
        <p class="bold">Serving size <span class="right">2/3 cup (55g)</span></p>
      </header>
      <div class="divider lg"></div>
      <div class="calories-info">
        <p class="bold sm-text">Amount per serving</p>
        <h1>Calories <span class="right">230</span></h1>
      </div>
      <div class="divider md"></div>
      <div class="daily-value sm-text">
        <p class="right bold">% Daily Value *</p>
        <div class="divider"></div>
        <p><span class="bold">Total Fat</span> 8g<span class="bold right">10%</span></p>
--fcc-editable-region--

--fcc-editable-region--
      </div>
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
}

.divider {
  border-bottom: 1px solid #888989;
  margin: 2px 0;
  clear: right;
}

.bold {
  font-weight: 800;
}

.right {
  float: right;
}

.lg {
  height: 10px;
}

.lg, .md {
  background-color: black;
  border: 0;
}

.md {
  height: 5px;
}

.sm-text {
  font-size: 0.85rem;
}

.calories-info h1 {
  margin: -5px -2px;
  overflow: hidden;
}

.calories-info span {
  font-size: 1.2em;
  margin-top: -7px;
}
```
