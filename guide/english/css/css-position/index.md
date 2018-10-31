---
title: CSS Position
---
## CSS Position

The `position` property specifies the type of positioning method used for an element. 


### Types of positioning
- **positioned element** is a element whose position is set to anything else than default `static` value. Values of positioned element can be: `relative`, `sticky`, `fixed` or `absolute`.
- **relatively positioned element** is an element with `position: relative` property. The top, bottom, left and right properties specify the offset from its normal position.
- **absolutely positioned element** is an element with `position: absolute` property. The top, right, bottom, and left properties specify offsets relative to its closest positioned ancestor.
- **stickily positioned element** is an element with `position: sticky` property. The element is treated like a relatively positioned element until the scroll location of the viewport reaches a specified threshold, at which point the element takes a fixed position where it is told to stick.

### Property values
```css
.static         { position: static; } // default value
.relative       { position: relative; }
.sticky         { position: sticky; }
.fixed          { position: fixed; }
.absolute       { position: absolute; }
```

### More Information:

MDN Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/position' target='_blank' rel='nofollow'>MDN</a>

Browser Support: <a href='http://caniuse.com/#search=position' target='_blank' rel='nofollow'>caniuse</a>

YouTube: <a href='https://www.youtube.com/watch?v=kejG8G0dr5U' target='_blank' rel='nofollow'>Part1</a> | <a href='https://www.youtube.com/watch?v=Rf6zAP4YnZA' target='_blank' rel='nofollow'>Part2</a>
