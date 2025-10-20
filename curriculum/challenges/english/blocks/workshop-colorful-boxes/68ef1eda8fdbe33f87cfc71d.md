---
id: 68ef1eda8fdbe33f87cfc71d
title: Step 13
challengeType: 0
dashedName: step-13
---

# --description--

Now change the second number in `flex` from `1` to `0` in the `box` class of our `styles.css` file.

The second value represents `flex-shrink`. This property controls how much the flex item will shrink when there isn't enough space in the container for all items.

# --hints--

Your class `box` should have a property `flex` with a value of `0 0 400px`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.box')?.flex, '0 0 400px');
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
--fcc-editable-region--
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
  align-content: space-evenly;
}

.box {
  flex: 0 1 400px;
  max-height: 120px;
  color: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-weight: bold;
  font-size: 1.125rem;
  border-radius: 5px;
  order: 0; 
}
--fcc-editable-region--
```
