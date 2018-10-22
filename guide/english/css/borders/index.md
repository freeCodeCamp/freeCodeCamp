---
title: Border Property
---
## Border Property

CSS Border
----

CSS allows you to completely customize the borders that appear around HTML elements. With HTML alone, borders can only be used with tables. Using CSS you can create a border around any HTML element with customized style, width, and color. 

The `border` shorthand property sets all the border properties in one declaration. 
```css 
  border: 1px solid #000;
```

The properties that can be set, are (in order): 
1. `border-style`
2. `border-width`
3. `border-color`
4. `border-radius`

It does not matter if one of the values above are missing, for example:

```css 
  border: solid red;
```
The above code is also valid CSS.

### Border Styles

The `border-style` property sets a wide range of different types of borders.

The various values are:
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

Based on the property you choose, these styles can be mismatched. 
You can style each side seperately:
```css
  border-top-style: solid;
  border-left-style: dotted;
  border-right-style: dashed;
  border-bottom-style: double;
```

Or you can style them all at once:
```css
  border-style: solid dashed double dotted;
```
As shown, the border property allows you to select different sections of it. [top, bottom, left, right]

### Border Width

To alter the thickness of your border use the border-width attribute. You may use key terms or exact values to define the border width. Note: You must
define a border-style for the border to show up. The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined
values: thin, medium, or thick.

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

Now for the creative aspect of CSS Borders! With the use of the border-color attribute, you can create customized borders to fit the flow and layout
of your website. Border colors can be any color defined by RGB, hexadecimal, or key terms. Below is an example of each of these types.

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
The `border-radius` property allows the corners of a border to be rounded. Specifying one value will create the same border radius on each corner. Size can be in px or %.
```css 
  border-radius: 25px;
```
Each corner of `border-radius` can be adjusted separately by specifying two, three, or four values. If two values are set, the first value applies to the top-left and bottom-right corners, while the second value applies to the top-right and bottom-left corners. If four values are set, the top-left, rop-right, bottom-right, and bottom-left corners will be specified in that order. If three values are set, the second value applies to the top-right and bottom-left corner. 
```css 
  border-radius: 15% 10px 30% 5px;
```

### Border: All in One

You can also create a uniform border using CSS border shorthand to specify all border properties in a single line of CSS code.

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

### Other Border Attributes
- 'border-spacing' - This can set spacing between the text and border. 
- 'border-image' - This sets an image as border. 

Browser Support: IE6+
