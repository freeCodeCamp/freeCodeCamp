---
title: Font Tag
---
## Font Tag

*This feature was deprecated in HTML 4.01 and removed in HTML 5.*

The HTML Font Element `<font>` defines the font size, color and face for its content. It was normalized in HTML 3.2 but was then deprecated in HTML 4.01 and is now obsolete in HTML5. Although it still may work in some browsers, it is advised to stop using it as it could be removed at anytime. Styling fonts can be achieved and far better controlled through CSS, in fact all styling should be written using CSS only. 

The **former** behavior of the `<font>` element:

* **Color:** This attribute lets you set the textcolor to either a named color like ‘blue’, or a hexadecimal color in the format of #RRGGBB.
* **Face:** This attribute lets you set the font family and will contain a comma-separated list of one or more font names. If the first font in the list is not supported by the browser, then it will move onto the second font. If no font is supported or listed then the browser typically defaults a font for that system.
* **Size:** This attribute lets you specify the size of the font. There are two ways to do this, either setting a numeric value or a relative value. Numeric values range from 1 to 7, 1 being the smallest and 3 being the default. Relative values, like -2 or +2, set the value relative to the size of the `<basefont>` element or ‘3’ the default value.

An example:
```html
<font face="fontNameHere" size="7" color="blue">My Text Here</font>
```

#### More Information:
* [MDN - HTML font tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font)
* [MDN - CSS Font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
