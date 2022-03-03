---
id: 616d50b93ba424d6282c99cf
title: Step 12
challengeType: 0
dashedName: step-12
---

# --description--

Notice that your marker doesn't seem to have any color. The background color was actually applied, but since the marker `div` element is empty, it doesn't have any width or height by default.

In your `.marker` CSS rule, set the `width` property to `200px` and the `height` property to `25px`.

# --hints--

Your `.marker` CSS rule should have a `width` property set to `200px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.marker')?.width === '200px');
```

Your `.marker` CSS rule should have a `height` property set to `25px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.marker')?.height === '25px');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Color Markers</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
      <div class="marker">
      </div>
    </div>
  </body>
</html>
```

```css
h1 {
  text-align: center;
}

--fcc-editable-region--
.marker {
  background-color: red;
}
--fcc-editable-region--

```
