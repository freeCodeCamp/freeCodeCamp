---
title: Pointer Events
---
## Pointer Events

The `pointer-events` property determines if an element will react to pointer events.

There are 4 possible values that can be assigned to the `pointer-events` property:
- `auto`	  Default Setting:  Reacts to `pointer events` like :hover or click. 
- `none`	  Sets that the element won't react to `pointer-events`
- `initial`	Uses the default value
- `inherit`	Inherits from parent 

This property specifies how your mouse reacts when you hover over any element on a page.

### Example

```css

.example {
  pointer-events: auto; 
  /*this will use the default look set by the browser agent*/
}

.example {
  pointer-events: none; 
  /*this will use the regular mouse look when hovered over the element*/
}

```

### Other acceptable values

Other values could be: `initial`, and `inherit`


#### More Information:
- [pointer-events on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
- [Scalable Vector Graphics 1.1 specification (recommendation)](https://www.w3.org/TR/SVG11/interact.html#PointerEventsProperty)
- [Can I use: CSS pointer-events property](https://caniuse.com/#feat=pointer-events)
- [W3schools - CSS pointer-events Property](https://www.w3schools.com/cssref/css3_pr_pointer-events.asp)
