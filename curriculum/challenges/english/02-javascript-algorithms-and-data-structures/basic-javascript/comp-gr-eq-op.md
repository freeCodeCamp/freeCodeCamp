---
id: 6606cf6d22836816903282f5
title: Comparison with the Greater than or equal to Operator
challengeType: 1
dashedName: comp-gr-eq-op
---

# --description--

The greater than or equal to operator (`>=`) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns `true`. Otherwise, it returns `false`.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.
<h2>Hinglish</h2>
Greater than or equal to operator (`>=`) do numbers ke values ko compare karta hai. Agar left side ka number right side ke number se bada ya barabar hai, to ye `true` return karta hai. Warna, ye `false` return karta hai. Equality operator ki tarah, greater than or equal to operator bhi values ko compare karte waqt data types ko convert kar dega.

**Examples**

```js
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

# --instructions--

Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

Indicated lines mein greater than or equal to operator (`>=`) ko add karein taaki return statements sense banaye.

# --hints--

`testGreaterOrEqual(0)` should return the string `Less than 10`

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

`testGreaterOrEqual(9)` should return the string `Less than 10`

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

`testGreaterOrEqual(10)` should return the string `10 or Over`

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

`testGreaterOrEqual(11)` should return the string `10 or Over`

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

`testGreaterOrEqual(19)` should return the string `10 or Over`

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

`testGreaterOrEqual(100)` should return the string `20 or Over`

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

`testGreaterOrEqual(21)` should return the string `20 or Over`

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

You should use the `>=` operator at least twice

```js
assert(__helpers.removeJSComments(code).match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

# --solutions--

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```
