---
title: Use RGB values to Color Elements
---
## Use RGB values to Color Elements

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### RGB
An RGB value is a combination of values for red, green, and blue (RGB). 

An RGB color value is specified with: rgb(red, green, blue)

Each perameter defines the intensity of the color as an integer between 0 (no color; black) and 255 (highest intensity) or a percentage from 0% to 100%.
For example, rgb(255, 0, 0) is rendered as red, because the red parameter is set to its highest value (255) and the others are set to 0.

### RGBA
RGBA color values are an extension of RGB color values with an additional alpha channel perameter. This specifies the opacity for a color. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque). Alpha value can also be represented as a percentage where 0% is the same as 0.0 and 100% is the same as 1.0. 

This allows more manipulation of colors by for example overlaying text on top of an image, and still have the image viewable through the text, or to change the tint and shade of a color.

An RGBA color value is similar to RGB, with the alpha value in last position: rgba(red, green, blue, alpha)

### Examples
```css
<style>
h2 {
    color: rgb(64, 224, 208);
}
</style>
```
In the above example, the 'color: rgb(64, 224, 208)' turns the h2 elements turquoise.

```css
<style>
h2 {
    color: rgb(64, 224, 208, 0.80);
}
</style>
```
Here, the addition of the last perameter specifies the alpha value, or transparency of the color.  In the above example 'color: rgb(64, 224, 208, 0.80)' changes the color of the h2 element to turquoise with an opacity of 80%.

#### More Information:
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Applying_color" target="_blank">MDN web docs: Applying color to HTML elements using CSS</a><br>
<a href="https://www.w3schools.com/colors/colors_picker.asp" target="_blank">W3schools Color Picker</a><br>
