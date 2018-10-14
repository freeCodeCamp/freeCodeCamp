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
 /* Percentage and pixel can also be used */
.pixel {background-size: 50px 50px;}
.percentage {background-size: 50% 50%;}
```

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
