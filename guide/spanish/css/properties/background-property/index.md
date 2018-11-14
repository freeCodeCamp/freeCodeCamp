---
title: Background Property
localeTitle: Propiedad de fondo
---
## Propiedad de fondo

La propiedad de fondo CSS le permite a uno declarar las ocho propiedades de fondo a la vez usando esta declaración de mano corta 1 .

La propiedad de fondo se especifica como una o más capas de fondo, separadas por comas para las siguientes propiedades 2 :

*   color de fondo
*   imagen de fondo
*   posición de fondo
*   tamaño de fondo
*   repetición de fondo
*   origen-fondo
*   clip de fondo
*   fondo adjunto

Sintaxis 1 :

```css
body { 
  /* Using a <background-color> */ 
  background: green; 
 } 
 
 .error { 
  /* Using a <bg-image> and <repeat-style> */ 
  background: url("test.jpg") repeat-y; 
 } 
 
 header { 
  /* Using a <box> and <background-color> */ 
  background: border-box red; 
 } 
 
 .topbanner { 
  /* A single image, centered and scaled */ 
  background: no-repeat center/80% url("../img/image.png"); 
 } 
```

### Fuentes

1.  [Visite la página de fondo de MDN para más información.](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
2.  [Visite la página de propiedades de fondo CSS de W3School para obtener más información.](https://www.w3schools.com/cssref/css3_pr_background.asp)