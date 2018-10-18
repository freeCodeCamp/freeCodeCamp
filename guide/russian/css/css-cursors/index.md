---
title: CSS Cursors
localeTitle: CSS-курсоры
---
## CSS-курсоры

Свойство cursor указывает тип отображаемого курсора при наведении на элемент. Он имеет 36 возможных значений:

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

![alt text](http://www.javascripter.net/faq/24_cursor_styles.gif "CSS-курсоры")

Вы также можете установить изображение в качестве курсора.
```
.custom-cursor { 
  cursor: url(cursor-image.png); 
 } 
```

#### Дополнительная информация:

*   Проверьте приведенные выше значения курсора в действии: [codepen](https://codepen.io/chriscoyier/pen/uCwfB)
*   Сеть разработчиков Mozilla: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
*   Поддержка браузера: [caniuse](http://caniuse.com/#search=cursor)
*   Примеры курсоров w3schools: [w3schools](https://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor&preval=none)