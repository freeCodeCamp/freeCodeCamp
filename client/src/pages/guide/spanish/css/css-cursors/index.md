---
title: CSS Cursors
localeTitle: Cursores CSS
---
## Cursores CSS

La propiedad del cursor especifica el tipo de cursor que se mostrará cuando se desplaza sobre un elemento. Tiene 36 valores posibles:

```css
    .auto            { cursor: auto; } 
    .default         { cursor: default; } 
    .none            { cursor: none; } 
    .context-menu    { cursor: context-menu; } 
    .help            { cursor: help; } 
    .pointer         { cursor: pointer; } 
    .progress        { cursor: progress; } 
    .wait            { cursor: wait; } 
    .cell            { cursor: cell; } 
    .crosshair       { cursor: crosshair; } 
    .text            { cursor: text; } 
    .vertical-text   { cursor: vertical-text; } 
    .alias           { cursor: alias; } 
    .copy            { cursor: copy; } 
    .move            { cursor: move; } 
    .no-drop         { cursor: no-drop; } 
    .not-allowed     { cursor: not-allowed; } 
    .all-scroll      { cursor: all-scroll; } 
    .col-resize      { cursor: col-resize; } 
    .row-resize      { cursor: row-resize; } 
    .n-resize        { cursor: n-resize; } 
    .e-resize        { cursor: e-resize; } 
    .s-resize        { cursor: s-resize; } 
    .w-resize        { cursor: w-resize; } 
    .ns-resize       { cursor: ns-resize; } 
    .ew-resize       { cursor: ew-resize; } 
    .ne-resize       { cursor: ne-resize; } 
    .nw-resize       { cursor: nw-resize; } 
    .se-resize       { cursor: se-resize; } 
    .sw-resize       { cursor: sw-resize; } 
    .nesw-resize     { cursor: nesw-resize; } 
    .nwse-resize     { cursor: nwse-resize; } 
```

![alt text](http://www.javascripter.net/faq/24_cursor_styles.gif "Cursores CSS")

También puede establecer una imagen como el cursor.
```
.custom-cursor { 
  cursor: url(cursor-image.png); 
 } 
```

#### Más información:

*   Verifique los valores del cursor de arriba en acción: [codepen](https://codepen.io/chriscoyier/pen/uCwfB)
*   Red de desarrolladores de Mozilla: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
*   Soporte del navegador: [Caniuse](http://caniuse.com/#search=cursor)
*   Ejemplos de cursor por w3schools: [w3schools](https://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor&preval=none)