---
title: CSS Cursors
localeTitle: Cursores CSS
---
## Cursores CSS

A propriedade cursor especifica o tipo de cursor a ser exibido quando você passa o mouse sobre um elemento. Tem 36 valores possíveis:

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

Você também pode definir uma imagem como o cursor.
```
.custom-cursor { 
  cursor: url(cursor-image.png); 
 } 
```

#### Mais Informações:

*   Verifique os valores do cursor acima em ação: [codepen](https://codepen.io/chriscoyier/pen/uCwfB)
*   Rede de desenvolvedores Mozilla: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
*   Suporte ao Navegador: [caniuse](http://caniuse.com/#search=cursor)
*   Exemplos de cursores por w3schools: [w3schools](https://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor&preval=none)