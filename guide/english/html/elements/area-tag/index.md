---
title: Area Tag
---
## Area Tag

`<area>` tag is used to define an area inside an image with clickable areas (also known as image-map). `<area>` tag always sits inside a `<map>` tag.

Example usage:
```html
<map name="shapemap">
  <area shape="rect" coords="5,5,15,20" href="rectangle.html" alt="Rectangle">
  <area shape="circle" coords="90,58,3" href="circle.html" alt="Circle">
</map>
<img src="shapes.png" alt="Sample shapes" usemap="#shapemap">
```

#### More Information:

- <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area' target='_blank' rel='nofollow'>The HTML &lt;area&gt; element: MDN</a>
