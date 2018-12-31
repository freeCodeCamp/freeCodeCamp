---
title: Basic Usage
localeTitle: Uso básico
---
## Uso básico de lona

Cuando use `canvas`, primero coloque un `canvas` en el documento como un elemento.

```html

<canvas width="400" height="400" id="canvas"></canvas> 
```

Los atributos de `width` y `height` controlarán el tamaño del `canvas`. Estos atributos controlan el tamaño del `canvas` de dibujo, no el tamaño real renderizado. Consulte la página "Dimensiones del Canvas" para obtener más información.

Para usar un `canvas` , primero debemos tomar el elemento de la página como un elemento DOM, y luego obtener un contexto de dibujo de él.

```js
var canvas = document.getElementById("canvas"); 
 var ctx = canvas.getContext('2d'); 
```

Todas las llamadas de dibujo después de esto se harán desde el objeto `ctx` . El `ctx` representa el contexto de dibujo del objeto y contiene información sobre el espacio de dibujo 2D. El objeto `canvas` es el elemento DOM real. Interactuar con él nos permite acceder a atributos como el `width` y el `height` .

Hay algunos contextos de dibujo disponibles, incluyendo `webgl` . WebGL es realmente una tecnología completamente diferente, por lo que solo nos centraremos en el dibujo 2D.

Los caminos son el bloque de construcción del dibujo en `canvas` . Vea la página de ' [Rutas](/articles/canvas/paths) ' para más.

#### Más información:

*   [API MDN Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
*   [HTMLCanvasElement.getContext () (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)
