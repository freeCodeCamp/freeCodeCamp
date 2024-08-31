---
id: 6606ccc83c029d145d2a29fd
title: Compound assignment with Augmented Subtraction
challengeType: 1
dashedName: comp-assign-sub
---

# --description--

Like the `+=` operator, `-=` subtracts a number from a variable.

```js
myVar = myVar - 5;
```

will subtract `5` from `myVar`. This can be rewritten as:

```js
myVar -= 5;
```

<h2>Hinglish</h2>

`-=` operator, `+=` operator ki tarah, ek variable se ek number ko subtract karta hai.

```js
myVar = myVar - 5;
```

`myVar` se `5` subtract karega. Isko dobara likha ja sakta hai:

```js
myVar -= 5;
```

# --instructions--

Convert the assignments for `a`, `b`, and `c` to use the `-=` operator.

`a`, `b`, aur `c` ke liye assignments ko `-=` operator ka istemal karne ke liye convert karein.

# --hints--

`a` should equal `5`.

```js
assert(a === 5);
```

`b` should equal `-6`.

```js
assert(b === -6);
```

`c` should equal `2`.

```js
assert(c === 2);
```

You should use the `-=` operator for each variable.

```js
assert(__helpers.removeJSComments(code).match(/-=/g).length === 3);
```

You should not modify the code above the specified comment.

```js
assert(
  /let a = 11;/.test(__helpers.removeJSComments(code)) && /let b = 9;/.test(__helpers.removeJSComments(code)) && /let c = 3;/.test(__helpers.removeJSComments(code))
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

# --solutions--

```js
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;
```
