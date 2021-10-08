---
id: 615f41c979787462e76dab90
title: Part 20
challengeType: 0
dashedName: part-20
---

# --description--

Your new class does not have any styling yet. Create a `.bold` selector and give it a `font-weight` property set to `800` to make the text bold.

Go ahead and remove the `font-weight` property from your `h1` selector as well.

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
  letter-spacing: 0.15px;
}

p {
  margin: 0;
}

.divider {
  border-bottom: 1px solid #888989;
  margin: 2px 0;
}

--fcc-editable-region--
```
