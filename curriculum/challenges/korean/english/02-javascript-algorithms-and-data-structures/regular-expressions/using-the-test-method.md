---
id: 587d7db3367417b2b2512b8e
title: Using the Test Method
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word `the` in the string `The dog chased the cat`, you could use the following regular expression: `/the/`. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the `.test()` method. The `.test()` method takes the regex, applies it to a string (which is placed inside the parentheses), and returns `true` or `false` if your pattern finds something or not.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

The `test` method here returns `true`.

# --instructions--

Apply the regex `myRegex` on the string `myString` using the `.test()` method.

# --hints--

You should use `.test()` to test the regex.

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

Your result should return `true`.

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```
