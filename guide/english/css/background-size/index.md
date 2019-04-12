---
title: Background Size
---
## Background Size

The `background-size` property specifies the size of the background images. You can set a length or a percentage, with the first value being the width and the second one being the height. You can also use one of the 5 keyword values:

```css
/* Background size property values that can be used: */

.auto {background-size: auto;}
/* auto uses the default size of the background image*/

.cover {background-size: cover;}
/* scales the image as much as possible without changing its aspect ratio it to cover the entire element, cropping when necessary to ensure no empty space remains.*/

.contain {background-size: contain;}
/* Scales the image to its largest size without changing its aspect ratio such that both its width and height can fit inside the element.*/

.initial {background-size: initial;}
/* uses the initially or default size of the background image*/

.inherit {background-size: inherit;}
/* inherits the properties of its parent element*/

.pixel {background-size: 50px 50px;}
/* specifies the exact height and width of the image*/

.percentage {background-size: 50% 50%;}
/* changes the width and height based on the percentage specified*/

.view {background-size: 50vw 50vh;}
```

Note: If using pixel or percentage for length and you only specify one value, 
the second one will be set to auto by default.

To set this property on multiple background images, separate the values by a comma:
```css
.multiple {
  background-image: url(1.png), url(2.png);
  background-size: 3px 3px, cover;
  /* first image is 3x3 px, second image covers the whole area */
}
```

#### More Information:

Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/background-size' target='_blank' rel='nofollow'>MDN</a>

CSS-Tricks: <a href='https://css-tricks.com/almanac/properties/b/background-size/' target='_blank' rel='nofollow'>background-size</a>

Browser Support: <a href='http://caniuse.com/#search=background-size' target='_blank' rel='nofollow'>caniuse</a>
