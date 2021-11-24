---
id: 6196928658b6010f28c39484
title: Step 7
challengeType: 0
dashedName: step-7
---

# --description--

Give the `.ground` element a `background` with a linear gradient angled 90 degrees clockwise, starting at `rgb(88, 175, 236)` and ending at `rgb(182, 255, 255)`.

# --hints--

You should give `.ground` a `background` of `linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255))`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.ground')?.getPropVal('background', true), 'linear-gradient(90deg,rgb(88,175,236),rgb(182,255,255))');
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

}
--fcc-editable-region--
```
