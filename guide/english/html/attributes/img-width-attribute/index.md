---
title: Img Width Attribute
---
## Img Width Attribute

The HTML 'width' attribute refers to the width of an image. The value in the quotations is the amount of pixels. 
___
Downsizing a large image with the height and width attributes forces a user to download the large image (even if it looks small on the page). To avoid this, rescale the image with a program before using it on a page.
___
For example, if you already have a link to an image set up via the `src` attribute you can add the width attribute like so:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Img Width Attribute</title>
  </head>
  <body>
    <img src="image.png" alt="Image" width="100"/>
  </body>
</html>
```

In the code snippet above there is an image tag and the image is set to a width of 100 pixels. `width="100"`

#### More Information:
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" target="_blank">MDN article on the img tag<a>
