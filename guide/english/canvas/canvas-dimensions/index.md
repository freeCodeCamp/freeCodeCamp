---
title: Canvas Dimensions
---
## Canvas Dimensions

The `width` and `height` attributes will control the size of the canvas. These attributes control the size of the drawing canvas, not the actual rendered size.

<p data-height="265" data-theme-id="0" data-slug-hash="jLWMmM" data-default-tab="js,result" data-user="alanluo" data-embed-version="2" data-pen-title="Canvas dimensions demo" class="codepen">See the Pen <a href="https://codepen.io/alanluo/pen/jLWMmM/">Canvas dimensions demo</a> by Alan Luo (<a href="https://codepen.io/alanluo">@alanluo</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

In the above pen, both `canvas` elements have the same dimensions set through CSS. However, one has twice the height set through the `height` attribute, thus leading the exact same rectangle to become rendered at half the height.

This can cause problems when you want to make a dynamically sized canvas. For instance, you may want to make a full-screen canvas, or use a canvas as a thumbnail.

In order to make the size of the drawing context match the rendered size of the `canvas` element, we have to force this in realtime. One common practice is to put the following handler in the `onResize` listener.

```js
// somewhere early in the script
var canvas = document.getElementById("canvas");
...

window.addEventListener("resize", function() {
    canvas.setAttribute("width", canvas.scrollWidth);
    canvas.setAttribute("height", canvas.scrollHeight);
    console.log(canvas.offsetWidth);
});

```



#### More Information:

- [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)


