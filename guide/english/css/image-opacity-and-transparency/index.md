---
title: Image Opacity and Transparency
---
## Image Opacity and Transparency

The ```opacity``` property allows you to make an image transparent by lowering how opaque it is. 

```Opacity``` takes a value between 0.0 and 1.0.

1.0 is the default value for any image. It is fully opaque.

Example:
```css
img {
    opacity: 0.3;
 }
 ```
 
Include ```filter: alpha(opacity=x)``` for IE8 and earlier. `x` takes a value from 0-100.
```css
img {
   opacity: 0.3;
   filter: alpha(opacity=30);
}
```

Here's an example of an image set to the parameters in the example above:

![image at 30% opacity](https://github.com/lvcoulter/images/blob/master/Opacity30percent.jpg?raw=true)


You can pair ```opacity``` with ```:hover``` to create a dynamic mouse-over effect.

Example:
```css
img {
    opacity: 0.3;
    filter: alpha(opacity=30);
}
img:hover {
   opacity: 1.0;
   filter: alpha(opacity=100);
}
```
[Here's a codepen example to show a transparent image turning opaque on hover](https://codepen.io/lvcoulter/full/JrzxXa/)
<!--I cannot figure out how to embed a Codepen. I would really like to know-->

You can create the opposite effect with less code since the image is 1.0 opacity by default.

Example:
```css
img:hover {
   opacity: 0.3;
   filter: alpha(opacity=30);
}
```
[Here's a codepen example to show transparency on mouse-over](https://codepen.io/lvcoulter/full/xXBQoR/)


#### More Information:
- w3schools.com: [CSS Opacity/Transparency](https://www.w3schools.com/css/css_image_transparency.asp)

- MDN Web Docs: [Opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)



