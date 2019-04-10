---
title: Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
---
## Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis

### Solution

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    transform: skewY(-10deg);
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```
