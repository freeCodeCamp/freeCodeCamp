---
title: Layout Horizontal and Vertical Align
---
## Layout Horizontal and Vertical Align
CSS has properties that create space both around and inside an element. You will use one, or a combination of these properties to create layouts.

### Properties Used To Create Layouts
You will use the following properties to align elements and create layouts:
- [margin](https://guide.freecodecamp.org/css/margins/)
- [position](https://guide.freecodecamp.org/css/css-position)
- [float and clear](https://guide.freecodecamp.org/css/layout/float-and-clear)
- [text-align](https://guide.freecodecamp.org/css/text-align)
- [padding](https://guide.freecodecamp.org/css/padding)
- [line-height](https://guide.freecodecamp.org/css/text)

### Horizontal Align
The `margin` property will create space around an element. Use the `auto` value to equally distribute remaining space on either side.

```css
.horizontal-center {
  margin: auto;
}
```

`Block` elements must have a `width` set to avoid filling the viewport:

```html
<div class="square horizontal-center"><div>
```

```css
.square {
  width: 250px;
  height: 250px;
  background-color: tomato;
}
.horizontal-center {
  margin: auto;
}
```
`Inline-block` elements, such as an `<img>`, can be aligned by setting the `display` property to `block`.

```html
<img src="image.jpg" alt="image">
```

```css
img {
  display: block;
  width: 250px;
  margin: auto;
}
```

Use the `position` property and set left and right location of the element.

```html
<div class="left-square"><div>
<div class="right-square"><div>
```
```css
.left-square {
  position: absolute;
  left: 100px;
  width: 250px;
  height: 250px;
  background-color: tomato;
}
.right-square {
  position: absolute;
  right: 100px;
  width: 250px;
  height: 250px;
  background-color: tomato;
}
```
Send an element to the right, or left of the page using the `float` property.

```css
img {
  float: right;
}
```

```css
img {
  float: left;
}
```

Remember floated items are removed from the normal flow. You will need to  [clear](https://guide.freecodecamp.org/css/layout/float-and-clear/) your items to get the proper layout.

Text can be aligned by setting the parent element's `text-align` property.

```css
div {
  text-align: center;
}
```

### Vertical Align
Using `margin` there isn't an `auto` property to vertically align elements. You will set the distance unit for `margin-top` and/or `margin-bottom` properties.

```css
img {
  margin-top: 100px;
  width: 250px;
  height: 250px;
}
```

The same applies when using the `position` property.
```css
img {
  position: absolute;
  top: 100px;
  width: 250px;
  height: 250px;
}
```

Aligning child elements can be done by setting the parent element's `padding`.

```html
<div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```

```css
div {
  padding: 100px 0;
}
```

For text, set the `line-height` to the parent element's height for a center alignment.

```html
<div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```

```css
div {
  height: 250px;
  line-height: 250px;
}
```

#### Encouraged Reading:
- MDN Web docs: [CSS Layouts](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
- w3schools: [CSS Layout - Horizontal &amp; Vertical Align](https://www.w3schools.com/css/css_align.asp)
