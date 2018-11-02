---
title: Iframe Tag
---
## Iframe Tag

Iframe tags are used to add an existing web page or app to your website within a set space.

When using the iframe tags the src attribute should be used to indicate the location of the web page or app to use within the frame.

```html
<iframe src="framesite/index.html"></iframe>

```
You can set the width and height attributes to limit the size of the frame.

```html
<iframe src="framesite/index.html" height="500" width="200"></iframe>

```
Iframes have a border by default, if you wish to remove this you can do so by using the style attribute and setting CSS border properties to none.

```html
<iframe src="framesite/index.html" height="500" width="200" style="border:none;"></iframe>

```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
* [MDN - HTML iframe tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
* [W3 - HTML 5.2 iframe specification](https://www.w3.org/TR/html5/semantics-embedded-content.html#the-iframe-element)
