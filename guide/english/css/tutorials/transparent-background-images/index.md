---
title: Transparent Background Images
---
## Transparent Background Images

You have to add :before to the element which you want to add the transparent background image

HTML code:

```html
<div>
  lorem ipsum dolor sit amet
</div>
```

CSS code:

```css
div {
  width: 100px;
  height: 100px;
  display: block;
  margin: auto;
}

div:before {
  background: url(image.jpg);
  opacity: 0.5;
  width: 100px;
  height: 100px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -10;
  content: "";
}
```

You must have same width and height for div and div:before
