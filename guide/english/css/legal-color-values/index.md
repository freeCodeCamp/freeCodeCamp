---
title: Legal Color Values
---
## Legal Color Values

Colors in CSS can be specified in the following formats:

- [Hexadecimal](#hexadecimal-colors)
- [RGB](#rgb-colors)
- [RGBA](#rgba-colors)
- [HSL](#hsl-colors)
- [HSLA](#hsla-colors)
- [Predefined Color Names](#predefined-color-names)

### Hexadecimal Colors
#### Browser Support

All major browsers support hexadecimalcolor values.

#### Format

A hexadecimal value is specified as **#RRGGBB**, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color. All values must be between 00 and FF. As the name suggests, the encoding is in base 16.

#### Example
Here are different hex colors. Find the live example at https://jsfiddle.net/qg9revp4/2/.
```css
#divRed{
  color: #ff0000; /* red */
}

#divGreen{
  color: #00ff00; /* green */
}

#divBlue{
  color: #0000ff; /* blue */
}

#divWhite{
  color: #ffffff; /* white */
  background: #000000; /* black background, so that the text is visible */
}
```

### RGB Colors
#### Browser Support

All major browsers support RGB values.

#### Format

A RGB value is specified as **rgb(red, green, blue)**. Each parameter (red, green, and blue) defines the intensity of the color and can be an integer between 0 and 255.

#### Example
Here are different RGB colors. Find the live example at https://jsfiddle.net/vspepeth/1/.
```css
#divRed{
  color: rgb(255, 0, 0); /* red */
}

#divGreen{
  color: rgb(0, 255, 0); /* green */
}

#divBlue{
  color: rgb(0, 0, 255); /* blue */
}

#divWhite{
  color: rgb(255, 255, 255); /* white */
  background: rgb(0, 0, 0); /* black background, so that the text is visible */
}
```

### RGBA Colors
#### Browser Support

RGBA color values are supported in IE9+, Firefox 3+, Chrome, Safari, and in Opera 10+.

#### Format

A RGBA value is specified as **rgb(red, green, blue, alpha)**. Think of it as an extension to the RGB format, with an alpha channel. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque). The other parameters (red, green, and blue) define the intensity of the colors and can be an integer between 0 and 255.

#### Example
Here are different RGBA colors. Find the live example at https://jsfiddle.net/hq0ngwg2/1/.
```css
#divRed{
  color: rgba(255, 0, 0, 0.3); /* red with opacity */
}

#divGreen{
  color: rgba(0, 255, 0, 0.7); /* green with opacity */
}

#divBlue{
  color: rgba(0, 0, 255, 0.5); /* blue with opacity */
}

#divWhite{
  color: rgba(255, 255, 255, 0.6); /* white with opacity */
  background: rgba(0, 0, 0, 0.8); /* black background with opacity */
}
```

### HSL Colors
#### Browser Support

HSL color values are supported in IE9+, Firefox, Chrome, Safari, and in Opera 10+.

#### Format

HSL stands for hue, saturation and lightness. It is specified as **hsl(hue, saturation, lightness)**.

- **Hue**: It is a degree on the color wheel (from 0 to 360). _0_ (or _360_) is red, _120_ is green, and _240_ is blue.

- **Saturation**: It is a percentage value. _0%_ means a shade of grey and _100%_ is the full color.

- **Lightness**: It, too, is a percentage value. _0%_ is black and _100%_ is white.

#### Example
Below are tables from [W3.org](https://www.w3.org/TR/css3-color/#hsl-color). Each table represents one hue. Twelve equally spaced colors (i.e. at 30° intervals) have been chosen from the color circle. The X axis of each table represents the saturation (100%, 75%, 50%, 25%, 0%).
The Y axis represents the lightness. 50% is “normal”.

![HSL Table](https://image.ibb.co/ngq686/hsl.png)

Find the live example at https://jsfiddle.net/g10zpL28/1/.

```css
#div1 {
  background-color: hsl(240, 100%, 50%); /* blue */
}
#div2 {
  background-color: hsl(195, 53%, 79%); /* light blue */
}
#div3 {
  background-color: hsl(240, 100%, 25%); /* dark blue */
}
#div4 {
  background-color: hsl(187, 75%, 86%); /* pastel blue */
}
```

### HSLA Colors
#### Browser Support

HSLA color values are supported in IE9+, Firefox 3+, Chrome, Safari, and in Opera 10+.

#### Format

HSLA stands for hue, saturation, lightness and alpha channel. It is specified as **hsla(hue, saturation, lightness, alpha)**. The alpha channel specifies the opacity of the color.

- **Hue**: It is a degree on the color wheel (from 0 to 360). _0_ (or _360_) is red, _120_ is green, and _240_ is blue.

- **Saturation**: It is a percentage value. _0%_ means a shade of grey and _100%_ is the full color.

- **Lightness**: It, too, is a percentage value. _0%_ is black and _100%_ is white.

- **Alpha Channel**: It is a number betwenn 0.0 (fully transparent) and 1.0 (fully opaque).

#### Example
Below are examples of HSLA colors. See them live at https://jsfiddle.net/2Lxscgfy/1/.

```css
#div1 {
  background-color: hsla(240, 100%, 50%, 0.5); /* blue with transparency */
}
#div2 {
  background-color: hsla(195, 53%, 79%, 0.8); /* light blue with transparency */
}
#div3 {
  background-color: hsla(240, 100%, 25%, 0.3); /* dark blue with transparency */
}
#div4 {
  background-color: hsla(187, 75%, 86%, 1.0); /* pastel blue with transparency */
}
```

### Predefined Color Names
#### Browser Support

147 color names are predefined in the CSS color specification. All modern browsers support them.

#### Example

Below are a few color names in use. Check out the live example at https://jsfiddle.net/rqygumpy/. Find the whole list in the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords).

```css
#div1{
  color: BlueViolet;
}

#div2{
  color: RebeccaPurple;
}

#div3{
  color: RoyalBlue;
}

#div4{
  color: Salmon;
}
```


#### More Information:
[MDN Web Docs on CSS Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

