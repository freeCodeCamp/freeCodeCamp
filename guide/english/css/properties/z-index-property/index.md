---
title: Z Index Property
---
## Z Index Property

The z-index property specifies the stack order of an element.
Any positioned elements on a web page can overlap one another in a certain order, imitating a third dimension perpendicular to the screen.
An element with greater stack order is always in front of an element with a lower stack order. Stack order is controlled by the z-index. This property only works for elements whose position value is set to absolute, fixed, or relative.

#### Syntax
z-index: auto|number|initial|inherit;

#### Example
```
div {
  position: absolute;
  z-index: -1;
}
```

#### Values
Auto:	Sets the stack order equal to its parents. This is default.
Number:	Sets the stack order of the element. Negative numbers are allowed. The higher the value, the higher the element is. With an equal value of z-index the element that is described in the HTML code below will be in front.
Initial:	Sets this property to its default value.
Inherit:	Inherits this property from its parent element.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/z-index' target='_blank' rel='nofollow'>Z-index on MDN</a>
<a href='https://www.w3schools.com/cssref/pr_pos_z-index.asp' target='_blank' rel='nofollow'>Z-index onW3schools</a>
