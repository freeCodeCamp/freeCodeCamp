---
title: Visited
---
## Visited

The CSS :visited selector changes the style of a link that has been visited by a user. This selector is used to help users distinguish between links they have and have not visited.

If multiple CSS pseudo selectors are being used, the :visited selector must come after the :link selector.

In the example below, after a user clicks on a link, the text color will change from black to green. 

```css
 a {
   color: black;
 }
 
 a:visited {
   color: green;
 }
```

Due to user privacy reasons, the :visited selector is limited to modifying the styles of the following CSS properties:

* color
* background-color
* border-color (including border-color for separate sides)
* column-rule-color
* outline-color
* fill and stroke (for SVG images)

#### More Information:
* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)
* [W3 Schools](https://www.w3schools.com/cssref/sel_visited.asp)
* [CSS Tricks Guide to Pseudo Classes & Elements](https://www.smashingmagazine.com/2016/05/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements/#visited)

