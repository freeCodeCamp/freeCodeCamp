---
title: Styling Links
localeTitle: Enlaces de estilo
---
## Enlaces de estilo

Los enlaces pueden ser estilizados con cualquier propiedad CSS, como `color` , `font-family` `font-size` y `padding` . Aquí hay un ejemplo fácil:

```css
a { 
    color: hotpink; 
 } 
```

## Además, los enlaces pueden tener un estilo diferente dependiendo del estado en que se encuentren.

Los enlaces también tienen 4 estados, y muchos programadores diseñan cada estado de manera diferente. Los cuatro estados son:

*   `a:link` : un `a:link` no visitado, sin cliquear
*   `a:visited` : un enlace visitado, pulsado
*   `a:hover` : un enlace cuando el mouse del usuario está sobre él
*   `a:active` : un enlace cuando se hace clic

La propiedad `<a href="">` es responsable de crear URL y puede modificarse utilizando varias propiedades de estilo CSS, aunque tiene algunas de forma predeterminada:

1.  Subrayar
2.  Color azul

Puede cambiarlos agregando las propiedades de `color` y `text-decoration` .

```css
   color: black; 
   text-decoration: none; 
```

También puede aplicar estilo al enlace en función de la interacción mediante estas propiedades, también conocidas como estados de enlace:

*   a: enlace - un enlace normal, no visitado
*   a: visit - un enlace que el usuario ha visitado
*   a: hover - un enlace cuando el usuario hace click sobre él
*   a: activo - un enlace en el momento en que se hace clic

Aquí hay algunos ejemplos de CSS usando los 4 estados:

```css
a:link { color: red; } 
 a:visited { color: blue; } 
 a:hover { color: green; } 
 a:active { color: blue; } 
```

**Tenga en cuenta** que hay algunas _reglas de pedido_ para cuando está configurando el estilo para los estados de enlace.

*   `a:hover` DEBE venir después de `a:link` y `a:visited`
    
*   `a:active` DEBE venir después de `a:hover`
    
    a: enlace - un enlace normal, no visitado a: visit - un enlace que el usuario ha visitado a: hover - un enlace cuando el usuario hace click sobre él a: activo - un enlace en el momento en que se hace clic
    

```css
/* unvisited link */ 
 a:link { 
    color: red; 
 } 
 
 /* visited link */ 
 a:visited { 
    color: green; 
 } 
 
 /* mouse over link */ 
 a:hover { 
    color: hotpink; 
 } 
 
 /* selected link */ 
 a:active { 
    color: blue; 
 } 

```