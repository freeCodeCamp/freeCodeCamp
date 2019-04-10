---
title: Canvas Dimensions
localeTitle: Dimensões da tela
---
## Dimensões da tela

Os atributos `width` e `height` controlam o tamanho da tela. Esses atributos controlam o tamanho da tela de desenho, não o tamanho renderizado real.

Veja a [demonstração das dimensões](https://codepen.io/alanluo/pen/jLWMmM/) da Pen [Canvas](https://codepen.io/alanluo/pen/jLWMmM/) por Alan Luo ( [@alanluo](https://codepen.io/alanluo) ) no [CodePen](https://codepen.io) .

Na caneta acima, os dois elementos da `canvas` têm as mesmas dimensões definidas por meio do CSS. No entanto, um tem o dobro da altura definida pelo atributo `height` , levando o mesmo retângulo a ser renderizado na metade da altura.

Isso pode causar problemas quando você deseja criar uma tela de tamanho dinâmico. Por exemplo, você pode querer fazer uma tela em tela cheia ou usar uma tela como miniatura.

Para fazer com que o tamanho do contexto de desenho corresponda ao tamanho renderizado do elemento `canvas` , temos que forçar isso em tempo real. Uma prática comum é colocar o seguinte manipulador no ouvinte `onResize` .

```js
// somewhere early in the script 
 var canvas = document.getElementById("canvas"); 
 ... 
 
 window.addEventListener("resize", function() { 
    canvas.setAttribute("width", canvas.scrollWidth); 
    canvas.setAttribute("height", canvas.scrollHeight); 
    console.log(canvas.offsetWidth); 
 }); 
```

#### Mais Informações:

*   [API de tela MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)