---
title: Comments in CSS
localeTitle: Comentarios en CSS
---
## Comentarios en CSS

Los comentarios se utilizan en CSS para explicar un bloque de código o para hacer cambios temporales durante el desarrollo. El código comentado no se ejecuta.

La sintaxis de comentarios en CSS funciona tanto para comentarios de una sola línea como de líneas múltiples. Puede agregar tantos comentarios a su hoja de estilos como desee.

```css
    /* 
        This is 
        a multi-line 
        comment 
    */ 
 
    /* This is a single line comment*/ 
    .group:after { 
        content: ""; 
        display: table; 
        clear: both; 
    } 
```

Al utilizar los comentarios de CSS para que sus hojas de estilo sean más legibles, el CSS será más fácil de mantener en el futuro para usted u otro desarrollador. Es una buena práctica usar comentarios de CSS para ayudar a identificar partes de cualquier hoja de estilo que pueda ser difícil de entender para alguien que no escribió el código.

También puede hacer que sus comentarios sean más legibles al estilizarlos.

```css
/* 
 *** 
 * SECTION FOR H2 STYLE 
 *** 
 * A paragraph where I give informations 
 * about everything that someone who reads the code 
 * but didn't write it would need to know. 
 * The asterisk around the paragraph make it more readable. 
 *** 
 */ 
 
 You can add as many comments to your stylesheet as you like. It's good practice to use CSS comments to help identify parts of any stylesheet that might be difficult to understand from a cursory glance. Comments are especially important when working in a team, when your code must be understood by others. By using CSS comments to make your stylesheets more readable, the CSS will be easier to maintain in the future. 
 
 ## Comment Formats 
 
 Comments should be used everyday in your CSS to keep in maintainable and readable by any dev who dives into said CSS. 
 Here are a few exmples to get you started of CSS comments you can use in your daily work to make your life that bit easier. 
```

css / \* +++++++++++++++++++++++++++++++++++++++++++++++++ +++++++++++++++++++++++++++ +++++++++++++++++++++++++++++++++++++++++++++++++++ +++++++++++++++++++++++++ CSS TABLA DE CONTENIDOS

1.0 - Restablecer 2.0 - Fuentes 3.0 - Globales 4.0 - Paleta de colores 5.0 - Encabezado 6.0 - Cuerpo 6.1 - Deslizadores 6.2 - Imágenes 7.0 - Pie de página +++++++++++++++++++++++++++++++++++++++++++++++++++ +++++++++++++++++++++++++ +++++++++++++++++++++++++++++++++++++++++++++++++++ +++++++++++++++++++++++++ \* /

/ 1.0 - Restablecer \* /

/ 2.0 - Fuentes \* /

/ 3.0 - Globales \* /

/ 4.0 - Paleta de colores \* /

/ 5.0 - Encabezado \* /

/ 6.0 - Cuerpo \* /
```
/************************************************************************ 
 5.1 - Sliders */ 
 
 /************************************************************************ 
 5.2 - Imagery */ 
```

/ 7.0 - Pie de página \* / \`\` \`css

h2 { tamaño de letra: 1.2em; font-family: "Ubuntu", serif; transformación de texto: mayúsculas; } \`\` \`

### Más información:

*   [Documentación de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
*   [Comentarios de CSS de Adam Roberts](https://www.sitepoint.com/css-comments/)
*   [Pautas CSS](https://cssguidelin.es/#commenting)