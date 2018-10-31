---
title: Active
---
## Active

The CSS :active selector changes the style of an HTML element when a user activates the element. This selector typically provides the user confirmation that they have clicked on an element. 
The :active selector is most commonly used on ```<a>``` and ```<button>``` elements but can be used on all elements.

If multiple CSS pseudo selectors are being used, the :active selector must come after the :hover selector.

In the example below, when a user clicks on a link, the text color will change from black to red until the click action stops. 

```css
a {
  color: black;
}

a:active {
  color: red;
}
```

#### More Information:
* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
* [W3 Schools](https://www.w3schools.com/cssref/sel_active.asp)


