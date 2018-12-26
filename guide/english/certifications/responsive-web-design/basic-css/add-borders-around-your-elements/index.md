---
title: Add Borders Around Your Elements
---
## Add Borders Around Your Elements

## Hint
To add a custom border around any HTML element, these three properties are used as shown below.

```css
.className {
    border-width: 10px;  /*sets the width/thickness of border to 10 pixels*/
    border-color: pink;  /*sets the color of the border to pink*/
    border-style: solid; /*sets the style of the border to solid line type*/
 }
```

The same className should be used as the value for class attribute of the HTML element which has to be styled. Good Luck!

## Solution:
We need to create a class called `thick-green-border`. This class should add a 10px, solid, green border around an HTML element. and after, we need to apply the class to your cat photo.

We add between `<style>` and `</style>` new class `thick-green-border` with properties:

```css
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
  }
```
Also, we can add properties this way:

```css
  .thick-green-border {
    border: 10px solid green;
  }
```
The final stage is adding this class to image:

```html
<img class="smaller-image thick-green-border" 
src="https://bit.ly/fcc-relaxing-cat" 
alt="A cute orange cat lying on its back.">
```
