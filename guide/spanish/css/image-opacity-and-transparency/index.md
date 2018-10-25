---
title: Image Opacity and Transparency
localeTitle: Imagen de opacidad y transparencia
---
## Imagen de opacidad y transparencia

La propiedad de `opacity` permite hacer que una imagen sea transparente al reducir su `opacity` .

`Opacity` toma un valor entre 0.0 y 1.0.

1.0 es el valor predeterminado para cualquier imagen. Es totalmente opaco.

Ejemplo

```css
img { 
    opacity: 0.3; 
 } 
 ``` 
 
 Include ```filter: alpha(opacity=x)``` for IE8 and earlier. The x takes a value from 0-100. 
```

css img { opacidad: 0,3; filtro: alfa (opacidad = 30); }
```
Here's an example of an image set to the parameters in the example above. 
 ![image at 30% opacity](https://github.com/lvcoulter/images/blob/master/Opacity30percent.jpg?raw=true) 
 
 
 You can pair ```opacity``` with ```:hover``` to create a dynamic mouse-over effect. 
 
 Example: 
```

css img { opacidad: 0,3; filtro: alfa (opacidad = 30); } img: hover { opacidad: 1.0; filtro: alfa (opacidad = 100); }
```
[A codepen example to show a transparent image turning opaque on hover](https://codepen.io/lvcoulter/full/JrzxXa/) 
 <!--I cannot figure out how to embed a Codepen. I would really like to know--> 
 
 You can create the opposite effect with less code since the image is 1.0 opacity by default 
 
 Example: 
```

css img: hover { opacidad: 0,3; filtro: alfa (opacidad = 30); } \`\` \` [Un ejemplo de código para mostrar la transparencia en el mouse-over](https://codepen.io/lvcoulter/full/xXBQoR/)

#### Más información:

\-w3schools.com [CSS Opacidad / Transparencia](https://www.w3schools.com/css/css_image_transparency.asp)

\-MDN documentos web [opacidad](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)