---
id: 587d7b8c367417b2b2512b57
title: Use * to Import Everything from a File
challengeType: 1
forumTopicId: 301210
dashedName: use--to-import-everything-from-a-file
---

# --description--

Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the `import * as` syntax. Here's an example where the contents of a file named `math_functions.js` are imported into a file in the same directory:

```js
import * as myMathModule from "./math_functions.js";
```

The above `import` statement will create an object called `myMathModule`. This is just a variable name, you can name it anything. The object will contain all of the exports from `math_functions.js` in it, so you can access the functions like you would any other object property. Here's how you can use the `add` and `subtract` functions that were imported:

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

# --instructions--

The code in this file requires the contents of the file: `string_functions.js`, that is in the same directory as the current file. Use the `import * as` syntax to import everything from the file into an object called `stringFunctions`.

# --hints--

Your code should properly use `import * as` syntax.

```js
assert(
  code.match(
    /import\s*\*\s*as\s+stringFunctions\s+from\s*('|")\.\/string_functions\.js\1/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

# --solutions--

```js
import * as stringFunctions from "./string_functions.js";

// add code above this line
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```
