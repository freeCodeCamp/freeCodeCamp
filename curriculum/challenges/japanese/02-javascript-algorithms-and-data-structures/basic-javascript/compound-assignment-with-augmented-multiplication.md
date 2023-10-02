---
id: 56533eb9ac21ba0edf2244b1
title: 乗算と代入の組み合わせ
challengeType: 1
videoUrl: 'https://scrimba.com/c/c83vrfa'
forumTopicId: 16662
dashedName: compound-assignment-with-augmented-multiplication
---

# --description--

`*=` 演算子は変数に数を掛けます。

```js
myVar = myVar * 5;
```

は `myVar` に `5` を掛けます。 これは次のように書き換えることができます。

```js
myVar *= 5;
```

# --instructions--

`a`、`b`、`c` への各代入を、`*=` 演算子を使用するように変換してください。

# --hints--

`a` が `25` と等しくなるようにしてください。

```js
assert(a === 25);
```

`b` が `36` と等しくなるようにしてください。

```js
assert(b === 36);
```

`c` が `46` と等しくなるようにしてください。

```js
assert(c === 46);
```

各変数で `*=` 演算子を使用してください。

```js
assert(code.match(/\*=/g).length === 3);
```

指定のコメントより上にあるコードを変更しないでください。

```js
assert(
  /let a = 5;/.test(code) &&
    /let b = 12;/.test(code) &&
    /let c = 4\.6;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;
```

# --solutions--

```js
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```
