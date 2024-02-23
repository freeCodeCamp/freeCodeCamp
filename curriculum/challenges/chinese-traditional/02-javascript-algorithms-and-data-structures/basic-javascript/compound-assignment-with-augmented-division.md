---
id: 56533eb9ac21ba0edf2244b2
title: 複合賦值之 /=
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvKT2'
forumTopicId: 16659
dashedName: compound-assignment-with-augmented-division
---

# --description--

`/=` 操作符是讓變量與另一個數相除並賦值。

```js
myVar = myVar / 5;
```

將 `myVar` 除以 `5`。 等價於：

```js
myVar /= 5;
```

# --instructions--

使用 `/=` 操作符對 `a`，`b` 和 `c` 實現相除賦值操作。

# --hints--

`a` 應該等於 `4`。

```js
assert(a === 4);
```

`b` 應該等於 `27`。

```js
assert(b === 27);
```

`c` 應該等於`3`。

```js
assert(c === 3);
```

應該對每個變量使用 `/=` 操作符。

```js
assert(code.match(/\/=/g).length === 3);
```

不要修改註釋上面的代碼。

```js
assert(
  /let a = 48;/.test(code) &&
    /let b = 108;/.test(code) &&
    /let c = 33;/.test(code)
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
