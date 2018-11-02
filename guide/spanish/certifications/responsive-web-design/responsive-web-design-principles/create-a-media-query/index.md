---
title: Create a Media Query
localeTitle: Crear una consulta de medios
---
## Crear una consulta de medios

Siguiendo las instrucciones:

Agregue una consulta de medios, de modo que la etiqueta p tenga un tamaño de fuente de 10 px cuando la altura del dispositivo sea menor o igual a 800 px.

La consulta de medios es:

```css
  /* Add media query below */ 
  @media (max-height: 800px){ 
    p { 
    font-size: 10px; 
      } 
  } 
```

y el tamaño del texto será 10px cuando el ancho del dispositivo sea menor o igual a 800px.