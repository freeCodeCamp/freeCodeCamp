---
title: CSS3 Nth Child Selector
---
## CSS3 Nth Child Selector

The `nth-child` selector is a css psuedo-class taking a pattern by which to match one or more elements relative to their position amongst siblings.

## Syntax

```css 
  a:nth-child(pattern) {
    /* Css goes here */
  }
```

### Pattern

The patterns accepted by `nth-child` can come in the form of keywords or an equation of the form An+B.

#### Keywords

##### Odd

Odd returns all odd elements of a given type.

```css 
  a:nth-childe(odd) {
    /* CSS goes here */
  }
```

##### Even

Even returns all even elements of a given type.

```css 
  a:nth-childe(even) {
    /* CSS goes here */
  }
```

#### An+B

Returns all elements matching the equation An+B for every positive integer value of n (in addition to 0).

For example, the following will match every 3rd anchor element:
```css 
  a:nth-childe(3n) {
    /* CSS goes here */
  }
```

### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anth-child' target='_blank' rel='nofollow'>MDN Documentation</a>
<a href='https://css-tricks.com/almanac/selectors/n/nth-child/' target='_blank' rel='nofollow'>CSS Tricks - nth child selector</a>
<a href='https://css-tricks.com/examples/nth-child-tester/' target='_blank' rel='nofollow'>CSS Tricks - nth child tester</a>
<a href='https://www.w3schools.com/cssref/sel_nth-child.asp' target='_blank' rel='nofollow'>W3Scools - nth child selector</a>