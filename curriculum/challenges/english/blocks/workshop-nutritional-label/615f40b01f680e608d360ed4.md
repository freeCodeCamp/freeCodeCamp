---
id: 615f40b01f680e608d360ed4
title: Step 18
challengeType: 0
dashedName: step-18
---

# --description--

The `letter-spacing` property can be used to adjust the space between each character of text in an element.

Give your `h1` selector a `letter-spacing` property set to `0.15px` to space them out a bit more.

# --hints--

Your `h1` selector should have a `letter-spacing` property set to `0.15px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.letterSpacing === '0.15px');
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
    <div class="divider"></div>
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

--fcc-editable-region--
h1 {
  font-weight: 800;
  text-align: center;
  margin: -4px 0;
}
--fcc-editable-region--

p {
  margin: 0;
}

.divider {
  border-bottom: 1px solid #888989;
  margin: 2px 0;
}
```
