---
id: 6606cf95f70a7e16b9c46b1a
title: Comparison with the Less than or equal to Operator
challengeType: 1
dashedName: comp-less-eq-op
---

# --description--

The less than or equal to operator (`<=`) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns `true`. If the number on the left is greater than the number on the right, it returns `false`. Like the equality operator, the less than or equal to operator converts data types.
<h2>Hinglish</h2>
Less than or equal to operator (`<=`) do numbers ke values ko compare karta hai. Agar left side ka number right side ke number se chota ya barabar hai, to ye `true` return karta hai. Agar left side ka number right side ke number se bada hai, to ye `false` return karta hai. Equality operator ki tarah, less than or equal to operator bhi values ko compare karte waqt data types ko convert kar dega.
**Examples**

```js
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
```

# --instructions--

Add the less than or equal to operator to the indicated lines so that the return statements make sense.

Indicated lines mein less than or equal to operator `<=` ko add karein taaki return statements sense banaye.

# --hints--

`testLessOrEqual(0)` should return the string `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(0) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(11)` should return the string `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(11) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(12)` should return the string `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(12) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(23)` should return the string `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(23) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(24)` should return the string `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(24) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(25)` should return the string `More Than 24`

```js
assert(testLessOrEqual(25) === 'More Than 24');
```

`testLessOrEqual(55)` should return the string `More Than 24`

```js
assert(testLessOrEqual(55) === 'More Than 24');
```

You should use the `<=` operator at least twice

```js
assert(__helpers.removeJSComments(code).match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
```

# --solutions--

```js
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
```
