---
title: Introduction to the Learn More About CSS Pseudo Selectors By Building A Balance Sheet
block: learn-more-about-css-pseudo-selectors-by-building-a-balance-sheet
superBlock: 2022/responsive-web-design
---

## Introduction to the Learn More About CSS Pseudo Selectors by Building A Balance Sheet

CSS Pseudo-selectors allow you to apply styles to elements based on their state, position, or specific criteria, without needing additional classes or JavaScript.

Pseudo-classes apply depending on an element's state or position in the document. For example, you can target elements when they are being hovered over:

```css
.button:hover {
  background-color: #ffeb3b;
  color: #000;
}
```

Or target odd rows in a list:

```css
.list-item:nth-child(odd) {
  background-color: #e0f7fa;
}
```

Pseudo-elements allow you to style specific parts of an element. For example, you can target the pseudo-element that comes after an element:

```css
.heading::after {
  content: ' ✨';
  color: gold;
}
```

Or you can make the first letter in a paragraph extra large:

```css
p::first-letter {
  font-size: 2em;
  color: #e91e63;
}
```
