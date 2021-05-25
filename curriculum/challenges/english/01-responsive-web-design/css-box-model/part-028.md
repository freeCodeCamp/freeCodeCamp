---
id: 60a3e3396c7b40068ad69985
title: Part 28
challengeType: 0
dashedName: part-28
---

# --description--

Use margins to adjust the spacing between `one` and `two`.

Change the `margin` of `.one` to `20px auto 20px` so the top margin is 20 pixels, it's centered horizontally, and the bottom margin is 20 pixels.

# --hints--

You should set the `margin` property to `20px auto 20px`.

```js
const hasMargin = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style.margin === '20px auto');
// TODO: Why is this stripped? Because margins are the same?
assert(hasMargin);
```

Your `.one` element should have a `margin` value of `20px auto 20px`.

```js
const oneMargin = new __helpers.CSSHelp(document).getStyleDeclaration('.one').getPropertyValue('margin');
assert(oneMargin === '20px auto');
// Should probably test for 20px auto 20px, but might need regex?
```

# --seed--

## --seed-contents--

```css
.canvas {
  width: 500px;
  height: 600px;
  background-color: #4d0f00;
  overflow: hidden;
}

.frame {
  border: 50px solid black;
  width: 500px;
  padding: 50px;
  margin: 20px auto;
}

.one {
  width: 425px;
  height: 150px;
  background-color: #efb762;
--fcc-editable-region--
  margin: 20px auto;
--fcc-editable-region--
}

.two {
  width: 475px;
  height: 200px;
  background-color: #8f0401;
  margin: auto;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Rothko</title>
    <link href="./css/style10.css" rel="stylesheet">
  </head>
  <body>
    <div class="frame">
      <div class="canvas">
        <div class="one"></div>
        <div class="two"></div>
      </div>
    </div>
  </body>
</html>
```
