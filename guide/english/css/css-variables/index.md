---
title: CSS Variables
---
## CSS Custom Properties (Variables)
The var() function can be used to insert the value of a custom property.

## The var() Function
Variables in CSS should be declared within a CSS selector that defines its scope. For a global scope you can use either the :root or the body selector.
The variable name must begin with two dashes (--) and is case sensitive!

The syntax of the `var()` function is as follows:
```css
var(custom-name, value)
```
`custom-name` - Required. The custom property's name (must start with two dashes)
`value` - Optional. The fallback value (used if the custom property is invalid)

### Example
The following example first defines a global custom property then it uses the var() function to insert the value of the custom property later in the style sheet:

```css
:root {
    --main-bg-color: red;
    --main-txt-color: blue; 
    --main-padding: 15px; 
}

h1 {
    color: var(--main-txt-color);
}

div {
    background-color: var(--main-bg-color);
    padding: var(--main-padding);
}
```
### More Information
https://www.w3schools.com/css/css3_variables.asp
