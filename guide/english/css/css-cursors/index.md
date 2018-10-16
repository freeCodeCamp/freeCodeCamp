---
title: CSS Cursors
---
## CSS Cursors

The cursor property specifies the type of cursor to be displayed when you hover over an element. It has 39 possible values: 
```css
    .alias           { cursor: alias; }
    .all-scroll      { cursor: all-scroll; }
    .auto            { cursor: auto; }
    .cell            { cursor: cell; }
    .context-menu    { cursor: context-menu; }
    .col-resize      { cursor: col-resize; }
    .copy            { cursor: copy; }
    .crosshair       { cursor: crosshair; }
    .default         { cursor: default; }
    .e-resize        { cursor: e-resize; }
    .ew-resize       { cursor: ew-resize; }
    .grab            { cursor: grab; }
    .grabbing        { cursor: grabbing; }
    .help            { cursor: help; }
    .move            { cursor: move; }
    .n-resize        { cursor: n-resize; }
    .ne-resize       { cursor: ne-resize; }
    .nesw-resize     { cursor: nesw-resize; }
    .ns-resize       { cursor: ns-resize; }
    .nw-resize       { cursor: nw-resize; }
    .nwse-resize     { cursor: nwse-resize; }
    .no-drop         { cursor: no-drop; }
    .none            { cursor: none; }
    .not-allowed     { cursor: not-allowed; }
    .pointer         { cursor: pointer; }
    .progress        { cursor: progress; }
    .row-resize      { cursor: row-resize; }
    .s-resize        { cursor: s-resize; }
    .se-resize       { cursor: se-resize; }
    .sw-resize       { cursor: sw-resize; }
    .text            { cursor: text; }
    .vertical-text   { cursor: vertical-text; }
    .w-resize        { cursor: w-resize; }
    .wait            { cursor: wait; }
    .zoom-in         { cursor: zoom-in; }
    .zoom-out        { cursor: zoom-out; }
    .initial         { cursor: initial; }
    .inherit         { cursor: inherit; }
    ```
![alt text](http://www.javascripter.net/faq/24_cursor_styles.gif "CSS Cursors")

You can also set an image as the cursor. 
Note: Always specific a default cursor at the end incase the specified cursor is unavailable.

```
.custom-cursor {
  cursor: url(cursor-image.png),auto;
}
```

#### More Information:
* Check the above cursor values in action: <a href='https://codepen.io/chriscoyier/pen/uCwfB' target='_blank' rel='nofollow'>codepen</a>
* Mozilla Developer Network: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/cursor' target='_blank' rel='nofollow'>MDN</a>
* Browser Support: <a href='http://caniuse.com/#search=cursor' target='_blank' rel='nofollow'>caniuse</a>
* Cursor examples by w3schools: <a href='https://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor&preval=none' target='_blank' rel='nofollow'>w3schools</a>
