---
title: Make an Image Responsive
localeTitle: Hacer una imagen receptiva
---
## Hacer una imagen receptiva

Siguiendo las instrucciones:

Agregue reglas de estilo para la etiqueta img para que responda al tamaño de su contenedor. Debe mostrarse como un elemento de nivel de bloque, debe ajustarse a todo el ancho de su contenedor sin estirarlo y debe mantener su relación de aspecto original.

El estilo se convierte en:

```css
<style> 
  img { 
  max-width: 100%; 
  display: block; 
  height: auto; 
 } 
 </style> 

```