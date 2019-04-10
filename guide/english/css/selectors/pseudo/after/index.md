---
title: After
---
## After

The ```::after``` CSS pseudo-element inserts a custom HTML element after the content of the selected HTML element. This selector is most commonly used to add visual content using the CSS ```content``` property.

General Syntax:

```css
::after
```

## Example

```css
/* "Text to insert" is placed after the content of each <div> element */
div::after {
  content: "Text to insert";
}
```

## More Examples

A great example of a practical use case is if you wanted to display the ```href``` attribute value for all links on your page.

```html
<a href="www.freecodecamp.org">Learn to code</a>
```

```css
a::after {
  content: " " attr(href);
}
```

The ```::after``` CSS pseudo-element can be used in many creative ways, especially when combined with it's sibling ```::before```.

#### More Information:
* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)
* [W3 Schools](https://www.w3schools.com/cssref/sel_after.asp)
* [CSS Tricks - A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/)
