---
title: Class
localeTitle: Clase
---
## Clase

El selector de "clase" de CSS se usa para aplicar el mismo estilo a múltiples elementos en la página. Una buena manera de pensar en esto sería como el plano de un automóvil o edificio. El plano le permitirá construir varios autos o varios edificios de la misma manera después de diseñar el diseño real una vez.

### Casos de uso

A diferencia de los nombres de clase "ID" de CSS no son únicos. Por lo tanto, está bien que use una "clase" varias veces si desea que estos elementos tengan el mismo estilo aplicado. De hecho, este sería un buen momento para usar una "clase". Si desea que tres elementos "div" en su HTML tengan un fondo azul, puede usar una clase una vez en su CSS, como se ve en el ejemplo. abajo.
```
<html> 
 <style> 
  .blueBg { 
    background-color: blue; 
  } 
 </style> 
  <body> 
    <div class="blueBg"></div> 
    <div class="blueBg"></div> 
    <div class="blueBg"></div> 
  </body> 
 </html> 
```

#### Más información:

Si desea obtener más información sobre el selector de "clase" de CSS, visite [esta página](https://css-tricks.com/the-difference-between-id-and-class/)