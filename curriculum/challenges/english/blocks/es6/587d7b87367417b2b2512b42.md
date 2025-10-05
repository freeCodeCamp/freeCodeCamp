---
id: 587d7b87367417b2b2512b42
title: Mutate an Array Declared with const
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

If you are unfamiliar with `const`, check out <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword" target="_blank" rel="noopener noreferrer nofollow">this challenge about the <code>const</code> keyword</a>.

The `const` declaration has many use cases in modern JavaScript.

Some developers prefer to assign all their variables using `const` by default, unless they know they will need to reassign the value. Only in that case, they use `let`.

However, it is important to understand that objects (including arrays and functions) assigned to a variable using `const` are still mutable. Using the `const` declaration only prevents reassignment of the variable identifier.

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` will result in an error. After commenting out that line, the `console.log` will display the value `[5, 6, 45]`.

As you can see, you can mutate the object `[5, 6, 7]` itself and the variable `s` will still point to the altered array `[5, 6, 45]`. Like all arrays, the array elements in `s` are mutable, but because `const` was used, you cannot use the variable identifier `s` to point to a different array using the assignment operator.

# --instructions--

An array is declared as `const s = [5, 7, 2]`. Change the array to `[2, 5, 7]` using various element assignments.

# --hints--

You should not replace `const` keyword.

```js
assert(__helpers.removeJSComments(code).match(/const/g));
```

`s` should be a constant variable (by using `const`).

```js
assert(__helpers.removeJSComments(code).match(/const\s+s/g));
```

You should not change the original array declaration.

```js
assert(__helpers.removeJSComments(code).match(
/const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g
));
```

`s` should be equal to `[2, 5, 7]`.

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --seed--

## --seed-contents--

```js
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
```

# --solutions--

```js
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```
