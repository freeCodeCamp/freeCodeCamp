---
title: Make Typography Responsive
---
## Make Typography Responsive

Following the instructions:

Set the width of the h2 tag to 80% of the viewport's width and the width of the paragraph as 75% of the viewport's smaller dimension.

the style becomes:

```css
  <style>
    h2 { width: 80vw; }
    p { width: 75vmin; }
  </style>
```
note that **vw** unit is viewport's width, and **vmin** unit is viewport's smaller dimension (height vs. width)