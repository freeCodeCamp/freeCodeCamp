---
title: Background Position Property
---
## Background Position Property
The background-property sets the position from where the background image should start. In other words, this property will take an x-value and a y-value and will start the image from the point `(x, y)`.

**Example:**
```css
/* setting background-image of HTML doc */
body {
  background-image: url('https://cdn-media-1.freecodecamp.org/imgr/6Z2VStD.png');
  background-repeat: no-repeat;
  background-position: right top;
}
```

By default, the background-position property is set to `0% 0%`.

**Property values:**

`background-position: x-value y-value` where,

_x-value_: `left | center | right | x% | x px`, and

_y-value_: `top | center | bottom | y% | y px`.

Other permitted property values are `initial` and `inherit`.

`initial`: Sets this property to its default value.

`inherit`: Inherits the value from parent element.

**Note:** When only one value is given to background-property, then the other is, by default, set to `center`.

**Other Resources:**

MDN Docs: https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
