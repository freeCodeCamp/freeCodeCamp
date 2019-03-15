---
title: Fonts
---
## Fonts
The CSS font properties define the font family, weight, size, variant, line height, and style of an element's text content.

### Font family
The font family is set by using the `font-family` property.

It works with a *fallback* system i.e. if your browser does not support the first font specified, it tries with the next one, and so on. If the name of the font is longer than one word, it must be in quotes.

```css
p {
  font-family: "Times New Roman", Times, serif;   
}
```
In the above example, "Times New Roman" and "Times" are <family-name>s and "serif" is a <generic-name>. Generic names are used as a fallback mechanism for preserving style if the <family-name> is unavailable. A generic name should always be the last item in the list of font family names. The generic family name options are: 
  
* serif
* sans-serif
* monospace
* cursive
* fantasy
* system-ui

### Importing a font
In addition to specifying common fonts that are found on most operating systems, custom web fonts can be used as well. To import such a font, copy the font URL from the library and reference it in the HTML. [fonts.google.com](https://fonts.google.com/) is a popular place to find fonts to import, but there are many other resources.
```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```
Then you can use the font that you have imported (in this example, `Lobster`) in your code as normal.

### Font style
The `font-style` property can be used to specify the text's style.

This property has 3 values:

* normal - Text shown normally
* italic - Text shown in *italic*
* oblique - Text shown slanted

`italic` and `oblique` both look like the normal font but slanted. The main difference is that `italic` is a whole other version of the font, slanted at a particular angle and sometimes styled slightly differently. `oblique` is the original font but with the ability to be slanted at and angle to different degrees.

If a font does not have an italic version, the oblique version may be substituted, and vice versa. If a font has neither version, the letters will be artificially slanted.

```css
.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}
```

### Font size
The `font-size` property sets the size of the text. The default size is usually `16px`.

There are several different values that may be used to determine size:

* `px` (pixels) - The default size of text being `16px`
* `em` - `1em` = the current font size, so `1em` = `16px` (recommended by the W3C)
* `rem` (root em) - The value of the font size of the root element `html`. Whereas `em` units are relative to the font size of their parent element, `rem` units are always relative to the document's root element.
* `small`, `medium`, `large` - known as absolute size values
* `%` - percentages

```css
.with-pixels {
  font-size: 14px;
}

.with-ems {
  font-size: 0.875em;
}

.with-absolute {
  font-size: large;
}

.with-percentage {
  font-size: 80%;
}
```

For more on these units, visit the MDN reference on [CSS Values and Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)

### Font weight
The `font-weight`property specifies the weight (or boldness) of the font. Accepts keywords (`bold`, `normal`, `bolder`, `lighter`) or numeric keywords (`100`, `200`, `300`, `400` etc.) `400` is the same as `normal`.

```css
p {
  font-weight: bold;
}
```

### Font responsiveness
The text size can be set with a `vw` (viewport width) unit.
This will allow the text to adjust to the size of the browser window.

```html
<h1 style="font-size: 10vw">Hello World</h1>
```

Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.

### Font variant
The `font-variant` property specifies if text should be displayed using small capitals. When the value `small-caps` is used, all lowercase letters in the text are converted to uppercase letters while appearing in a smaller font-size than the original uppercase letters.

```css
p.small {
  font-variant: small-caps;
}
```

### Font shorthand property
Font properties can be specified with the shorthand `font`. 

It takes as values (in this order):
- font-style (optional)
- font-variant (optional)
- font-weight (optional)
- font-size (mandatory)
- line-height (optional)
- font-family (mandatory)

```css
p {
  font: italic small-caps 800 20px/1.5 Arial;
}
```

#### More Information:
- [MND - CSS Font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
- [W3 Schools - CSS Font](https://www.w3schools.com/css/css_font.asp)
- [CSSFontStack](https://www.cssfontstack.com/)
- [Google Fonts](https://fonts.google.com/)
- [Google Docs: How to get started](https://developers.google.com/fonts/docs/getting_started)
- [W3 Schools - Examples of websafe fonts](https://www.w3schools.com/cssref/css_websafe_fonts.asp)