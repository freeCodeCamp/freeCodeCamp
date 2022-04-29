---
id: 615f7fa959ab75948f96a0d6
title: Step 55
challengeType: 0
dashedName: step-55
---

# --description--

Below your last `p` element, add another `p` element with the text `Dietary Fiber 4g`. Give the `p` element the `class` necessary to indent it and remove the dividing border. Then create a divider below that `p` element.

# --hints--

You should create a new `p` and `div` element at the end of your `.daily-value.sm-text` element.

```js
assert(document.querySelector('.daily-value.sm-text')?.lastElementChild?.previousElementSibling?.localName === 'p');
assert(document.querySelector('.daily-value.sm-text')?.lastElementChild?.localName === 'div');
```

Your new `p` element should have the text `Dietary Fiber 4g`.

```js
assert(document.querySelector('.daily-value.sm-text p:last-of-type')?.innerText.match(/Dietary Fiber[\s|\n]+4g/));
```

Your new `p` element should have the `class` attribute set to `indent no-divider`.

```js
assert(document.querySelector('.daily-value.sm-text p:last-of-type')?.classList?.contains('indent'));
assert(document.querySelector('.daily-value.sm-text p:last-of-type')?.classList?.contains('no-divider'));
```

Your new `div` should have the `class` attribute set to `divider`.

```js
assert(document.querySelector('.daily-value.sm-text')?.lastElementChild?.classList?.contains('divider'));
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
--fcc-editable-region--
        <p class="right bold no-divider">% Daily Value *</p>
        <div class="divider"></div>
        <p><span class="bold">Total Fat</span> 8g<span class="bold right">10%</span></p>
        <p class="indent no-divider">Saturated Fat 1g <span class="bold right">5%</span></p>
        <div class="divider"></div>
        <p class="indent no-divider"><i>Trans</i> Fat 0g</p>
        <div class="divider"></div>
        <p><span class="bold">Cholesterol</span> 0mg <span class="right bold">0%</span></p>
        <p><span class="bold">Sodium</span> 160mg <span class="right bold">7%</span></p>
        <p><span class="bold">Total Carbohydrate</span> 37g <span class="right bold">13%</span></p>
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

.indent {
  margin-left: 1em;
}

.daily-value p:not(.no-divider) {
  border-bottom: 1px solid #888989;
}
```
