---
title: CSS Display
---
## CSS Display

The display property specifies the type of box used for an HTML element. It has 20 possible keyword values. The commonly used ones are:

```css
  .none             {display: none}
  .block            {display: block}
  .inline-block     {display: inline-block}
  .inline           {display: inline}
  .flex             {display: flex}
  .inline-flex      {display: inline-flex}
  .inline-table     {display: inline-table}
  .table            {display: table}
  .inherit          {display: inherit}
  .initial          {display: initial}
```

The `display:none` property can often be helpful when making a website responsive. For example, you may want to hide an element on a page as the screen size shrinks in order to compensate for the lack of space. `display: none` will not only hide the element, but all other elements on the page will behave as if that element does not exist. This is the biggest difference between this property and the `visibility: hidden` property, which hides the element but keeps all other page elements in the same place as they would appear if the hidden element was visible.

These keyword values are grouped into six categories:

* ```<display-inside>```
* ```<display-outside>```
* ```<display-listitem>```
* ```<display-box>```
* ```<display-internal>```
* ```<display-legacy>```

### More Information:

- [MDN - display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [caniuse - Browser Support](http://caniuse.com/#search=display)
- [CSS-Tricks- A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
