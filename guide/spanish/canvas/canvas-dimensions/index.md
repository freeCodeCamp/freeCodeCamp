---
title: Canvas Dimensions
localeTitle: Dimensiones de la lona
---
## Dimensiones de la lona

Los atributos de `width` y `height` controlarán el tamaño del lienzo. Estos atributos controlan el tamaño del lienzo de dibujo, no el tamaño real renderizado.

Vea la [demostración de dimensiones de](https://codepen.io/alanluo/pen/jLWMmM/) Pen [Canvas](https://codepen.io/alanluo/pen/jLWMmM/) de Alan Luo ( [@alanluo](https://codepen.io/alanluo) ) en [CodePen](https://codepen.io) .

En el lápiz anterior, ambos elementos del `canvas` tienen las mismas dimensiones establecidas a través de CSS. Sin embargo, uno tiene el doble de la altura establecida a través del atributo de `height` , lo que hace que el mismo rectángulo exacto se convierta en la mitad de la altura.

Esto puede causar problemas cuando se desea hacer un lienzo de tamaño dinámico. Por ejemplo, puede querer hacer un lienzo de pantalla completa o usar un lienzo como miniatura.

Para que el tamaño del contexto de dibujo coincida con el tamaño representado del elemento de `canvas` , tenemos que forzar esto en tiempo real. Una práctica común es colocar el siguiente controlador en el oyente `onResize` .

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

#### Más información:

*   [API MDN Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)