---
id: 587d7b87367417b2b2512b41
title: Declare a Read-Only Variable with the const Keyword
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

The keyword `let` is not the only new way to declare variables. In ES6, you can also declare variables using the `const` keyword.

`const` has all the awesome features that `let` has, with the added bonus that variables declared using `const` are read-only. They are a constant value, which means that once a variable is assigned with `const`, it cannot be reassigned.

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

The console will display an error due to reassigning the value of `FAV_PET`.

As you can see, trying to reassign a variable declared with `const` will throw an error. You should always name variables you don't want to reassign using the `const` keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

**Note:** It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will see an example of a lowercase variable identifier being used for an array.

# --instructions--

Change the code so that all variables are declared using `let` or `const`. Use `let` when you want the variable to change, and `const` when you want the variable to remain constant. Also, rename variables declared with `const` to conform to common practices, meaning constants should be in all caps.

# --hints--

`var` should not exist in your code.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`SENTENCE` should be a constant variable declared with `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/(const SENTENCE)/g));
```

`i` should be declared with `let`.

```js
(getUserInput) => assert(getUserInput('index').match(/(let i)/g));
```

`console.log` should be changed to print the `SENTENCE` variable.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g));
```

# --seed--

## --seed-contents--

```js
function printManyTimes(str) {

  // Only change code below this line

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
```

# --solutions--

```js
function printManyTimes(str) {

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");
```
