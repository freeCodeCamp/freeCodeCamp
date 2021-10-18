---
id: 60b69a66b6ddb80858c5157e
title: Part 8
challengeType: 0
dashedName: part-8
---

# --description--

Give the `back-wall` element a `width` of `100%` and a `height` of `60%`.

# --hints--

You should set the `width` of the `#back-wall` selector to `100%`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#back-wall')?.width === '100%');
```

You should set the `height` of the `#back-wall` selector to `60%`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#back-wall')?.height === '60%');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>freeCodeCamp Picasso Painting</title>
    <link rel="stylesheet" type="text/css" href="./styles.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  </head>
  <body>
    <div id="back-wall"></div>
  </body>
</html>
```

```css
body {
  background-color: rgb(184, 132, 46);
}

#back-wall {
  background-color: #8B4513;
  --fcc-editable-region--

  --fcc-editable-region--
}
```
