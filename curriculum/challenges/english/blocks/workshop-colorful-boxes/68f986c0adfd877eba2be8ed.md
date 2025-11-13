---
id: 68f986c0adfd877eba2be8ed
title: Step 24
challengeType: 0
dashedName: step-24
---

# --description--

Now add an `align-items` property with the value `center` to the `box` class.

The `align-items` property aligns flex items along the cross axis (perpendicular to the main axis). Since the `box` class has `flex-direction: column`, the cross axis is horizontal, so `center` will center items horizontally within the box.

# --hints--

You should have a property `align-items` with the value `center`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.box')?.getPropVal('align-items'), 'center');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Colored Boxes</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>Colored Boxes Layout</h1>
    </header>
    <div class="flex-container">
      <div class="box">
        <h3>Box 1</h3>
        <p>Red</p>
      </div>
      <div class="box">
        <h3>Box 2</h3>
        <p>Orange</p>
      </div>
      <div class="box">
        <h3>Box 3</h3>
        <p>Yellow</p>
      </div>
      <div class="box">
        <h3>Box 4</h3>
        <p>Green</p>
      </div>
      <div class="box">
        <h3>Box 5</h3>
        <p>Blue</p>
      </div>
      <div class="box">
        <h3>Box 6</h3>
        <p>Indigo</p>
      </div>
    </div>
  </body>
</html>
```

```css
h1 {
  text-align: center;
  margin-bottom: 10px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  height: auto;
  padding: 10px;
  margin: 20px auto;
  height: 400px;
  align-content: space-around;
}
--fcc-editable-region--
.box {
  flex: 1 1 400px;
  max-height: 120px;
  color: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
--fcc-editable-region--
```
