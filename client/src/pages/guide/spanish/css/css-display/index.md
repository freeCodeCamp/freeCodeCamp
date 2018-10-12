---
title: CSS Display
localeTitle: Pantalla CSS
---
## Pantalla CSS

La propiedad de visualización especifica el tipo de caja utilizada para un elemento HTML. Tiene 20 valores posibles de palabras clave. Los de uso común son:

```css
    .none             {display: none} 
    .block            {display: block} 
    .inline-block     {display: inline-block} 
    .inline           {display: inline} 
    .flex             {display: flex} 
    .inline-flex      {display: inline-flex} 
    .inline-table     {display: inline-table} 
    .table            {display: table} 
    .inherit          {display: inherit} 
    .initial          {display: initial} 
```

La `display:none` propiedad a menudo puede ser útil al hacer que un sitio web responda. Por ejemplo, es posible que desee ocultar un elemento en una página a medida que el tamaño de la pantalla se reduce para compensar la falta de espacio. `display: none` no solo ocultará el elemento, sino que todos los demás elementos de la página se comportarán como si ese elemento no existiera. Esta es la mayor diferencia entre esta propiedad y la `visibility: hidden` propiedad `visibility: hidden` , que oculta el elemento pero mantiene todos los demás elementos de la página en el mismo lugar en que aparecerían si el elemento oculto estuviera visible.

Estos valores de palabras clave se agrupan en seis categorías:

*   `<display-inside>`
*   `<display-outside>`
*   `<display-listitem>`
*   `<display-box>`
*   `<display-internal>`
*   `<display-legacy>`

### Más información:

*   [MDN - pantalla](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
*   [caniuse - Soporte del navegador](http://caniuse.com/#search=display)
*   [CSS-Tricks- Una guía completa para Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)