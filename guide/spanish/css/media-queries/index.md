---
title: Media Queries
localeTitle: Preguntas de los medios
---
#### Lectura sugerida:

[Uso de consultas de medios - documentos web de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

También vea la sección [Principios de diseño web receptivo](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/01-responsive-web-design/responsive-web-design.json) en Beta

#### Proyecto de artículo:

Las consultas de medios son conjuntos de reglas que definen las propiedades de CSS. Puede configurar consultas de medios para cambiar la apariencia de su contenido en función de cómo se ve su contenido.

Las consultas de los medios pueden determinar la apariencia de su contenido en diferentes pantallas. Algunos ejemplos de diferentes pantallas son: imágenes en la pantalla de una computadora, texto impreso o páginas web en un lector de pantalla de audio.

En las páginas web, es posible que algunos elementos no se muestren de manera consistente en diferentes tamaños de pantalla. Puede utilizar consultas de medios para establecer reglas especiales para pantallas pequeñas y grandes.

Este es un ejemplo de una consulta de medios que establece el tamaño del texto del cuerpo en la pantalla de un teléfono:

```css
@media screen and (max-width: 450px) { 
 body { 
   font-size: 12px; 
  } 
 } 
```

Esta consulta de medios estipula que para tamaños de pantalla de hasta 450 píxeles de ancho, el texto del cuerpo debe mostrarse en un tamaño de fuente de 12px.

Las consultas de medios pueden ser útiles en [el diseño web sensible](https://guide.freecodecamp.org/html/responsive-web-design) .