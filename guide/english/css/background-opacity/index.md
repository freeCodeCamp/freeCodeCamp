---
title: Background Opacity
---
## Background Opacity

The opacity property specifies the opacity/transparency of an element i.e. the degree to which the content behind the element is visible.

The opacity property can take a value from 0.0 - 1.0. The lower value, the more transparent:

Find more details <a href='https://www.w3schools.com/css/css_image_transparency.asp' target='_blank' rel='nofollow'>here</a>

You can choose the extent to which you'd like to make an element transparent by adding the following CSS property to achieve the desired transparency levels.

**Fully Opaque**
```css
.class-name {
  opacity:1;
}

OR

.class-name {
  opacity:1.0;
}
```
**Translucent**
```css
.class-name {
  opacity:0.5;
}
Opacity value can be anything between 0 and 1;
```
**Transparent**
```css
.class-name {
  opacity:0;
}

OR

.class-name {
  opacity:0.0;
}
```
Alternatively you can use a transparent rgba value like this:
```css

.class-name{
  background-color: rgba(0,0,0,.5);
  }
 ```
 The 4th value of an rgba value is the alpha channel value denoting the level of opacity for an element. An alpha value of 1 equals 100% and the example above sets the background color as black with 50% opacity. When the alpha value for an element is not specified, the default opacity is set to 100% i.e fully opaque. 

[A codepen example to show background opacity ranges](https://codepen.io/lvcoulter/full/dVrwmK/)


#### More Information:
For more information visit [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
[Opacity CSS property at CSS-Tricks](https://css-tricks.com/almanac/properties/o/opacity/)

Browser support: <a href= 'https://caniuse.com/#search=opacity' target= '_blank' rel= 'nofollow'>caniuse</a>
