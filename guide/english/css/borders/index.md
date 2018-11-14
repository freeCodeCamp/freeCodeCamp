---
title: Border Property
---
## Border Property

CSS Border
----

The CSS property `border` allows complete customization of the borders that appear around HTML elements. With HTML, it used to be impossible to place a border around an element, with the exception of tables. CSS Borders let you create crisp, custom border styles with very little work compared to antiquated HTML methods.

The `border` shorthand property sets all border properties in one declaration. 
```css 
  border: 1px solid #000;
```

The properties that can be set are (in order): 
1. `border-style`
2. `border-width`
3. `border-color`
4. `border-radius`

It does not matter if one of the values above is missing. For example, the following is valid CSS:

```css 
  border: solid red;
```

### Border Styles

The `border-style` property can be set to a wide range of different border types:

- `dotted` - Sets a dotted border.
- `dashed` - Sets a dashed border.
- `solid` - Sets a solid border.
- `double` - Sets a double border.
- `groove` - Sets a 3D grooved border. 
- `ridge` - Sets a 3D ridged border. 
- `inset` - Sets a 3D inset border. 
- `outset` - Sets a 3D outset border.
- `none` - Sets no border.
- `hidden` - Sets a hidden border.

Each side of the border doesn't need to match.

Each side can be styled separately:
```css
  border-top-style: solid;
  border-left-style: dotted;
  border-right-style: dashed;
  border-bottom-style: double;
```

Or they can all be styled at once:
```css
  border-style: solid dashed double dotted;
```
The border property allows you to select each side of the element in one declaration in the following order: top, bottom, left, right.

### Border Width

To alter the thickness of a border, use the `border-width` attribute. You may use key terms or exact values to define the border width.  
Note: You must define a `border-style` for the border to appear. The `width` can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: `thin`, `medium`, or `thick`.

Example:
```css
<style type="text/css">
table {
	border-width: 7px;
	border-style: outset;
}
td {
	border-width: medium;
	border-style: outset;
}
p {
	border-width: thick;
	border-style: solid;
}
</style>
```

### Border Color

Now for the creative aspect of CSS Borders!  With the use of the `border-color` property, you will be able to create customized borders to fit the flow and layout
of your website. Border colors can be any color defined by RGB, HSL, hexadecimal, or key terms.

Example:
```css
<style type="text/css">
table {
	border-color: rgb( 100, 100, 255);
	border-style: dashed;
}

td {
	border-color: #FFBD32;
	border-style: ridge;
}

p {
	border-color: blue;
	border-style: solid;
}
</style>
```

### Border-Radius

The `border-radius` property allows the corners of a border to be rounded. `border-radius` takes a length as its value which determines the degree of curvature for each corner of the element. The length can be in px or %.
```css 
  border-radius: 25px;
```
Each corner of `border-radius` can be adjusted individually in the following order: top, bottom, left, right.
```css 
  border-radius: 15% 10px 30% 5px;
```

### Border-Image

The `border-image` property allows you to use an image as a custom border style. `border-image` is a shorthand for `border-image-source`, `border-image-width`, `border-image-outset`, and `border-image-repeat`.

`border-image-source` takes the url of the image you'd like to set as the border.

`border-image-width` sets the width of the image.

`border-image-outset`sets the distance between the element and the border image.

`border-image-repeat` adjusts the way border images adjust to the element's edges.

### Border: All in One

While it is nice that CSS allows a web developer to be very specific in creating a customized border, sometimes it's easier and less of a headache to create a uniform border in single line of CSS code. The `border` shorthand property allows us to declare a width, style, color, and radius.

Example:
```css
<style type="text/css">
p { border: 20px outset blue; } 
h4 { border: 5px solid; } 
h5 { border: dotted; }
</style>
```

### More Information:

- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
- [CSS3 Border Radius](https://guide.freecodecamp.org/css/css3-borders-rounded-corners)

Browser Support: IE6+
