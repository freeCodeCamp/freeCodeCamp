---
id: 56533eb9ac21ba0edf2244aa
title: 初期化されていない変数について理解する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

JavaScript で変数が宣言されるとき、その初期値は `undefined` です。 `undefined` の変数に対して数値演算を行うと、結果は `NaN` になります。これは、<dfn>"Not a Number" (数字ではない)</dfn> という意味です。 `undefined` の変数を文字列と連結した場合には、`undefined` という<dfn>文字列</dfn>が得られます。

# --instructions--

3 つの変数 `a`、`b`、`c` をそれぞれ `5`、`10`、`"I am a"` で初期化し、これらが `undefined` にならないようにしてください。

# --hints--

`a` を定義し、最終的な値が `6` になるようにしてください。

```js
assert(typeof a === 'number' && a === 6);
```

`b` を定義し、最終的な値が `15` になるようにしてください。

```js
assert(typeof b === 'number' && b === 15);
```

`c` は `undefined` を含まず、最終的な値が文字列の `I am a String!` になるようにしてください。

```js
assert(!/undefined/.test(c) && c === 'I am a String!');
```

指定のコメントより下にあるコードを変更しないでください。

```js
assert(
  /a = a \+ 1;/.test(code) &&
    /b = b \+ 5;/.test(code) &&
    /c = c \+ " String!";/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

## --seed-contents--

```js
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

# --solutions--

```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```
