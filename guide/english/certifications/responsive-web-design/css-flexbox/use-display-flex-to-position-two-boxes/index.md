---
title: "Use display: flex to Position Two Boxes"
---
## Use display: flex to Position Two Boxes

[Flexbox](https://github.com/freecodecamp/guides/tree/master/src/pages/css/layout/flexbox/index.md) is a way to structure content in CSS3 which allows you to create responsie websites.

This challenge is to set the first out of three steps when using Flexbox. You need to make the parent container a flex one by adding *display:flex;* to its CSS section. The CSS style can target a specific ID or HTML tag, or be aplied to multiple containers using a class. The parent container can be any container-type element, such as a div, section, header, footer, etc.

Syntax:

```css
#main-container {
    display: flex;
}
```


### Solution

```html
<style>
  #box-container {
    height: 500px;
    display: flex;
  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
