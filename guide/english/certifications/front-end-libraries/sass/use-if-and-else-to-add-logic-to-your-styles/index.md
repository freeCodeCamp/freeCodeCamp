---
title: Use @if and @else to Add Logic To Your Styles
---
## Use @if and @else to Add Logic To Your Styles

Conditionals such as if, else, and else if work just like in JavaScript. Conditionals also begin with the @ sign infront of the if, else, or else if. 

## Syntax Example:
```
@if x == light {
  code goes here...
}
```
---
Conditionals can be used to change properties of an element based on a condition.

## Problem:
```
<style type='text/sass'>
  
  
  
  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }  
</style>

<div id="box"></div>
```

## Solution:

```
<style type='text/sass'>
  @mixin border-stroke($val){
    @if $val == light{
      border: 1px solid black;
    }
    @else if $val == medium{
      border: 3px solid black;
    }
    @else if $val == heavy{
      border: 6px solid black;
    }
    @else{
    border:none;
    }
  }
  
  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }  
</style>

<div id="box"></div>

```

