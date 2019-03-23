---
title: Background Opacity
---
## Background Opacity

The opacity CSS property specifies the level of transparency of an element, that is, the degree to which the content behind the element is visible.

Opacity applies to the element as a whole, including its contents, even though the value is not inherited by child elements. Thus, the element and its children all have the same opacity relative to the element's background, even if they have different opacities relative to one another.

The opacity property can take a value from 0.0 - 1.0. The lower the value, the more the transparency:

Find more details <a href='https://www.w3schools.com/css/css_image_transparency.asp' target='_blank' rel='nofollow'>here</a>

You can choose up to what extent you want to make the element transparent.
You have to add the following CSS property to achieve the transparency levels.

#### Fully Opaque
```css
.class-name {
  opacity:1;
}

/* OR */

.class-name {
  opacity:1.0;
}
```

#### Translucent
```css
.class-name {
  opacity:0.5;
}

/* Opacity value can be anything between 0 and 1; */
```

#### Transparent
```css
.class-name {
  opacity:0;
}

/* OR */

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
The example above sets the background to be black with 50% opacity. The last value of an rgba value is the alpha value. An alpha value of 1 equals 100%, and 0.5 (.5 for short) equals 50%. We use this method to add transparency to an element without affecting the content inside.

#### Transparent Hover Effect
The opacity property is often used together with the **:hover** selector to change the opacity on mouse-over:

```
img {
    opacity: 0.5;
    filter: alpha(opacity=50);
}

img:hover {
    opacity: 1.0;
    filter: alpha(opacity=100);
}
```

#### Some Info
Using the rgba value is most preferable when the background has content like text compared to using the background-color property then going on to use the opacity property. First, it's shorter and second, it eliminates the problem of having the content's transparency change with that of its background, if it's something you do not want.


**Hex Alpha**

```css

.class-name {
  background: #00ff0080;
 }
 ```

The example above sets the background with a 50% opacity using hex alpha code. The alpha digit is the last two numbers `80`. The formats are sometimes referred to as #RRGGBBAA and #RGBA and the the AA part is a hex representation of 0-100. For example the hex alpha code of 0% is `00` and the hex alpha code of 100% is `FF`.
[A codepen example to show hex alpha values](https://codepen.io/chriscoyier/pen/XjbzAW)
[A codepen example to show background opacity ranges](https://codepen.io/lvcoulter/full/dVrwmK/)

#### More Information:

+ [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)  
+ [CSS Opacity / Transparency Property at W3Schools](https://www.w3schools.com/css/css_image_transparency.asp)  
+ [Opacity CSS property at CSS-Tricks](https://css-tricks.com/almanac/properties/o/opacity/)  

Browser support: <a href= 'https://caniuse.com/#search=opacity' target= '_blank' rel= 'nofollow'>caniuse</a>
