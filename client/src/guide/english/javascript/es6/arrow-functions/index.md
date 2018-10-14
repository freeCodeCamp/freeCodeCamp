---
title: Arrow Functions
---

## Arrow functions

Functions in ES6 have changed a bit. I mean the syntax.

```javascript
// Old Syntax
function oldOne() {
 console.log("Hello World..!");
}

// New Syntax
var newOne = () => {
 console.log("Hello World..!");
}
```

The new syntax may be confusing a little bit. But I will try to explain the syntax.
There are two parts of the syntax.

1. var newOne = ()
2. => {}

The first part is just declaring a variable and assigning the function (i.e) () to it. It just says the variable is actually a function.

Then the second part is declaring the body part of the function. The arrow part with the curly braces defines the body part.

Another example with parameters:

```javascript
let NewOneWithParameters = (a, b) => {
 console.log(a+b); // 30
}
NewOneWithParameters(10, 20);
```

Parentheses are optional when there's only one parameter name:

```javascript
let newOneWithOneParam = a => {
 console.log(a);
}
```

An incredible advantage of the arrows function is that you can not rebind an arrow function. It will always be called with the context in which it was defined. Just use a normal function.
```javascript
// Old Syntax
axios.get(url).then(function(response) {
  this.data = response.data;
}).bind(this);

// New Syntax
axios.get(url).then(response => {
  this.data = response.data;
});

```



I don’t think I need to give an explanation for this. It's straightforward.
