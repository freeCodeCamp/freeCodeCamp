---
id: 6197f667297bb30a552ce017
title: Step 8
challengeType: 0
dashedName: step-8
---

# --description--

As the `.ground` element will be third in the stacking context of the page layout, set its `z-index` to `3`.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./styles.css" />
    <title>CSS Penguin</title>
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
  overflow: clip;
}

--fcc-editable-region--
.ground {
  width: 100vw;
  height: 400px;
  background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));

}
--fcc-editable-region--
```
