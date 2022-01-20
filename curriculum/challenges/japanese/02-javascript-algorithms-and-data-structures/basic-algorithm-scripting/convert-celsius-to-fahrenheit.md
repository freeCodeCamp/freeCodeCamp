---
id: 56533eb9ac21ba0edf2244b3
title: 摂氏から華氏への変換
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

摂氏から華氏に変換するアルゴリズムは、摂氏温度 × `9/5` + `32` です。

摂氏の温度を表す変数 `celsius` が与えられます。 すでに定義されている変数 `fahrenheit`を使用し、摂氏に相当する華氏温度を代入してください。 上記のアルゴリズムを使用して、摂氏温度を華氏温度に変換してください。

# --hints--

`convertToF(0)` は数値を返す必要があります。

```js
assert(typeof convertToF(0) === 'number');
```

`convertToF(-30)` は `-22` の値を返す必要があります。

```js
assert(convertToF(-30) === -22);
```

`convertToF(-10)` は `14` の値を返す必要があります。

```js
assert(convertToF(-10) === 14);
```

`convertToF(0)` は `32` の値を返す必要があります。

```js
assert(convertToF(0) === 32);
```

`convertToF(20)` は `68` の値を返す必要があります。

```js
assert(convertToF(20) === 68);
```

`convertToF(30)` は `86` の値を返す必要があります。

```js
assert(convertToF(30) === 86);
```

# --seed--

## --seed-contents--

```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);
```

# --solutions--

```js
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;

  return fahrenheit;
}

convertToF(30);
```
