---
title: Structure of CSS
---
## CSS Structure
A CSS rule follows this basic structure:
```CSS
selector {
  property: value;
  property: value;
}
```
Everything inside the curly brackets styles whatever is selected by the [selector]. Inside a CSS rules is a set of [property]/value pairs.

You can have different selectors seperated with comas:
```CSS
selector1, 
selector2 {
  property: value;
}
```

Multiple CSS rules can be put in one CSS file - here is an example:
```CSS
h1 {
  color: red;
}

div {
  text-align: center;
  color: blue;
}

img {
  margin-left: 2px;
  margin-top: 100px;
}
```

#### More Information:
- [CSS Syntax on Code The Web](https://codetheweb.blog/2017/11/11/css-syntax/)
- More on [CSS selectors][selector]
- More on [CSS properties][property]


[selector]: https://guide.freecodecamp.org/css/selectors
[property]: https://guide.freecodecamp.org/css/properties
