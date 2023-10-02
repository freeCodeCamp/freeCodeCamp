---
id: 587d7b85367417b2b2512b3a
title: 関数を呼び出すときに間違った順序で渡された引数をキャッチする
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

関数の呼び出しについての話の続きです。次に監視すべきバグは、関数の引数が正しくない順序で渡されていないかどうかです。 たとえば、引数として配列と整数を期待している関数など、引数の型がそれぞれ異なる場合に、ラインタイムエラーを起こす可能性があります。 引数が同じ型であると (たとえばすべて整数) コードのロジックは意味をなさなくなります。 こうした問題を回避するために、必要なすべての引数を正しい順序で渡してください。

# --instructions--

関数 `raiseToPower` で、底 (base) の指数 (exponent) 乗を計算しようとしていますが、 残念ながら正しく呼び出されていません。`power` の値が期待どおり 8 になるようにコードを修正してください。

# --hints--

コードの変数 `power` を修正して、3 の 2 乗ではなく 2 の 3 乗になるようにする必要があります。

```js
assert(power == 8);
```

コードで `raiseToPower` 関数を呼び出すときに、引数を正しい順序で使用する必要があります。

```js
assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));
```

# --seed--

## --seed-contents--

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

# --solutions--

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```
