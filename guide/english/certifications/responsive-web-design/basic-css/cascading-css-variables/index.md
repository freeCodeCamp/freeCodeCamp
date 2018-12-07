---
title: Cascading CSS Variables
---
## Cascading CSS Variables

Cascading CSS variables (officially called custom properties) are entities which behave similarly to traditional variables, in that variables allow for data to be stored and updated to reflect new values later<sup>2</sup>. 

CSS variables are defined to contain specific values and be reused throughout a document. They are set using custom property notation (e.g., `--main-color: black`) and are accessed using the `var()` function (e.g., `color: var(--main-color)`)<sup>1</sup>. Declare the CSS variable in the `:root` or `body` selectors for global access.

When maintaining complex CSS documents, it is not only beneficial to use CSS Variables but also smart.  When making future updates instead of searching potential hundreds of lines of code, one only needs to update the necessary CSS variable<sup>1</sup>.


### Syntax

```css
:root {
  --main-bkgnd-color:  #00B8CB;
}

body {
  background-color: var(--main-bkgnd-color);
  font-family: 'Raleway', Helvetica, sans-serif;
}
```
Declaring the variable: 
```css
--custom-name: value
```

Using the variable:
```css 
var(--custom-name)
```

### Solution

In the ```:root``` selector we need to declare the ```--penguin-belly``` variable and give it the value of ```pink```:

```css 
  :root {
    --penguin-belly: pink;
  }
```

### Sources

1. [Visit MDN's Cascading CSS Variables page for more information.](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
2. [Perna, Maria Antonietta. "A Practical Guide to CSS Variables (Custom Properties)" *sitepoint*. August 01, 2018. Accessed: October 5, 2018](https://www.sitepoint.com/practical-guide-css-variables-custom-properties/)
