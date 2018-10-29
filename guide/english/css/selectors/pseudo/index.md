---
title: Pseudo
---
# Pseudo Selectors

Pseudo selectors provide a way to target elements using pseudo classes or pseudo elements.

## Structural Pseudo Classes
Structural Pseudo classes offer a way to target elements based on their position.

Class     | Description
---------|------------
`:root`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Root of the document. In the context of HTML documents, this would be `html` tag at the top. It could mean different elements in other documents such as XML or SVG.
`:only-child` | An element that is the only child of its parent element.
`:first-child` | First child of a parent.
`:last-child` | Last child of a parent element.
`:nth-child(n)` | n-th child of its parent.
`:nth-last-child(n)` | n-th child from the last child. The reverse of `:nth-child`.
`:only-of-type` | The only element of the type within its siblings with other types.
`:first-of-type` | The first element of the type among its siblings.
`:last-of-type` | The last element of the type among its siblings.
`:nth-of-type(n)` | n-th sibling of the same type. 
`:nth-last-of-type(n)` | n-th sibling of the same type from the last one. The reverse of `:nth-of-type`.
`:empty` | An element without any child elements.

## UI State Pseudo Classes
UI state pseudo classes offer a way to target elements based on their current state.

Class     | Description
---------|------------
`:link` | Unvisited link elements.
`:visited` | A link visited already.
`:hover` | An element over which mouse pointer is hovering.
`:active` | An element on which mouse pointer has been clicked, but not yet released.
`:focus` | An element that has focus. Important for accessibility, for example, while using `tab` key for navigation.
`:enabled` | An element that is in enabled state.
`:disabled` | An element that has been disabled.
`:checked` | A selected Checkbox or Radio button.

## Pseudo elements
Pseudo elements on the other hand, are dynamically generated elements or elements at a special place. 

Selector     | Description
---------|------------
`::first-line` | First line of an element, usually a container or paragraph.
`::first-letter` | A letter of an element. Widely used for styling drop-caps.
`::before` | A dynamic element created with content of its own before the actual element.
`::after` | A dynamic element created with content of its own after the actual element.

## More Information:
Additional information can be found on below references.

* [Official CSS3 Selector specification](https://www.w3.org/TR/css3-selectors/#structural-pseudos)
* [Mozilla developer network page on selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)