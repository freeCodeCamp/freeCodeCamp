---
title: Img Align Attribute
---
## Img Align Attribute

The align attribute of an image specifies where the image should be aligned according to the surrounding element.

Attribute Values:          
right - Align image to the right 
left - Align image to the left    
top  - Align image to the top    
bottom - Align image to the bottom  
middle - Align image to the middle

For example:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
   <title>Img Align Attribute</title>
 </head>
<body>
  <p>This is an example. <img src="image.png" alt="Image" align="middle"> More text right here
  <img src="image.png" alt="Image" width="100"/>
  </body>
</html>
```
We can also align in right if we want:
```html
<p>This is another example<img src="image.png" alt="Image" align="right"></p>
```
**Please note the align attribute is not supported in HTML5, and you should use CSS instead. However, it is still supported by all the major browsers.**


#### More Information:
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" target="_blank">MDN article on the img tag and its attributes<a>
