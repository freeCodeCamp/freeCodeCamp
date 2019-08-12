---
title: Use the order Property to Rearrange Items
---
# Use the order Property to Rearrange Items

---
## Problem Explanation
Before you make any changes, pay attention to the order of the colors. You get blue on the left and red ont eh right. After you set the `order` property you will be able to pick which one should be displayed first without having to change the html code.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    order: 2;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
</details>
