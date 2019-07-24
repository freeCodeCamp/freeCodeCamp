---
title: Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
---
# Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

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

</details>