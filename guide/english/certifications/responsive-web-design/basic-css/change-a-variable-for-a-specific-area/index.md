---
title: Change a variable for a specific area
---
## Change a variable for a specific area

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Cascading CSS variables officially called custom properties are entities which behave similarly to traditional variables. In that variables allow for data to be stored and updated to reflect new values later. 

When maintaining complex CSS documents, it is not only beneficial to use CSS Variables but also smart.  When making future updates instead of searching potential hundreds of lines of code, one only needs to update the necessary CSS variable.

### Syntax

Declaring the variable: 

```css
--custom-name: value
```

Using the variable:

```css 
var(--custom-name)
```
### Solution

We need to reassign the ```--penguin-belly``` variable to ```white``` in the ```penguin``` class:

```css
  .penguin {
    /* add code below */
    --penguin-belly: white;
    /* add code above */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
```

### Sources
1. [Visit MDN's Cascading CSS Variables page for more information.](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
2. [Perna, Maria Antonietta. "A Practical Guide to CSS Variables (Custom Properties)" *sitepoint*. August 01, 2018. Accessed: October 5, 2018](https://www.sitepoint.com/practical-guide-css-variables-custom-properties/)
