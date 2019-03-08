---
title: Use @each to Map Over Items in a List
---
## Use @each to Map Over Items in a List

## Solution

```sass
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
```


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
