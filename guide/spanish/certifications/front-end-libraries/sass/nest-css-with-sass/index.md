---
title: Nest CSS with Sass
localeTitle: Nest CSS con Sass
---
## Nest CSS con Sass

*   En Sass, las reglas CSS anidadas permiten definir selectores de jerarquía.
*   Puedes organizar tus hojas de estilo anidando reglas CSS.

## Ejemplo

```sass
.title{ 
  strong{} 
  em{} 
 } 
 
 // This will be compiled into: 
 
 .title{} 
 .title strong{} 
 .title em{} 
```

## Sugerencia 1:

*   Es posible que desee cambiar la posición de "}" en la línea 4.

## Solución

```sass
<style type='text/sass'> 
  .blog-post { 
    h1 { 
     text-align: center; 
     color: blue; 
    } 
    p { 
        font-size: 20px; 
    } 
  } 
 </style> 

```