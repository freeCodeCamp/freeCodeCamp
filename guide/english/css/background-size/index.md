---
title: Background Size
---
## Background Size

The background-size property specifies the size of the background images. You can set a length or a percentage, with the first value being the width and the second one being the height. You can also use one of the 5 keyword values:

```css
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

To set this property on multiple background images separate values by comma:
```css
.multiple {
    background-image: url(1.png), url(2.png);
    background-size: 3px 3px, cover;
}
```

#### More Information:

Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/background-size' target='_blank' rel='nofollow'>MDN</a>

CSS-Tricks: <a href='https://css-tricks.com/almanac/properties/b/background-size/' target='_blank' rel='nofollow'>background-size</a>

Browser Support: <a href='http://caniuse.com/#search=background-size' target='_blank' rel='nofollow'>caniuse</a>



------
Tile:Background Size
--------

****The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

***CSS Demo:

background-size Reset
background-size: contain;
background-size: contain;
background-repeat: no-repeat;
Copy to Clipboard
background-size: cover;
background-size: 30%;
background-size: 200px 100px;

......Spaces not covered by a background image are filled with the background-color property, and the background color will be visible behind background images that have transparency/translucency.

****The background-size property is specified in one of the following ways:

Using the keyword values contain or cover.
Using a width value only, in which case the height defaults to auto.
Using both a width and a height value, in which case the first sets the width and the second sets the height. Each value can be a <length>, a <percentage>, or auto.
To specify the size of multiple background images, separate the value for each one with a comma.
 
********Based on the intrinsic dimensions and proportions, the rendered size of the background image is computed as follows:

*********If both components of background-size are specified and are not auto:

The background image is rendered at the specified size.
..........
If the background-size is contain or cover:
While preserving its intrinsic proportions, the image is rendered at the largest size contained within, or covering, the background positioning area. If the image has no intrinsic proportions, then it's rendered at the size of the background positioning area.
.............
If the background-size is auto or auto auto:
If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
If the image has no intrinsic dimensions and has no intrinsic proportions, it's rendered at the size of the background positioning area.
If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if contain had been specified instead.
If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension. The other dimension is computed using the specified dimension and the intrinsic proportions.
If the image has only one intrinsic dimension but has no intrinsic proportions, it's rendered using the specified dimension and the other dimension of the background positioning area.

!!!!!!!!!Happy learning!!!!!!!


