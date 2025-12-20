---
id: 615f357957e370510f21ea16
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

Create a `body` selector and give it a `font-family` set to `Open Sans` with a fallback of `sans-serif`.

Remember that fonts with spaces in the name must be wrapped in quotes for CSS.

# --hints--

You should have a `body` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('body'));
```

Your `body` selector should have a `font-family` property set to `"Open Sans", sans-serif`.

```js
assert(new __helpers.CSSHelp(document).getStyle('body')?.fontFamily === '"Open Sans", sans-serif');
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
  <h1>Nutrition Facts</h1>
  <p>8 servings per container</p>
  <p>Serving size 2/3 cup (55g)</p>
</body>
</html>
```

```css
--fcc-editable-region--

--fcc-editable-region--
```
