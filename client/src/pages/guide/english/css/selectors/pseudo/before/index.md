---
title: After
---
## Before

The ```::before``` CSS pseudo-element inserts a custom HTML element before the content of the selected HTML element. This selector is most commonly used to add visual content using the CSS ```content``` property.

General Syntax:

```css
::before
```

## Example

```css
/* "Text to insert" is placed before the content of each <div> element */
div::before {
  content: "Text to insert";
}
```

## More Examples

A great example of a practical use case is if you wanted to display a copyright icon before your copyright info.

```html
<p>2018 freeCodeCamp. All rights Reserved</a>
```

```css
a::before {
  content: "©";
}
```

The ```::before``` CSS pseudo-element can be used in many creative ways, especially when combined with it's sibling ```::after```.

#### More Information:
* [MDN Web Docs](https://www.w3schools.com/cssref/sel_before.asp)
* [W3 Schools](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)
* [CSS Tricks - A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/)
