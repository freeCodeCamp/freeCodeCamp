---
title: Background Opacity
localeTitle: Opacidad de fondo
---
## Opacidad de fondo

La propiedad de opacidad especifica la opacidad / transparencia de un elemento, es decir, el grado en que el contenido detrás del elemento es visible.

La propiedad de opacidad puede tomar un valor de 0.0 - 1.0. Cuanto menor sea el valor, más transparente será:

Encuentra más detalles [aquí](https://www.w3schools.com/css/css_image_transparency.asp)

Puede elegir hasta qué punto desea que el elemento sea transparente. Tienes que agregar la siguiente propiedad CSS para lograr los niveles de transparencia.

**Completamente opaco**

```css
.nombre-de-la-clase { 
  opacity:1; 
 } 
 
 Ó 
 
 .nombre-de-la-clase { 
  opacity:1.0; 
 } 
```

**Translúcido**

```css
.nombre-de-la-clase { 
  opacity:0.5; 
 } 
 /*El valor de opacidad puede ser cualquiera entre 0 y 1*/
```

**Transparente**

```css
.nombre-de-la-clase { 
  opacity:0; 
 } 
 
 Ó 
 
 .nombre-de-la-clase { 
  opacity:0.0; 
 } 
```

Alternativamente, puedes usar un valor rgba transparente como este: 

```css
.nombre-de-la-clase {
  background-color: rgba (0,0,0,.5);
  }
```

El ejemplo anterior establece que el fondo es negro con un 50% de opacidad. El último valor de un valor rgba es el valor alfa. Un valor alfa de 1 es igual a 100%, y 0.5 (.5 para corto) quals 50%. Usamos este método para agregar transparencia a un elemento sin afectar el contenido del interior.

[Un ejemplo de código para mostrar los rangos de opacidad de fondo.](https://codepen.io/lvcoulter/full/dVrwmK/)

#### Más información:

Para más información visite [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) [Propiedad CSS de opacidad en CSS-Tricks](https://css-tricks.com/almanac/properties/o/opacity/)

Soporte del navegador: [Caniuse](https://caniuse.com/#search=opacity)
