---
title: Introduction to CSS
localeTitle: Introducción a CSS
---
## Introducción a CSS

### ¿Qué es CSS?

Las hojas de estilo en cascada (CSS) describen cómo debería aparecer el html en una página.

Antes, los desarrolladores de CSS aplicarían estilos utilizando atributos o etiquetas especiales en cada nodo de una página. Esto hizo que el marcado sea repetitivo y propenso a errores.

CSS permite a los selectores describir cómo debe verse cada pieza de contenido coincidente.

```CSS
body { 
    font-size: 15px; 
 } 
 
 a { 
    color: rebeccapurple; 
    text-decoration: underline; 
 } 
```

### Usando CSS

**Las hojas de estilo externas** permiten que muchas páginas compartan los mismos estilos.

```HTML
<link href="styles.css" rel="stylesheet" type="text/css"> 
```

**Las hojas de estilo internas** aplican CSS a todas las etiquetas coincidentes en una página.

```HTML
<style> 
    h1 { 
        font-family: sans-serif; 
        margin-bottom: 1.5em; 
    } 
 </style> 
```

**CSS en línea** aplica estilos a una sola etiqueta.

```HTML
<img src="..." style="border: 1px solid red;" /> 
```

#### Más información:

*   [Escuelas w3](https://www.w3schools.com/css/css_intro.asp)
*   [Almanaque trucos CSS](https://css-tricks.com/almanac/)
*   [Sitepoint](https://www.sitepoint.com/html-css/?ref_source=github)