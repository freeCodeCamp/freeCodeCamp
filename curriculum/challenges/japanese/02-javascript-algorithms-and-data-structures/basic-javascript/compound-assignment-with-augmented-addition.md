---
id: 56533eb9ac21ba0edf2244af
title: 加算と代入の組み合わせ
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDR6LCb'
forumTopicId: 16661
dashedName: compound-assignment-with-augmented-addition
---

# --description--

プログラミングでは、代入を使用して変数の中身を変更する操作がよく行われます。 最初に等号の右辺のすべてが評価されることを忘れないようにしましょう。

```js
myVar = myVar + 5;
```

と記述すると、`myVar` に `5` を足すことができます。 このような操作は一般的なパターンなので、算術演算と代入の両方を一度に行う演算子があります。

その一つが `+=` 演算子です。

```js
let myVar = 1;
myVar += 5;
console.log(myVar);
```

上の例では `6` がコンソールに表示されます。

# --instructions--

`a`、`b`、`c` への各代入を、`+=` 演算子を使用するように変換してください。

# --hints--

`a` が `15` と等しくなるようにしてください。

```js
assert(a === 15);
```

`b` が `26` と等しくなるようにしてください。

```js
assert(b === 26);
```

`c` が `19` と等しくなるようにしてください。

```js
assert(c === 19);
```

各変数で `+=` 演算子を使用してください。

```js
assert(code.match(/\+=/g).length === 3);
```

指定のコメントより上にあるコードを変更しないでください。

```js
assert(
  /let a = 3;/.test(code) &&
    /let b = 17;/.test(code) &&
    /let c = 12;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

# --solutions--

```js
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;
```
