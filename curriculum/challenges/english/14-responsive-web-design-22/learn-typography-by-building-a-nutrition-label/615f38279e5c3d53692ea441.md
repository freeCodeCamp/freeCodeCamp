---
id: 615f38279e5c3d53692ea441
title: Step 7
challengeType: 0
dashedName: step-7
---

# --description--

Wrap your `h1` and `p` elements in a `div` element. Give that `div` a `class` attribute set to `label`.

# --hints--

You should create a new `div` element.

```js
assert(document.querySelector('div'));
```

Your new `div` element should have the `class` attribute set to `label`.

```js
assert(document.querySelector('div')?.classList?.contains('label'));
```

Your `h1` and `p` elements should be within your new `.label` element.

```js
const children = [...document.querySelectorAll('h1'), ...document.querySelectorAll('p')];
assert(children?.every(child => child?.parentElement?.classList?.contains('label')));
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

--fcc-editable-region--
<body>
  <h1>Nutrition Facts</h1>
  <p>8 servings per container</p>
  <p>Serving size 2/3 cup (55g)</p>
</body>
--fcc-editable-region--
</html>
```

```css
html {
  font-size: 16px;
}

body {
  font-family: 'Open Sans', sans-serif;
}
```
