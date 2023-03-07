---
id: 5f490b3bd7fa89604fa0bdee
title: Example pyodide
challengeType: 16
isHidden: false
dashedName: example-pyodide
---

# --description--

An example of a challenge using pyodide to run python code in the browser


# --instructions--

Instructions about what exactly needs to be done.

# --hints--


`a` should have a value of 15.

```js
assert(self.pyodide.pyimport('a') === 15);
```

`b` should have a value of 16.

```js
assert(self.pyodide.pyimport('b') === 16);
```

# --seed--

## --seed-contents--

```js
// Setup
a = sum([1,2,3,4,5])
b = 13

// Only change code below this line

```

# --solutions--

```js
var a;
var b = 2;
a = 7;
b = a;
```

