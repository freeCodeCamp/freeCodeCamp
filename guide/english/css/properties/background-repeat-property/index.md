---
title: Background Repeat Property
---
## Background Repeat Property

The background-repeat CSS property defines how background images are repeated.

A background image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
By default, a background-image is repeated both vertically and horizontally.

Syntax:

```css
background-repeat: repeat|repeat-x|repeat-y|no-repeat|initial|inherit;

```
* repeat: The background image will be repeated both vertically and horizontally. This is default

* repeat-x:	The background image will be repeated only horizontally

* repeat-y:	The background image will be repeated only vertically.

* no-repeat:	The background-image will not be repeated.

* initial:	Sets this property to its default value.

* inherit:	Inherits this property from its parent element.

Examples:
For repeating the image both horizontally and vertically
```css
body {
  background-image:url(smiley.gif);
  background-repeat:repeat;
}
```
For repeat the image horizontally
```css
body {
  background-image:url(smiley.gif);
  background-repeat:repeat-x;
}
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[For more information about background repeat property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
