---
id: 667d1bb875f5961913176069
title: Step 44
challengeType: 0
dashedName: step-44
---

# --description--

Notice how the text `8g` appears centered in the preview. Nest the `span` element containing the text `Total Fat` along with the text `8g`, in an additional `span` element for alignment.

# --hints--

You should have a `span` element around the code `<span class="bold">Total Fat</span> 8g`.

```js
assert.match(document.querySelector('.daily-value.small-text')?.lastElementChild?.querySelector('span')?.innerHTML, /^<span class=("|')bold\1>Total Fat<\/span> 8g\s?$/);
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
    <div class="daily-value small-text">
      <p class="bold right">% Daily Value *</p>
      <div class="divider"></div>
--fcc-editable-region--
      <p><span class="bold">Total Fat</span> 8g <span class="bold">10%</span></p>
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
