---
title: Create Flexible Layouts Using auto-fill
---
## Create Flexible Layouts Using auto-fill ##

This challenge will expound upon the previous challenge by adding the **auto-fill** value to the *repeat* function. This will cause the number of divs to expand based on the viewport's size rather than the previously specified column value. In the **Before** section below, the **grid-template-column** value "3" is specified.

*Keep in mind that the following code snippets are only examples and not the exact challege from freeCodeCamp's curriculum.*

### Before ###
```css
    grid-template-columns: repeat(3, minmax(50px, 2fr));
```

### After ###
```css
    grid-template-columns: repeat(auto-fill, minmax(50px, 2fr));
```

---
### Resources ###
You may refer to the **Syntax** portion of the following page to see the **auto-fill** value:
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat)