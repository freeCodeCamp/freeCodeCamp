---
title: Use @each to Map Over Items in a List
---
# Use @each to Map Over Items in a List

---
## Problem Explanation
The @each directive loops over a list and for each iteration the variable is assigned the value in the list.

**Example:**

```html
<style type='text/sass'>
  
@each $color in white, black, blue {
  .#{$color}-font {
    color: $color;
  }
}

</style>

<div class="white-font"></div>
<div class="black-font"></div>
<div class="blue-font"></div>



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```html
<style type='text/sass'>

  @each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
  }
  
  div {
    height: 200px;
    width: 200px;
  }

</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>


The solution above will generate the following CSS:

```css
.blue-bg {
   background-color: blue;
 }
 
.black-bg {
   background-color: black;
 }
 
.red-bg {
   background-color: red;
 }
 
div {
  height: 200px;
  width: 200px;
}
```
</details>
