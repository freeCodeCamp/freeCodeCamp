---
id: 56533eb9ac21ba0edf2244af
title: Compound Assignment With Augmented Addition
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDR6LCb'
forumTopicId: 16661
dashedName: compound-assignment-with-augmented-addition
---

# --description--

In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

```js
myVar = myVar + 5;
```

to add `5` to `myVar`. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the `+=` operator.

```js
var myVar = 1;
myVar += 5;
console.log(myVar);
```

`6` would be displayed in the console.

# --instructions--

Convert the assignments for `a`, `b`, and `c` to use the `+=` operator.

# --hints--

`a` should equal `15`.

```js
assert(a === 15);
```

`b` should equal `26`.

```js
assert(b === 26);
```

`c` should equal `19`.

```js
assert(c === 19);
```

You should use the `+=` operator for each variable.

```js
assert(code.match(/\+=/g).length === 3);
```

You should not modify the code above the specified comment.

```js
assert(
  /var a = 3;/.test(code) &&
    /var b = 17;/.test(code) &&
    /var c = 12;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

# --solutions--

```js
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;
```
