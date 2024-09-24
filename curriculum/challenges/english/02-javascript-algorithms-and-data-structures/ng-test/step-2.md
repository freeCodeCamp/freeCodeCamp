---
id: 66e97e9f2c770460daf650de
title: step 2
challengeType: 1
dashedName: step-2
---

# --description--

step 2 description.
When you declare a variable with the `var` keyword, it is declared globally, or locally if declared inside a function.

# --instructions--

step 2 instructions.

# --hints--

Test 1

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

# --seed--

## --seed-contents--

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

```

# --solutions--

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
 
  console.log('Function scope i is: ', i);
  return i;
}
```
