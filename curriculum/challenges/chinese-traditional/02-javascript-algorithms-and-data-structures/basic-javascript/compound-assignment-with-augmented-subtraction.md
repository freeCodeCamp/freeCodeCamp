---
id: 56533eb9ac21ba0edf2244b0
title: 複合賦值之 -=
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
dashedName: compound-assignment-with-augmented-subtraction
---

# --description--

與 `+=` 操作符類似，`-=` 操作符用來對一個變量進行減法賦值操作。

```js
myVar = myVar - 5;
```

將從 `myVar` 中減去 `5`。 等價於：

```js
myVar -= 5;
```

# --instructions--

使用 `-=` 操作符對 `a`、`b` 和 `c` 實現相減賦值操作。

# --hints--

`a` 應該等於 `5`。

```js
assert(a === 5);
```

`b` 應該等於 `-6`。

```js
assert(b === -6);
```

`c` 應該等於 `2`。

```js
assert(c === 2);
```

應該對每個變量使用 `-=` 操作符。

```js
assert(code.match(/-=/g).length === 3);
```

不要修改註釋上面的代碼。

```js
assert(
  /let a = 11;/.test(code) && /let b = 9;/.test(code) && /let c = 3;/.test(code)
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
