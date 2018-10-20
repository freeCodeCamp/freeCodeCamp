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

### Description of CSS Position: 

##### 1. Static
The element’s box is generated as normal. Block-level ele‐
ments generate a rectangular box that is part of the docu‐
ment’s flow, and inline-level boxes generate one or more
line boxes that flow within their parent element.

##### 2. Relative
The element’s box is offset by some distance. Its contain‐
ing block can be considered to be the area that the element would occupy if it were not positioned. The element
retains the shape it would have had were it not positioned,
and the space that the element would otherwise have
occupied in the normal flow is preserved.

##### 3. Absolute
The element’s box is completely removed from the flow of
the document and positioned with respect to its contain‐
ing block, which may be another element in the document
or the initial containing block (described in the next sec‐
tion). Whatever space the element might have occupied in
the normal document flow is closed up, as though the ele‐
ment did not exist. The positioned element generates a
block box, regardless of the type of box it would generate
if it were in the normal flow.

##### 4. Sticky
The element’s box stays in the normal flow until it  
reaches a sticky edge of the containing box, at which time it
“sticks” there as if absolutely positioned. The space that
the element would otherwise have occupied in the normal
flow is preserved.

##### 5. Fixed
The element’s box behaves as though set to absolute , but
its containing block is the viewport itself.


### More Information:

MDN Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/position' target='_blank' rel='nofollow'>MDN</a>

Browser Support: <a href='http://caniuse.com/#search=position' target='_blank' rel='nofollow'>caniuse</a>

YouTube: <a href='https://www.youtube.com/watch?v=kejG8G0dr5U' target='_blank' rel='nofollow'>Part1</a> | <a href='https://www.youtube.com/watch?v=Rf6zAP4YnZA' target='_blank' rel='nofollow'>Part2</a>
