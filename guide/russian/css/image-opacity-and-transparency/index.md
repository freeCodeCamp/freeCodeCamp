---
title: Image Opacity and Transparency
localeTitle: Непрозрачность изображения и прозрачность
---
## Непрозрачность изображения и прозрачность

Свойство `opacity` позволяет вам сделать изображение прозрачным, понизив его непрозрачность.

`Opacity` принимает значение от 0.0 до 1.0.

1.0 - значение по умолчанию для любого изображения. Он полностью непрозрачен.

пример

```css
img { 
    opacity: 0.3; 
 } 
 ``` 
 
 Include ```filter: alpha(opacity=x)``` for IE8 and earlier. The x takes a value from 0-100. 
```

CSS img { непрозрачность: 0,3; filter: alpha (opacity = 30); }
```
Here's an example of an image set to the parameters in the example above. 
 ![image at 30% opacity](https://github.com/lvcoulter/images/blob/master/Opacity30percent.jpg?raw=true) 
 
 
 You can pair ```opacity``` with ```:hover``` to create a dynamic mouse-over effect. 
 
 Example: 
```

CSS img { непрозрачность: 0,3; filter: alpha (opacity = 30); } img: hover { opacity: 1.0; filter: alpha (opacity = 100); }
```
[A codepen example to show a transparent image turning opaque on hover](https://codepen.io/lvcoulter/full/JrzxXa/) 
 <!--I cannot figure out how to embed a Codepen. I would really like to know--> 
 
 You can create the opposite effect with less code since the image is 1.0 opacity by default 
 
 Example: 
```

CSS img: hover { непрозрачность: 0,3; filter: alpha (opacity = 30); } \`\` \` [Пример кода, показывающий прозрачность при наведении мыши](https://codepen.io/lvcoulter/full/xXBQoR/)

#### Дополнительная информация:

\-w3schools.com [Непрозрачность / прозрачность CSS](https://www.w3schools.com/css/css_image_transparency.asp)

[Непрозрачность](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)