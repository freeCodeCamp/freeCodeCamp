---
title: Images in HTML
---


## Introduction

You can define images by using the `<img>` tag. It does not have a closing tag since it can contain only attributes.
To insert an image you define the source and an alternative text wich is displayed when the image can not be rendered.

`src` - This attribute provides the url to image present either on your desktop/laptop or to be included from some other website. Remember the link provided should not be broken otherwise the image will not be produced on your webpage.

`alt` - This attribute is used to overcome the problem of broken image or incapability of your browser to not being able to produce image on webpage. This attribute as name suggests provide "alternative" to image which is some text describing the image.

### Example

```html
<img src="URL of the Image" alt="Descriptive Title" />
```

### To define height and width of an image you can use the height and width attribute:
```html
<img src="URL of the Image" alt="Descriptive Title" height="100" width="150"/>
```

### Define border thickness (0 means no border):
```html
<img src="URL of the Image" alt="Descriptive Title" border="2"/>
```

### Align an image:
```html
<img src="URL of the Image" alt="Descriptive Title" align="left"/>
```

### Use styles within a style attribute:
```html
<img src="URL of the Image" alt="Descriptive Title" style="width: 100px; height: 150px;"/>
```

### Make a rounded image:
```html
<img src="URL of the Image" alt="Descriptive Title" style="border-radius: 50%;"/>
```
### Use image as link:
```html
<a href="#"><img src="URL of the Image" alt="Descriptive Title"."></a>
```

### More Information

- See the freeCodeCamp page on the `<img>` tag [here](https://guide.freecodecamp.org/html/elements/img-tag)
- To get more details on images in HTML, check out the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img)
