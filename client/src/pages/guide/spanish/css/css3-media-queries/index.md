---
title: CSS3 Media Queries
localeTitle: Consultas de medios CSS3
---
## Consultas de medios CSS3

Las consultas de medios le permiten tener diferentes estilos para diferentes dispositivos / tamaños de pantalla. Su introducción en CSS3 ha facilitado enormemente la construcción. de páginas web responsivas.

El mejor enfoque al diseñar un sitio web sensible es pensar primero en dispositivos móviles; Lo que significa que creas tu página comenzando con el diseño y el contenido. de la versión móvil. Puede pensar que con algunos tamaños escalables (%, vw o vh), su página se adaptará perfectamente a cualquier dispositivo. Pero no lo hará. Tal vez para un diseño muy básico, pero ciertamente no para páginas más comunes o complejas.

Al diseñar su página para dispositivos más pequeños, se centrará en el contenido principal. En una pantalla más grande, tendrá que volver a adaptar algunos tamaños de fuente, márgenes, rellenos y demás para mantener su sitio cómodo y legible, pero también querrá / necesitará agregar más contenido, los que no juzgó fundamental, y rellene el espacio creado por el tamaño de la pantalla.

El proceso de pensamiento debe ser:

1.  ¿Qué contenido mostrar?
2.  ¿Cómo maquetar?
3.  ¿Tamaño?

### La sintaxis básica.

```css
    @media only screen and (min-width: 768px) { 
      p {padding: 30px;} 
    } 
```

La etiqueta `p` tendrá un relleno de 30px tan pronto como la pantalla alcance un ancho mínimo de 768px.

### La sintaxis AND

```css
  @media only screen and (min-height: 768px) and (orientation: landscape) { 
    p {padding: 30px;} 
  } 
```

La etiqueta `p` tendrá un relleno de 30px tan pronto como la pantalla alcance la altura mínima de 768px y su orientación sea horizontal.

### La sintaxis OR

```css
    @media only screen and (min-width: 768px), (min-resolution: 150dpi) { 
      p {padding: 30px;} 
    } 
```

La etiqueta `p` tendrá un relleno de 30px tan pronto como la pantalla alcance el ancho mínimo de 768px o su resolución alcance el mínimo de 150dpi.

### Más información

*   [MDN - consultas de medios](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
*   [Escuelas W3 - regla @media](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
*   [Trucos CSS Estándar Dispositivo Anchos Atricle](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
*   \[https://alistapart.com/article/responsive-web-design◆(Ethan Marcotte A List Apart Atricle on Responsive Web Design)