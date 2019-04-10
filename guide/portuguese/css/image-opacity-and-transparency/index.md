---
title: Image Opacity and Transparency
localeTitle: Opacidade e transparência da imagem
---
## Opacidade e transparência da imagem

A propriedade de `opacity` permite tornar uma imagem transparente, diminuindo o grau de opacidade.

`Opacity` leva um valor entre 0,0 e 1,0.

1.0 é o valor padrão para qualquer imagem. É totalmente opaco.

Exemplo

```css
img { 
    opacity: 0.3; 
 } 
 ``` 
 
 Include ```filter: alpha(opacity=x)``` for IE8 and earlier. The x takes a value from 0-100. 
```

css img { opacidade: 0,3; filtro: alfa (opacidade = 30); }
```
Here's an example of an image set to the parameters in the example above. 
 ![image at 30% opacity](https://github.com/lvcoulter/images/blob/master/Opacity30percent.jpg?raw=true) 
 
 
 You can pair ```opacity``` with ```:hover``` to create a dynamic mouse-over effect. 
 
 Example: 
```

css img { opacidade: 0,3; filtro: alfa (opacidade = 30); } img: hover { opacidade: 1,0; filtro: alfa (opacidade = 100); }
```
[A codepen example to show a transparent image turning opaque on hover](https://codepen.io/lvcoulter/full/JrzxXa/) 
 <!--I cannot figure out how to embed a Codepen. I would really like to know--> 
 
 You can create the opposite effect with less code since the image is 1.0 opacity by default 
 
 Example: 
```

css img: hover { opacidade: 0,3; filtro: alfa (opacidade = 30); } \`\` \` [Um exemplo codepen para mostrar transparência no mouse-over](https://codepen.io/lvcoulter/full/xXBQoR/)

#### Mais Informações:

\-w3schools.com [Opacity CSS / Transparência](https://www.w3schools.com/css/css_image_transparency.asp)

\-MDN web docs [Opacidade](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)