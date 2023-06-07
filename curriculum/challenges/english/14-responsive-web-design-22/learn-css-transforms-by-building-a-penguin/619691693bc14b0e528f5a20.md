---
id: 619691693bc14b0e528f5a20
title: Step 7
challengeType: 0
dashedName: step-7
---

# --description--

Target the `.ground` element, and set its `width` to take up the full width of the viewport. Then, set the `height` to `400px`.

# --hints--

You should use the `.ground` selector.

```js
assert.match(code, /\.ground\s*\{/);
```

You should give the `.ground` element a `width` of `100vw`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.ground')?.width, '100vw');
```

You should give the `.ground` element a `height` of `400px`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.ground')?.height, '400px');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./styles.css" />
    <title>Penguin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
    <div class="ground"></div>
  </body>
</html>
```

```css
body {
  background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

--fcc-editable-region--

--fcc-editable-region--
```
