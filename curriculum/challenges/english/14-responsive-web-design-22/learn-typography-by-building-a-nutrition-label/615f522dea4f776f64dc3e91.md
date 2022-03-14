---
id: 615f522dea4f776f64dc3e91
title: Step 31
challengeType: 0
dashedName: step-31
---

# --description--

The `rem` unit stands for `root em`, and is relative to the font size of the `html` element.

Create an `.sm-text` selector and set the `font-size` to `0.85rem`, which would calculate to be roughly `13.6px` (remember that you set your `html` to have a `font-size` of `16px`).

# --hints--

You should have an `.sm-text` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('.sm-text'));
```

Your `.sm-text` selector should have a `font-size` property set to `0.85rem`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.sm-text')?.fontSize === '0.85rem');
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

--fcc-editable-region--

--fcc-editable-region--
```
