---
id: 6606ce425820df15df086618
title: Comparison with the strict Inequality Operator
challengeType: 1
dashedName: com-st-ineq-op
---

# --description--

The strict inequality operator (`!==`) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns `false` where strict equality would return `true` and *vice versa*. The strict inequality operator will not convert data types.
<h2>Hinglish</h2>
Strict inequality operator (`!==`) strict equality operator (`===`) ka logical opposite hai. Ye "Strictly Not Equal" ka matlab rakhta hai aur wahi jagah `false` return karta hai jahan strict equality `true` return karega aur ulta. Strict inequality operator data types ko convert nahi karega.

**Examples**

```js
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

# --instructions--

Add the strict inequality operator to the `if` statement so the function will return the string `Not Equal` when `val` is not strictly equal to `17`.

`if` statement mein strict inequality operator ko add karein taaki function `Not Equal` string return kare jab `val` strictly `17` ke barabar nahi ho.

# --hints--

`testStrictNotEqual(17)` should return the string `Equal`

```js
assert(testStrictNotEqual(17) === 'Equal');
```

`testStrictNotEqual("17")` should return the string `Not Equal`

```js
assert(testStrictNotEqual('17') === 'Not Equal');
```

`testStrictNotEqual(12)` should return the string `Not Equal`

```js
assert(testStrictNotEqual(12) === 'Not Equal');
```

`testStrictNotEqual("bob")` should return the string `Not Equal`

```js
assert(testStrictNotEqual('bob') === 'Not Equal');
```

You should use the `!==` operator

```js
assert(__helpers.removeJSComments(code).match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

# --solutions--

```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
```
