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
Elements can be literally positioned by getting `top`, `right`, `bottom` and `left` values with the `position` property. Relative positioning will position the element according to the viewport while absolute positioning will position the element according to the parent element with the `position:relative` property. 

It's important to know that an element with `position:relative` property will still preserve the space it takes at its original position when it is moved, however, an element with `position:absolute` property will not.

* Static: Is always positioned in within the natural flow of the page.  
* Relative: Is moved relative from its normal position.  
* Sticky: Is placed based on the scroll, and jumps from it's relative position to it's scroll position when it is scrolled past in a document.  
* Fixed: Removed from the flow of the document, and is fixed to a point in the viewpoint, regardless of scrolling.  
* Absolute: Removed from the flow of the document.  
### More Information:

MDN Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/position' target='_blank' rel='nofollow'>MDN</a>

Browser Support: <a href='http://caniuse.com/#search=position' target='_blank' rel='nofollow'>caniuse</a>

YouTube: <a href='https://www.youtube.com/watch?v=kejG8G0dr5U' target='_blank' rel='nofollow'>Part1</a> | <a href='https://www.youtube.com/watch?v=Rf6zAP4YnZA' target='_blank' rel='nofollow'>Part2</a>
