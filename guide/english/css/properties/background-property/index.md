---
title: Background Property
---
## Background Property

The CSS background property allows one to declare all eight background properties at once using this a short-hand declaration<sup>1</sup>.

The background property is specified as one or more background layers, separated by commas for the following properties<sup>2</sup>:

  * background-color
  * background-image
  * background-position
  * background-size
  * background-repeat
  * background-origin
  * background-clip
  * background-attachment

Syntax<sup>1</sup>:

```css
body {
  /* Using a <background-color> */
  background: green;
}

.error {
  /* Using a <bg-image> and <repeat-style> */
  background: url("test.jpg") repeat-y;
}

header {
  /* Using a <box> and <background-color> */
  background: border-box red;
}

.topbanner {
  /* A single image, centered and scaled */
  background: no-repeat center/80% url("../img/image.png");
}
```

### Sources

1. [Visit MDN's Background page for more information.](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
2. [Visit W3School's CSS background Property page for more information.](https://www.w3schools.com/cssref/css3_pr_background.asp)
