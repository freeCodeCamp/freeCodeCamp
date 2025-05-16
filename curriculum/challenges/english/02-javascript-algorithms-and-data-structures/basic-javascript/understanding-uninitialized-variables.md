---
id: 56533eb9ac21ba0edf2244aa
title: Understanding Uninitialized Variables
challengeType: 1
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be `NaN` which means <dfn>"Not a Number"</dfn>. If you concatenate a string with an `undefined` variable, you will get a <dfn>string</dfn> of `undefined`.

# --instructions--

Initialize the three variables `a`, `b`, and `c` with `5`, `10`, and `"I am a"` respectively so that they will not be `undefined`.

# --hints--

`a` should be defined and have a final value of `6`.

```js
assert.isNumber(a); 
assert.strictEqual(a, 6); 
```

`b` should be defined and have a final value of `15`.

```js
assert.isNumber(b); 
assert.strictEqual(b, 15); 
```

`c` should not contain `undefined` and should have a final value of the string `I am a String!`

```js
assert.notMatch(c, /undefined/);
assert.strictEqual(c, 'I am a String!');
```

You should not change code below the specified comment.

```js
const commentFreeCode = __helpers.removeJSComments(code);
assert.match(commentFreeCode, /a = a \+ 1;/);
assert.match(commentFreeCode, /b = b \+ 5;/);
assert.match(commentFreeCode, /c = c \+ " String!";/);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

# --solutions--

```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```
