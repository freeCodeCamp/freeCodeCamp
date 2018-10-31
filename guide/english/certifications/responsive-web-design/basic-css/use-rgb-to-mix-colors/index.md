---
title: Use RGB to Mix Colors
---
## Use RGB to Mix Colors
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
An RGB value is a combination of values for red, green, and blue (RGB).  Each perameter defines the intensity of the color as an integer between 0 (no color; black) and 255 (highest intensity) or a percentage from 0% to 100%. For example: 
```css
rgb(255, 0, 0)
```
This is rendered as red, because the red parameter is set to its highest value (255) and the others are set to 0. With RGB, you can mix colors by using combinations of different values.

### Examples:
```css
<style>
h2 {
  color: rgb(0, 0, 255);
}
</style>
```
Above is RGB is used to turn an h2 element blue.
```css
<style>
h2 {
    color: rgb(64, 224, 208);
}
</style>
```
In this example above, different values of RGB are combined, and 'color: rgb(64, 224, 208)' turns the h2 elements turquoise.


#### More Information:
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Applying_color" target="_blank">MDN web docs: Applying color to HTML elements using CSS</a><br>
<a href="https://www.w3schools.com/colors/colors_picker.asp" target="_blank">W3schools Color Picker</a><br>
