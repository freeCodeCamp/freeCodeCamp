---
id: 615f4ce9d877b668417c0c42
title: Step 24
challengeType: 0
dashedName: step-24
---

# --description--

Wrap everything within the `.label` element in a new `header` element.

# --hints--

You should create a new `header` element.

```js
assert(document.querySelector('header'));
```

Your `header` element should be within your `.label` element.

```js
assert(document.querySelector('header')?.parentElement?.classList?.contains('label'));
```

Your `h1`, `div`, and `p` elements should be within your new `header` element.

```js
const children = document.querySelector('header')?.children;
assert(children?.[0]?.localName === 'h1');
assert(children?.[1]?.localName === 'div');
assert(children?.[2]?.localName === 'p');
assert(children?.[3]?.localName === 'p');
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
--fcc-editable-region--
  <div class="label">
    <h1 class="bold">Nutrition Facts</h1>
    <div class="divider"></div>
    <p>8 servings per container</p>
    <p class="bold">Serving size <span>2/3 cup (55g)</span></p>
  </div>
--fcc-editable-region--
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
```
