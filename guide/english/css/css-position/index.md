---
title: CSS Position
---
## CSS Position

The position property specifies the type of positioning method used for an element. It has 5 keyword values:

```css
.static         { position: static; } // default value
.relative       { position: relative; }
.sticky         { position: sticky; }
.fixed          { position: fixed; }
.absolute       { position: absolute; }
```
Elements with the poisiton property can be literally positioned by getting top, right, bottom and left values. Relative positioning will position the element according to the viewport and absolute positioning will position the element according to the parent element with the position:relative property. 

It's important to know that an element with position:relative property will still preserve the space it takes at it's original position when it's moved, however an element with position:absolute property will not.

### More Information:

MDN Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/position' target='_blank' rel='nofollow'>MDN</a>

Browser Support: <a href='http://caniuse.com/#search=position' target='_blank' rel='nofollow'>caniuse</a>

YouTube: <a href='https://www.youtube.com/watch?v=kejG8G0dr5U' target='_blank' rel='nofollow'>Part1</a> | <a href='https://www.youtube.com/watch?v=Rf6zAP4YnZA' target='_blank' rel='nofollow'>Part2</a>
