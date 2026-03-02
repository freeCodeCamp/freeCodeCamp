---
id: 615f3e4af8008c5d494d3afe
title: Step 15
challengeType: 0
dashedName: step-15
---

# --description--

Create a `p` selector and remove all margins.

# --hints--

You should create a `p` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('p'));
```

Your `p` selector should have a `margin` property set to `0`.

```js
assert(new __helpers.CSSHelp(document).getStyle('p')?.margin === '0px');
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
    <h1>Nutrition Facts</h1>
    <p>8 servings per container</p>
    <p>Serving size 2/3 cup (55g)</p>
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

h1 {
  font-weight: 800;
  text-align: center;
  margin: -4px 0;
}

--fcc-editable-region--

--fcc-editable-region--
```
