---
title: Template Literals
---

Template Literals are an ES6 feature utilizing the backtick character to define a string value. They give the programmer the ability to combine variables and strings without concatenation, thus making the code cleaner.

### The basic syntax

Below is a basic example of an template literal:

```javascript
// ES5 syntax
var es5String = "ES5 String"
var es5StringWithVariable = "ES5 String with a " + variable + "..."

// ES6 template literal
const tempLit = `Simple string`

// ES6 template literal with variable
let tempLitWithVariables = `Simple string with a ${variable}...`

// ES6 multiple line template literal 
const multiLineString = `
  Multiple 
  Lines 
  Allowed
`
```


