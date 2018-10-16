---
title: Give a Background Color to a div Element
---
## Give a Background Color to a div Element

You can change the `background` `color` to a `div` Element (or section) by one of two ways.

<b>The First Method:</b>

Create a `class` in the style brackets.
```html
<style>
 .blue-background {
    background-color: blue;
  }
</style>
```
You can then add the `class` to your `div` Element:
```html
<div class="blue-background">
  <p> Example </p>
</div>
```
 
<b>The Second Method:</b>
 
Instead of creating a `class` like in the first method, you can create a `div` Element `class` in the style brackets.
    
Every `div` Element will have the `class` you created and assigned.
    
(This means it is a repeating `class` for every `div` Element that you create.)

```html
<style>
  div {
    background-color: blue;
  }
</style>
```
