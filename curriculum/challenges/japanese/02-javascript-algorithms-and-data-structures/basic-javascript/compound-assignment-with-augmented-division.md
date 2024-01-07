---
id: 56533eb9ac21ba0edf2244b2
title: 除算と代入の組み合わせ
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvKT2'
forumTopicId: 16659
dashedName: compound-assignment-with-augmented-division
---

# --description--

`/=` 演算子は変数を他の数で割ります。

```js
myVar = myVar / 5;
```

は `myVar` を `5` で割ります。 これは次のように書き換えることができます。

```js
myVar /= 5;
```

# --instructions--

`a`、`b`、`c` への各代入を、`/=` 演算子を使用するように変換してください。

# --hints--

`a` が `4` と等しくなるようにしてください。

```js
assert(a === 4);
```

`b` が `27` と等しくなるようにしてください。

```js
assert(b === 27);
```

`c` が `3` と等しくなるようにしてください。

```js
assert(c === 3);
```

各変数で `/=` 演算子を使用してください。

```js
assert(code.match(/\/=/g).length === 3);
```

指定のコメントより上にあるコードを変更しないでください。

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
