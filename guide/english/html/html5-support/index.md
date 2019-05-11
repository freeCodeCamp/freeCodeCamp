---
title: HTML5 Browser Support
---

# HTML5 Browser Support

## Overview

###	You can teach older browsers to handle HTML5 correctly.

## HTML5 Browser Support

HTML5 is supported in all modern browsers.

In addition, all browsers, old and new, automatically handle unrecognized elements as inline elements.

Because of this, you can "teach" older browsers to handle "unknown" HTML elements.

## Define Semantic Elements as Block Elements
HTML5 defines eight new semantic elements. All these are block-level elements.

To secure correct behavior in older browsers, you can set the CSS display property for these HTML elements to block:

```html
header, section, footer, aside, nav, main, article, figure {
    display: block;
}
```
#Add New Elements to HTML
You can also add new elements to an HTML page with a browser trick.

This example adds a new element called <myHero> to an HTML page, and defines a style for it:
```html
 <!DOCTYPE html>
<html>
<head>
<script>document.createElement("myHero")</script>
<style>
myHero {
    display: block;
    background-color: #dddddd;
    padding: 50px;
    font-size: 30px;
}
</style>
</head>
<body>

<h1>A Heading</h1>
<myHero>My Hero Element</myHero>

</body>
</html> 
```
#### More Information:
* [W3 Schools](https://www.w3schools.com/html/html5_intro.asp)
