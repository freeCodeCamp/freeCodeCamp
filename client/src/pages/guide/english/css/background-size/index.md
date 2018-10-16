---
title: Background Size
---
## Background Size

The background-size property specifies the size of the background images. You can set a length or a percentage, with the first value being the width and the second one being the height. You can also use one of the 5 keyword values:

```css
.auto {background-size: auto;} <!-- The background image is displayed in its original size -->
.cover {background-size: cover;} <!-- Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges-->
.contain {background-size: contain;}<!-- Resize the image so that it is fully visible-->
.initial {background-size: initial;}<!-- It is used to set a css property to its default value -->
<!--example-->
<html>
<head>
<style>
div {
    color: blue; 
}

h1  {
    color: initial; 
}
</style>
</head>
<body>
<div>
<h1> Hey! </h1>
<p> User </p>
</div>
</body>
</html>
<!-- "Hey!" will be displayed in black color(original) and "User" will be displayed in blue.-->

.inherit {background-size: inherit;}<!-- A property will inherit its value from its parent element.

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

## References
1.W3school.com
