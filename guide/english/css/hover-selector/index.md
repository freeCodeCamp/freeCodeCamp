---
title: Hover Selector
---

# Hover Selector

The CSS `:hover` selector is one of many pseudo-classes that are used to style elements. 

The `:hover` selector is used to select elements when you mouse over them.

The `:hover` selector can be used on all elements, not only on links. The hover selector will apply certain defined styles to the element when you hover mouse over the element and revert back to the normal style when you move mouse away from the element.

Use the `:link` selector to style links to unvisited pages, the `:visited` selector to style links to visited pages, and the `:active` selector to style the active link.

`:hover` MUST come after :link and :visited (if they are present) in the CSS definition, in order to be effective! It should be specifically in this order:

1. link
2. visited
3. hover
4. active

CSS Syntax
```css
:hover {
    css declarations;
}
```
The hover selector only applies the styles provided in the rule when the element enters the hover state.
That is when the user hovers over the element with their mouse.

```css
button {
  color: white;
  background-color: green;
}

button:hover {
  background-color: white;
  border: 2px solid green;
  color: green;
}
```

In the example above, the button's normal styling is white text on a green button. 
When a user hovers over the button with their mouse the rule with the `:hover` selector will become active and the button's style will change.

The above code will immediately change the style and it won't look great. You can add transition to make change smooth. Remember that you have to apply the transition property to the element not on the hover state.

```css
button {
  color: white;
  background-color: green;
  transition: all 0.2s ease-out; // add the transition property
}
```

You can also use the hover selector on an element to affect another element.

```css
button {
  color: white;
  background-color: green;
}

button:hover span{
  color: green;
}
```

In the example above, when a user moves their mouse over the button element, the span element's color would change to green.

## Additional Resources
- [MDN Pseudo-classes Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
