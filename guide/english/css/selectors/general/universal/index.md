---
title: Universal
---

## Universal

Universal Selector(*) selects all elements . It also selects all elements inside an element. You can attach universal selector with any other selector.

### Code Syntax

```css
* { 
  css declarations; 
}
```

```css
element * {
  css declarations; 
}
```

#### Code Example

This selector matches all elements and set font color as green.

```css
* { 
  color: green;
}
```

This selector selects all div elements and set font color as green.

```css
div * { 
  color: green;
}
```

This selector selects all elements whose language attribute value starts with en.

```css
* [lang^=en] {
  color: green;
}
```
