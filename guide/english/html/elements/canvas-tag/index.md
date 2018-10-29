---
title: Canvas Tag
---
## Canvas Tag

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
You can use a canvas to draw and animate graphics. The drawings are done with JavaScript, so you will want to have an id in order to select the canvas. 
```html
<canvas id="canvas" width="200px" height="200px">
</canvas>
```
Once you've made your canvas, you need to find it and make a drawing object. 
```javascript
// Find canvas
var canvas = document.getElementById("canvas");
// Make drawing object
var drawOnCanvas = canvas.getContext("2d");
// Draw a rectangle on the canvas!
drawOnCanvas.fillRect(50, 50, 150, 100);
```
Now you can use this drawing object to draw on your canvas. There are several methods and attributes you can use for your drawing, including `rect()`, `fillStyle`, and many more. 



#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href="https://www.w3schools.com/graphics/canvas_reference.asp">Canvas Reference</a>

