---
title: Introduction to the Learn Intermediate CSS by Building a Cat Painting
block: learn-intermediate-css-by-building-a-cat-painting
superBlock: 2022/responsive-web-design
---

## Introduction to the Learn Intermediate CSS by Building a Cat Painting

Intermediate CSS goes beyond the basics to give you more control over your web designs. You'll learn how to position elements precisely, layer content, and apply transformations that make your website look professional and engaging.

Absolute positioning allows you to place elements precisely where you want them on the page, relative to their nearest positioned ancestor.

```css
.container {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: lightblue;
}
.element {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 100px;
  background-color: coral;
}
```

The z-index property controls the stacking order of elements. Elements with a higher z-index value appear in front of, or on top of, those with a lower value.

```css
.element1 {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 100px;
  background-color: coral;
  z-index: 1; /* Lower z-index */
}

.element2 {
  position: absolute;
  top: 70px;
  left: 70px;
  width: 100px;
  height: 100px;
  background-color: lightgreen;
  z-index: 2; /* Higher z-index */
}
```

The `transform` property allows you to apply various transformations like rotate, scale, translate, and skew to elements.

```css
.element {
  transform: rotate(45deg);
}
```
