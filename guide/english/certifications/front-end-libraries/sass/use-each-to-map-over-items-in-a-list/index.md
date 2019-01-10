---
title: Use @each to Map Over Items in a List
---
## Use @each to Map Over Items in a List

The @each directive loops over a list and for each iteration the variable is assigned the value in the list.

## Example:

```
@each $color in white, black, blue {
  .#{$color}-font {
    color: $color;
  }
}
<div class="white-font"></div>
<div class="black-font"></div>
<div class="blue-font"></div>
```
---

## Problem: 
Use @each to assign a different background color to each of the divs as explained in the challenge.
```
<style type='text/sass'>

  div {
    height: 200px;
    width: 200px;
  }
  
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

## Solution: 
```
<style type='text/sass'>

  @each $color in blue, red, black {
    .#{$color}-bg {
      background-color: $color;
    }
  }
  
  div {
    height: 200px;
    width: 200px;
  }
  
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```
