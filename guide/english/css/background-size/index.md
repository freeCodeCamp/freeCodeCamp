---
title: Background Size
---
## Background Size

The background-size property specifies the size of the background images. You can set a length or a percentage, with the first value being the width and the second one being the height. You can also use one of the 5 keyword values:

```css
/* Background size property values that can be used */
.auto {background-size: auto;}
.cover {background-size: cover;}
.contain {background-size: contain;}
.initial {background-size: initial;}
.inherit {background-size: inherit;}
 /* Percentage, pixel, and viewport units can also be used */
.pixel {background-size: 50px 50px;}
.percentage {background-size: 50% 50%;}
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
