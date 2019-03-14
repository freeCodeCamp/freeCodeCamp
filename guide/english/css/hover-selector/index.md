---
title: Hover Selector
---
## Hover Selector

The CSS `:hover` selector is one of many pseudo-classes that are used to style elements. 

The `:hover` selector is used to select elements when you mouse over them.

The `:hover` selector can be used on all elements, not only on links.

Use the `:link` selector to style links to unvisited pages, the `:visited` selector to style links to visited pages, and the `:active` selector to style the active link.

Note: `:hover` MUST come after `:link` and `:visited` (if they are present) in the CSS definition, in order to be effective!

CSS Syntax
:hover {
    css declarations;
}

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

#### More Information:
<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes' target='_blank' rel='nofollow'>MDN `:hover` Docs</a>

You can find many more pseudo-classes in this article on Mozillia's <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes' target='_blank' rel='nofollow'>MDN Pseudo-classes Docs</a>.
