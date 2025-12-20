---
id: 61968f8877c6720d6d61aaf5
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

Within the `body`, add a `div` with a `class` of `ground`.

# --hints--

You should add a new `div`.

```js
assert.exists(document.querySelector('div'));
```

You should give the `div` a `class` of `ground`.

```js
assert.include(document.querySelector('div')?.className, 'ground');
```

You should place the `div` within the `body`.

```js
assert.exists(document.querySelector('body > div.ground'));
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

--fcc-editable-region--
  <body>

  </body>
--fcc-editable-region--
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
```
