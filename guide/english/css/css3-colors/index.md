---
title: CSS3 Colors
---
## CSS3 Colors

Colors in CSS are used to colorize elements in our webpages. There are many ways to assign colors to elements. You can use the actual names for the colors, their RGB values or the Hexadecimal values. In CSS3, the HSL (hue-saturation-lightness) method has been added to the specification.

### Color Names

Currently there are 140 color names supported in HTML, which can be assigned in CSS rules by just typing their name. For example:

#### Syntax
```
p {
  color: green;
}
```
This rule changes the text color for all \<p\> elements to green.<br>


For the full 140 color list, see [W3Schools Colors Names](https://www.w3schools.com/colors/colors_names.asp).

### RGB values

RGB stands for "Red", "Green" and "Blue," and we can also assign colors by typing their RGB values into our CSS rules. An RGB value would look like this `rgb(255, 0, 0)`, where each number defines how much of each color will be in the final mix.<br> 

The values range from 0 to 255, and in our example, we see that only the first value (red) is 255, while the other two values (green and blue) are set to 0. This means the respective element will be colored a full value of red. An RGB value of (0, 0, 0) would give black, which is the absence of color, and a value of (255, 255, 255) would give white, which results from the combination of the highest available levels of red, green, and blue mixed together. Of course there are many color combinations to be had by choosing different values for each of the colors. <br>

#### Syntax
```
p {
  color: rgb(0, 255, 0);
}
```
This rule changes the text color for all \<p\> elements to green using the RGB values.<br>

It is impossible to try to memorize each color code, and for that reason there are numerous websites that will help you pick colors for your projects. Two examples of such websites are: *[W3Schools Colors Picker](https://www.w3schools.com/colors/colors_picker.asp)* and *[HTML Color Codes](http://htmlcolorcodes.com/color-picker).*

In addition to the online tools, there are browser plug-ins/extensions available that make choosing colors easy. For Chrome and Firefox browsers, you can install the [ColorZilla](http://www.colorzilla.com/) extension. Many other color picking extensions are also available for your browser.

### Hexadecimal Values

Hexadecimal values are yet another way to define colors in CSS and they work quite similarly to RGB values.<br>

A random hex code would look like this: `#29432b`, where the first two characters after the hash stand for the amount of red in the mix, the next two characters represent the amount of green in the color, and the last two characters represent the amount of blue.<br> 

The values of `#000000` and `#ffffff` stand for black and white respectively.<br>

You can find the specific Hexadecimal colors you require by using the same tools mentioned for the RGB values.

#### Syntax
```
p {
  color: #00fe00;
}
```
This rule again changes the font color of all p elements to green using the Hexadecimal values.

### HSL

HSL has three values: hue, saturation, and lightness. <br>

**Hue** represents colors on a color wheel, and these colors are measured in degrees respective to their position on the color wheel. So 0 degrees (or 360 degrees) represents the color red, at 120 degrees the color will be green, and at 240 degrees the color will be blue. <br>

*For more information about the color wheel, visit [W3Schools Color Wheel](https://www.w3schools.com/colors/colors_wheels.asp).*

**Saturation** represents the shading of a color, with values from 0% to 100%. The shading will be gray at 0%, while the shading at 100% will represent the full color (or saturation). <br>

**Lightness** refers to the amount of "light" in a color based on a percentage. At 0%, the lightness of a color will be black (which is the absence of light), a 50% value would represent the normal color, and finally, at 100% the color lightness will be white (which is full of light).

#### Syntax
```
p {
  color: hsl(0, 100%, 50%);
}
```

### Output

[JSFiddle](https://jsfiddle.net/qcw2n145/)

### Why use RGB or HEX values?

Color names can only represent up to 140 colors, while RGB and Hexadecimal values have 16,777,216 possible color combinations. If you want your projects to include the exact colors you envision, you should use either the RGB or Hexadecimal values, and use color names for mock-ups and testing purposes.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

### More Information:

<!-- Please add any articles you think might be helpful to read before writing the article -->
[W3Schools | Colors](https://www.w3schools.com/colors/default.asp)

[W3 Draft Documentation](https://drafts.csswg.org/css-color-3/#color)

[MDN | CSS Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
