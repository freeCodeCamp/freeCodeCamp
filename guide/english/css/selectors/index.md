---
title: Selectors
---
# Selectors

Selectors are CSS rules to target HTML elements to apply styles. Tag names, class names, id, and attributes are some of the hooks used as selectors.

## Selector Syntax

Selectors arranged in a specific sequence would build up to a rule to target elements. An example, 

```css
/* selects anchor tags */
a { 
    color: orange;
}

/* selects elements with hero class */
.hero {
    text-align: center;
}
```

## Type of Selectors

Type | Description
-------|------------
Type selectors | Tag names are used to select elements such as `h1` or `a`.
Universal Selector | Selector that applies to all elements. `div *` matches all elements within div elements.
Attribute Selector | Selectors that target elements based on their attributes [and optionally, their values]. `h1[title]` selects `h1` elements with `title` attribute.
Class Selector | Selector that targets elements using their class names.
ID Selector | Selector that uses ID to target elements. `#logo` selects the element with `logo` as ID.
Pseudo-class Selector | Special selectors that target elements based on their state. `a:hover` selector applies style when pointer hovers over links.

## Selector Combinators

Combinator | Purpose 
-----------|------------
`white space` | Descendant combinator. `.nav li` selects all `li` children within the class `.nav`, including nested `li` elements.
`>` | Child combinator. `.menu > li` selects all li that are direct children of elements with `.menu` class.
`+` | Adjacent sibling combinator. `.logo + h1` targets `h1` that is an immediate sibling to `.logo` class.
`~` | General sibling combinator. `header ~ div` targets `div` elements that are siblings to `header` elements.

This section details all of these electors.

#### More Information:
You can learn more about selectors on these resources:
* [Official CSS3 Selectors specification](https://www.w3.org/TR/css3-selectors)
* [Selectors page on Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)
* [CSS Selectors Cheat Sheet on FreeCodeCamp Guides](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet)


Selectors in CSS (cascading style sheets) are determined based on *specificity*, with this we are able to be more specific on our style rules and override other rules that may be targeting the same element but is not as specific. The way this specificty hierarchy works is based on weight, meaning a element Selector has a weight of 1 (one), a class selector has a weight of 10 (ten) and a id selector has a weight of One Hundred (100). We are able to combine different selectors together be more specific on the element we whant to change. 

As a example: 

  ```css
      p {
        color: blue;
      }
      p .red {
         color: red;
      }
   ```
Our type selector p will select all p elements in our html document but it only has a weight of one. in contrast, the class selector has a weight of 11 for the reason we are combining a type selector with a class selector(this selector is matching all p elements with a class of red). 
--* Directly targeted rules will always have precedence over rules which inherits elements from its ancestor. 
--* Specifity is only applied when multiple declarations are targeting the same element, only then this rule is then applied.  
--* specifity is usually why some of you style rules do not apply to elements when you would expect them to. 
