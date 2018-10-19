---
title: CSS3 Colors
---
## CSS3 Colors

Colors in CSS are used to colorize elements in our web-pages. There are many ways to assign colors to elements. You can use the actual names for the colors, their RGB values or the Hexadecimal values. In CSS3 the hsl (hue-saturation-lightness) has been added to the specification.

### Color Names

Currently there are 140 color names supported in HTML, which can be assigned in CSS rules by just typing their name. For example:

### Syntax

```
p {
  color: green;
}
```
This rule changes all the font color for all \<p\> elements to green.<br>
For the full 140 color list see here: https://www.w3schools.com/colors/colors_names.asp

### RGB values
RGB stands for "Red", "Green" and "Blue" and we can also assign colors by typing their RGB values in our rules. An RGB value would look like this: rgb(255,0,0), where each number defines how much of each color will be in the final mix.<br> 

The values range from 0 to 255 and in our example we see that only the first value is 255 while the other two are set to 0. That means that there is only red in our value and the respective element will be colored red. An RGB value of (0, 0, 0) would give black and a value of (255, 255, 255) would give white.<br>

It is impossible to try to memorize each color code and for that reason there numerous tools online for picking the colors you want for your projects. For example: https://www.w3schools.com/colors/colors_picker.asp or http://htmlcolorcodes.com/color-picker/.

```css
p {
  color: rgb(0, 255, 0);
}
```
This rule changes the font color of all p elements to green, just like above.

### Hexadecimal Values

Hexadecimal values are yet another way to define colors in CSS and they work quite similarly to RGB values.<br>

A random hex code would like this: `#29432b`, where the first two characters after the hash stand for the amount of RED in the mix, the second two stand for the amount of Green and the last two stand for the amount of Blue.<br> 

The values of `#000000` and `#ffffff` stand for black and white respectively.<br>
You can find the specific Hexadecimal colors you require by using the same tools mentioned for the RGB values.

### Syntax

```
p {
  color: #00fe00;
}
```
This rule again changes the font color of all p elements to green.

### HSL

HSL has three values. <br>
First one is **Hue** which is measure in degrees. So 0 (or 360) represents color red, at 120 it is green and 240 is blue. <br>
Second one is **Saturation** which has a percentage value with range from 0 to 100%. <br>
Third one is **Lightness** which also has a percentage value with range from 0 to 100%. 0% is dark black, 50% average, 100% is white.

### Syntax

```
p {
  color: hsl(0, 100%, 50%);
}
```

### Output

[JSfiddle](https://jsfiddle.net/qcw2n145/)

### Why use RGB or HEX values?

Color names take only 140 values, while RGB and HEX values have 16,777,216 possible combinations. So if you want your projects to look exactly how you have envisioned them, you should use the two latter options and keep the color names values for mock-ups and testing purposes.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[w3schools](https://www.w3schools.com/colors/default.asp)

[W3 Draft Documentation](https://drafts.csswg.org/css-color-3/#color)

[MDN | CSS colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

[Color Picker](https://www.w3schools.com/colors/colors_picker.asp) - A very useful tool helpful in picking colors.
