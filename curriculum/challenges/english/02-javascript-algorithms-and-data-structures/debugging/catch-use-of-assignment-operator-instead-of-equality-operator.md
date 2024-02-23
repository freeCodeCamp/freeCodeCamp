---
id: 587d7b85367417b2b2512b38
title: Catch Use of Assignment Operator Instead of Equality Operator
challengeType: 1
forumTopicId: 301191
dashedName: catch-use-of-assignment-operator-instead-of-equality-operator
---

# --description--

Branching programs, i.e. ones that do different things if certain conditions are met, rely on `if`, `else if`, and `else` statements in JavaScript. The condition sometimes takes the form of testing whether a result is equal to a value.

This logic is spoken (in English, at least) as "if x equals y, then ..." which can literally translate into code using the `=`, or assignment operator. This leads to unexpected control flow in your program.

As covered in previous challenges, the assignment operator (`=`) in JavaScript assigns a value to a variable name. And the `==` and `===` operators check for equality (the triple `===` tests for strict equality, meaning both value and type are the same).

The code below assigns `x` to be 2, which evaluates as `true`. Almost every value on its own in JavaScript evaluates to `true`, except what are known as the "falsy" values: `false`, `0`, `""` (an empty string), `NaN`, `undefined`, and `null`.

```js
let x = 1;
let y = 2;
if (x = y) {

} else {

}
```

In this example, the code block within the `if` statement will run for any value of `y`, unless `y` is falsy. The `else` block, which we expect to run here, will not actually run.

# --instructions--

Fix the condition so the program runs the right branch, and the appropriate value is assigned to `result`.

# --hints--

Your code should fix the condition so it checks for equality, instead of using assignment.

```js
assert(result == 'Not equal!');
```

The condition should use either `==` or `===` to test for equality.

```js
assert(code.match(/x\s*?===?\s*?y/g));
```

# --seed--

## --seed-contents--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```

# --solutions--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```
