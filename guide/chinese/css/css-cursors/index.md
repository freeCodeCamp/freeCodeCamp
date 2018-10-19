---
title: CSS Cursors
localeTitle: CSS游标
---
## CSS游标

cursor属性指定将鼠标悬停在元素上时要显示的光标类型。它有36个可能的值：

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

![alt text](http://www.javascripter.net/faq/24_cursor_styles.gif "CSS游标")

您还可以将图像设置为光标。
```
.custom-cursor { 
  cursor: url(cursor-image.png); 
 } 
```

#### 更多信息：

*   检查上面的游标值： [codepen](https://codepen.io/chriscoyier/pen/uCwfB)
*   Mozilla开发者网络： [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
*   浏览器支持： [caniuse](http://caniuse.com/#search=cursor)
*   w3schools的光标示例： [w3schools](https://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor&preval=none)