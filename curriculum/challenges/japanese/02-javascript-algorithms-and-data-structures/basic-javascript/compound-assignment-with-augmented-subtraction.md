---
id: 56533eb9ac21ba0edf2244b0
title: 減算と代入の組み合わせ
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
dashedName: compound-assignment-with-augmented-subtraction
---

# --description--

`+=` 演算子と同様に、`-=` は変数から数を引きます。

```js
myVar = myVar - 5;
```

は `myVar` から `5` を引きます。 これは次のように書き換えることができます。

```js
myVar -= 5;
```

# --instructions--

`a`、`b`、`c` への各代入を、`-=` 演算子を使用するように変換してください。

# --hints--

`a` が `5` と等しくなるようにしてください。

```js
assert(a === 5);
```

`b` が `-6` と等しくなるようにしてください。

```js
assert(b === -6);
```

`c` が `2` と等しくなるようにしてください。

```js
assert(c === 2);
```

各変数で `-=` 演算子を使用してください。

```js
assert(code.match(/-=/g).length === 3);
```

指定のコメントより上にあるコードを変更しないでください。

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
