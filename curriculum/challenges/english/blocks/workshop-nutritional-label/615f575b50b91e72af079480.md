---
id: 615f575b50b91e72af079480
title: Step 35
challengeType: 0
dashedName: step-35
---

# --description--

Create a new `.left-container p` selector setting the top and bottom margin to `-5px`, and the left and right margin to `-2px`. Also set the `font-size` to `2em` and `font-weight` to `700`.

# --hints--

You should have a new `.left-container p` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('.left-container p'));
```

Your new `.left-container p` selector should have a `margin` property set to `-5px -2px`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.left-container p')?.marginTop, '-5px');
assert.equal(new __helpers.CSSHelp(document).getStyle('.left-container p')?.marginBottom, '-5px');
assert.equal(new __helpers.CSSHelp(document).getStyle('.left-container p')?.marginLeft, '-2px');
assert.equal(new __helpers.CSSHelp(document).getStyle('.left-container p')?.marginRight, '-2px');
```

Your new `.left-container p` selector should have a `font-size` property set to `2em`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.left-container p')?.fontSize === '2em');
```

Your new `.left-container p` selector should have a `font-weight` property set to `700`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.left-container p')?.fontWeight === '700');
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

--fcc-editable-region--

--fcc-editable-region--
```
