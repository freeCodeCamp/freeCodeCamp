---
id: 6606ca2b9b8fc711a74602f5
title: Initializing Variables with the assignment operator
challengeType: 1
dashedName: initialize-variables

---

# --description--

It is common to <dfn>initialize</dfn> a variable to an initial value in the same line as it is declared.

```js
var myVar = 0;
```

Creates a new variable called `myVar` and assigns it an initial value of `0`.

<h2>Hinglish</h2>

Yeh aam baat hai ki ek variable ko shuruaati maan mein initialize karna ussi line mein hota hai jahan ye declare kiya jaata hai.

```js
var myVar = 0;
```

`myVar` naam se ek naya variable banata hai aur usse shuruaati maan `0` assign kiya jaata hai.

# --instructions--

Define a variable `a` with `var` and initialize it to a value of `9`.

# --hints--

You should initialize `a` to a value of `9`.

```js
assert(/var\s+a\s*=\s*9(\s*;?\s*)$/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
var a = 9;
```
