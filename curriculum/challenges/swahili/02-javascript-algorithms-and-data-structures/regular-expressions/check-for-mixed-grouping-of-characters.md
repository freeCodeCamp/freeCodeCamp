---
id: 5c3dda8b4d8df89bea71600f
title: Check For Mixed Grouping of Characters
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses `()`.

If you want to find either `Penguin` or `Pumpkin` in a string, you can use the following Regular Expression: `/P(engu|umpk)in/g`

Then check whether the desired string groups are in the test string by using the `test()` method.

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

The `test` method here would return `true`.

# --instructions--

Fix the regex so that it checks for the names of `Franklin Roosevelt` or `Eleanor Roosevelt` in a case sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against `myString` and either `true` or `false` is returned depending on whether the regex matches.

# --hints--

Your regex `myRegex` should return `true` for the string `Franklin D. Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

Your regex `myRegex` should return `true` for the string `Eleanor Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

Your regex `myRegex` should return `false` for the string `Franklin Rosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

Your regex `myRegex` should return `false` for the string `Frank Roosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

Your regex `myRegex` should return `false` for the string `FranklinRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('FranklinRoosevelt'));
```

Your regex `myRegex` should return `false` for the string `EleanorRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('EleanorRoosevelt'));
```

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
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

# --solutions--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
```
