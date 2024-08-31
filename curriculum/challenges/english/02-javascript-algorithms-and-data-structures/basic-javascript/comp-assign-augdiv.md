---
id: 6606cd2298a89d14e243ce13
title: Compound assignment with Augmented Division
challengeType: 1
dashedName: comp-assign-augdiv
---

# --description--

The `/=` operator divides a variable by another number.

```js
myVar = myVar / 5;
```

Will divide `myVar` by `5`. This can be rewritten as:

```js
myVar /= 5;
```

<h2>Hinglish</h2>

`/=` operator ek variable ko doosre number se divide karta hai.

```js
myVar = myVar / 5;
```

`myVar` ko `5` se divide karega. Isko dobara likha ja sakta hai:

```js
myVar /= 5;
```

# --instructions--

Convert the assignments for `a`, `b`, and `c` to use the `/=` operator.

`a`, `b`, aur `c` ke liye assignments ko `/=` operator ka istemal karne ke liye convert karein.

# --hints--

`a` should equal `4`.

```js
assert(a === 4);
```

`b` should equal `27`.

```js
assert(b === 27);
```

`c` should equal `3`.

```js
assert(c === 3);
```

You should use the `/=` operator for each variable.

```js
assert(__helpers.removeJSComments(code).match(/\/=/g).length === 3);
```

You should not modify the code above the specified comment.

```js
assert(
  /let a = 48;/.test(__helpers.removeJSComments(code)) &&
    /let b = 108;/.test(__helpers.removeJSComments(code)) &&
    /let c = 33;/.test(__helpers.removeJSComments(code))
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a = a / 12;
b = b / 4;
c = c / 11;
```

# --solutions--

```js
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;
```
