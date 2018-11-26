---
title: CSS Cursors
---
## CSS Cursors

The cursor property specifies the type of cursor to be displayed when you hover over an element. It has 39 possible values: 

• `cursor: alias;`<br>
• `cursor: all-scroll;`<br>
• `cursor: auto;`<br>
• `cursor: cell;`<br>
• `cursor: context-menu;`<br>
• `cursor: col-resize;`<br>
• `cursor: copy;`<br>
• `cursor: crosshair;`<br>
• `cursor: default;`<br>
• `cursor: e-resize;`<br>
• `cursor: ew-resize;`<br>
• `cursor: grab;`<br>
• `cursor: grabbing;`<br>
• `cursor: help;`<br>
• `cursor: move;`<br>
• `cursor: n-resize;`<br>
• `cursor: ne-resize;`<br>
• `cursor: nesw-resize;`<br>
• `cursor: ns-resize;`<br>
• `cursor: nw-resize ;`<br>
• `cursor: nwse-resize;`<br>
• `cursor: no-drop;`<br>
• `cursor: none;`<br>
• `cursor: not-allowed;`<br>
• `cursor: pointer;`<br>
• `cursor: progress;`<br>
• `cursor: row-resize;`<br>
• `cursor: s-resize;`<br>
• `cursor: se-resize;`<br>
• `cursor: sw-resize;`<br>
• `cursor: text;`<br>
• `cursor: vertical-text;`<br>
• `cursor: w-resize;`<br>
• `cursor: wait;`<br>
• `cursor: zoom-in;`<br>
• `cursor: zoom-out;`<br>
• `cursor: initial;`<br>
• `cursor: inherit;`

![alt text](http://www.javascripter.net/faq/24_cursor_styles.gif "CSS Cursors")


You can also set an image as the cursor.<br>
Note: Always specify a default cursor at the end incase the specified cursor is unavailable.

```
.custom-cursor {
  cursor: url(cursor-image.png), auto;
}
```

#### More Information:
* Check the above cursor values in action: <a href='https://codepen.io/chriscoyier/pen/uCwfB' target='_blank' rel='nofollow'>codepen</a>
* Mozilla Developer Network: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/cursor' target='_blank' rel='nofollow'>MDN</a>
* Browser Support: <a href='http://caniuse.com/#search=cursor' target='_blank' rel='nofollow'>caniuse</a>
* Cursor examples by w3schools: <a href='https://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor&preval=none' target='_blank' rel='nofollow'>w3schools</a>
