---
title: Img Src Attribute
---
## Img Src Attribute
The `<img src>` attribute refers to the source of the image you want to display. The `img` tag will not display an image without the `src` attribute. However, if you set the source to the location of the image, you can display any image.

There is an image of the freeCodeCamp Logo located at `https://avatars0.githubusercontent.com/u/9892522?v=4&s=400`

You can set that as the image using the `src` attribute.

```html
<html>
  <head>
    <title>Img Src Attribute Example</title>
  </head>
  <body>
    <img src="https://avatars0.githubusercontent.com/u/9892522?v=4&s=400">
  </body>
</html>
```

The above code displays like this:

![The freeCodeCamp Avatar](https://avatars0.githubusercontent.com/u/9892522?v=4&s=400?raw=true)

The `src` attribute is supported by all browsers.

You can also have a locally hosted file as your image. 

For example, `<img src="images/freeCodeCamp.jpeg>` would work if you had a folder called `images` which had the `freeCodeCamp.jpeg` inside, as long as the 'images' folder was in the same location as the `index.html` file.

`../files/index.html`

`..files/images/freeCodeCamp.jpeg`


### More Information:

- [HTML.com](https://html.com/attributes/img-src/)
- [W3 Schools](https://www.w3schools.com/tags/att_img_src.asp)