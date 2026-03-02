---
id: 56533eb9ac21ba0edf2244be
title: Global Scope and Functions
challengeType: 1
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

In JavaScript, <dfn>scope</dfn> refers to the visibility of variables. Variables which are defined outside of a function block have <dfn>Global</dfn> scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the `let` or `const` keywords are automatically created in the `global` scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `let` or `const`.

# --instructions--

Using `let` or `const`, declare a global variable named `myGlobal` outside of any function. Initialize it with a value of `10`.

Inside function `fun1`, assign `5` to `oopsGlobal` ***without*** using the `var`, `let` or `const` keywords.

# --before-each--

```js
var oopsGlobal;
```

# --hints--

`myGlobal` should be defined

```js
assert(typeof myGlobal != 'undefined');
```

`myGlobal` should have a value of `10`

```js
assert(myGlobal === 10);
```

`myGlobal` should be declared using the `let` or `const` keywords

```js
assert(/(let|const)\s+myGlobal/.test(__helpers.removeJSComments(code)));
```

`oopsGlobal` should be a global variable and have a value of `5`

```js
fun1();
assert(typeof oopsGlobal != 'undefined');
```

# --seed--

## --seed-contents--

```js
// Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal here

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

# --solutions--

```js
const myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
