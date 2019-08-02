---
title: Use Clockwise Notation to Specify the Margin of an Element
---
# Use Clockwise Notation to Specify the Margin of an Element

---
## Problem Explanation
Instead of specifying an element’s `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` attributes, you can specify them all in one line, like this: `margin: 10px 20px 10px 20px;`.

These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific margin instructions.

```css
.green-box {
  background-color: green;
  margin: 40px 20px 20px 40px;
}
```

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

</details>
