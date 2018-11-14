---
title: Fonts
---
## Fonts
The CSS font properties define the font family, weight, size, variant, line height and style of a text.

### Font family
The font family of a text is set by using the `font-family` property.

It works with a *fallback* system, meaning if your browser does not support the first font, it tries with the next one and so on. If the name of the font is more than one word it must be surrounded by quotes. 

```css
p {
    font-family: "Times New Roman", Times, serif;   
}
```
In the above example, "Times New Roman" is the <family-name> of the font, while "serif" is the <generic-name>. Generic names are used as a fallback
mechanism for preserving style if the family-name is unavailable. A generic name should always be the last item in the list of font family names. Generic
family names are serif, sans-serif, monospace, cursive, fantasy, system-ui. 
In addition to specifying common fonts that are found on most operating systems, custom web fonts can be used as well. To import such a font, copy the font URL from the library and reference it in the HTML.

### Font style
The `font-style` property can be used to specify italic text.

This property has 3 values:

* normal - Text shown normally
* italic - Text shown in *italic*
* oblique - Text shown leaning

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
The `font-size` property sets the size of the text.

There are different types of font size values:

* `px` (pixels) - The default size of text being `16px`
* `em` - `1em` = the current font size, so `1em` = `16px` (recommended by the W3C)
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

### Font weight
The `font-weight`property specifies the weight (or boldness) of the font. Accepts keywords (`bold`, `normal`, `bolder`, `lighter`) or numeric keywords (`100`, `200`, `300`, `400` etc.) `400` is the same as `normal`.

```css
p {
   font-weight: bold
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
The `font-variant` property specifies if a text should be displayed in a small-caps font (where all lowercase letters are converted to uppercase letters while appearing in a smaller font-size than the original uppercase letters in the text).

```css
p.small {
  font-variant: small-caps;
}
```

### Font shorthand property
Font properties can be specified with the shorthand font. 
It takes as value (in this order):
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
