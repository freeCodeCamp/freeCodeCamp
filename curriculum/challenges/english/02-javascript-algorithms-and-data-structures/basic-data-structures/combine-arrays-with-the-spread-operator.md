---
id: 587d7b7b367417b2b2512b17
title: Combine Arrays with the Spread Operator
challengeType: 1
forumTopicId: 301156
dashedName: combine-arrays-with-the-spread-operator
---

# --description--

Another huge advantage of the <dfn>spread</dfn> operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```

`thatArray` would have the value `['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']`.

Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.

# --instructions--

We have defined a function `spreadOut` that returns the variable `sentence`. Modify the function using the <dfn>spread</dfn> operator so that it returns the array `['learning', 'to', 'code', 'is', 'fun']`.

# --hints--

`spreadOut` should return `["learning", "to", "code", "is", "fun"]`

```js
assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
```

The `spreadOut` function should utilize spread syntax

```js
assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);
```

# --seed--

## --seed-contents--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());
```

# --solutions--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
```
