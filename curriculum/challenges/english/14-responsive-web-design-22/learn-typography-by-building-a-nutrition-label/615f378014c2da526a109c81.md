---
id: 615f378014c2da526a109c81
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

The font is a bit small. Create an `html` selector and set the font to have a size of `16px`.

# --hints--

You should have an `html` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('html'));
```

Your `html` selector should have a `font-size` property set to `16px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('html')?.fontSize === '16px');
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

body {
  font-family: 'Open Sans', sans-serif;
}
```
