---
id: 56533eb9ac21ba0edf2244b3
title: 摂氏から華氏への変換
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

摂氏から華氏に変換する公式は、摂氏温度 × `9/5` + `32` です。

摂氏の温度を表す変数 `celsius` が与えられます。 すでに定義されている変数 `fahrenheit`を使用し、摂氏に相当する華氏温度を代入してください。 上記の公式を使用して、摂氏温度を華氏温度に変換してください。

# --hints--

`convertCtoF(0)` は数値を返す必要があります。

```js
assert(typeof convertCtoF(0) === 'number');
```

`convertCtoF(-30)` は `-22` の値を返す必要があります。

```js
assert(convertCtoF(-30) === -22);
```

`convertCtoF(-10)` は `14` の値を返す必要があります。

```js
assert(convertCtoF(-10) === 14);
```

`convertCtoF(0)` は `32` の値を返す必要があります。

```js
assert(convertCtoF(0) === 32);
```

`convertCtoF(20)` は `68` の値を返す必要があります。

```js
assert(convertCtoF(20) === 68);
```

`convertCtoF(30)` は `86` の値を返す必要があります。

```js
assert(convertCtoF(30) === 86);
```

# --seed--

## --seed-contents--

```js
function convertCtoF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertCtoF(30);
```

# --solutions--

```js
function convertCtoF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertCtoF(30);
```
