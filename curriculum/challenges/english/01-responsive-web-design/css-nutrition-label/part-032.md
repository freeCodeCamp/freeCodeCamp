---
id: 615f5486b8fd4b71633f69b0
title: Part 32
challengeType: 0
dashedName: part-32
---

# --description--

Below your `.sm-text` element, create a new `h1` element with the text `Calories 230`. Wrap the `230` portion of the text in a `span` element with the `class` set to `right`.

# --hints--

Test 1

```js

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
--fcc-editable-region--
      <div class="calories-info">
        <p class="bold sm-text">Amount per serving</p>
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
}

.divider {
  border-bottom: 1px solid #888989;
  margin: 2px 0;
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

.sm-text {
  font-size: 0.85rem;
}
```
