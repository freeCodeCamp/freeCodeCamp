---
title: Box Shadow
---

## Box Shadow

The `box-shadow` property attaches one or more shadows around the frame of an element (can be inside). It's an option that gives you the power to easily design wonderful shadow effects. Box shadows are a great way to elevate the visuals of your web page.

A box shadow can be described with several properties including:
* X and Y offset from the element
* blur and spread radius
* color

### Syntax:

```css
  div {
    box-shadow: none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#
    }
  ```
* #### inset (default: none)
If not specified, the shadow is assumed to be a drop shadow (as if the box were raised above the content).
The presence of the `inset` keyword changes the shadow to one inside the frame

* #### offset-x offset-y
These are two `length` values to set the shadow offset. <offset-x> specifies the horizontal distance. Negative values place the shadow to the left of the element. `offset-y` specifies the vertical distance. Negative values place the shadow above the element. See `length` for possible units.

* #### blur-radius (default: 0)
This is a third `length` value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be 0 (the shadow's edge is sharp).
  
* #### spread-radius (default: 0)
This is a fourth <length> value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be 0 (the shadow will be the same size as the element).
 
* #### color
This value is used to set the color of the shadow, usually defined with hex `#000000`, rgba value `rgba(55,89,88,0.8)` or rgb value `rgb(55,89,88)`

#### Extended

To maximize compatibility, it is recommended that you declare box shadow properties for `moz-appearance` and `webkit`, this extends the normal syntax to:

```css
   div{
      box-shadow: none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#
      -moz-box-shadow: none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#
      -webkit-box-shadow: none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#
   }
```

However, this step can be ignored if it is creating confusion, as moz property and webkit property will only work in specific applications such as Firefox, and are not on a standards track.

### Examples

#### Basic use

```css
div {
  width: 200px;
  height: 50px;
  background-color: #333;
  box-shadow: 10px 10px 5px #ccc;
}
```

10px - offset-x
10px - offset-y
5px -  blur
#ccc - light gray color

It will display

![image](https://raw.githubusercontent.com/krzysiekh/images/master/box-shadow1.png)

#### Inside box shadow

```css
div {
  width: 200px;
  height: 50px;
  background-color: #333;
  box-shadow: inset 10px 10px 5px #ccc;
}
```
It uses very similar code, but with inset value, which displays shadow inside the div element

![image](https://raw.githubusercontent.com/krzysiekh/images/master/box-shadow2.png)


#### Multiple box shadows

```css
div {
    width: 200px;
    height: 50px;
    background-color: #333;
    box-shadow: inset 10px 10px 5px #ccc, 10px 10px 5px #ccc;
}
```

You can combine the previous two pieces of box-shadows using a comma to get multiple box shadows on the same div

#### More Information
* Docs: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
