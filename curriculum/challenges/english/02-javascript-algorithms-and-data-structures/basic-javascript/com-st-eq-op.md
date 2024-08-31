---
id: 6606cdad8576d0154d7d233b
title: Comparison with the strict Equality Operator
challengeType: 1
dashedName: com-st-eq-op
---

# --description--

Strict equality (`===`) is the counterpart to the equality operator (`==`). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
<h2>Hinglish</h2>
Strict equality operator (`===`) equality operator (`==`) ka counterpart hai. Lekin, equality operator ki tarah, jo dono values ko ek common type mein convert karne ki koshish karta hai, strict equality operator type conversion nahi karta.

Agar compare kiye ja rahe values alag type ke hain, to wo unequal consider ki jati hain, aur strict equality operator false return karega.

**Examples**

```js
3 ===  3  // true
3 === '3' // false
```

In the second example, `3` is a `Number` type and `'3'` is a `String` type.

# --instructions--

Use the strict equality operator in the `if` statement so the function will return the string `Equal` when `val` is strictly equal to `7`.

`if` statement mein strict equality operator ka istemal karein taaki function `Equal` string return kare jab `val` strictly `7` ke barabar ho.

# --hints--

`testStrict(10)` should return the string `Not Equal`

```js
assert(testStrict(10) === 'Not Equal');
```

`testStrict(7)` should return the string `Equal`

```js
assert(testStrict(7) === 'Equal');
```

`testStrict("7")` should return the string `Not Equal`

```js
assert(testStrict('7') === 'Not Equal');
```

You should use the `===` operator.

```js
assert(__helpers.removeJSComments(code).match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
```

# --solutions--

```js
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
```
