---
id: 587d7b7e367417b2b2512b22
title: 基数を設定して parseInt 関数を使用する
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6K4Kh3'
forumTopicId: 301182
dashedName: use-the-parseint-function-with-a-radix
---

# --description--

`parseInt()` 関数は文字列を解析し、整数を返します。 この関数は 2 番目の引数として、文字列の基数 radix を受け取ります。 基数には 2 から 36 までの整数を設定できます。

関数呼び出しは次のようになります。

```js
parseInt(string, radix);
```

例を次に示します。

```js
const a = parseInt("11", 2);
```

radix 変数により、基数が 2 であり、`11` が 2 進数であることが示されます。 この例では、文字列 `11` は整数 `3` に変換されます。

# --instructions--

`convertToInteger` 関数で `parseInt()` を使用して、2 進数を整数に変換し、それを返してください。

# --hints--

`convertToInteger` では `parseInt()` 関数を使用する必要があります。

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("10011")` は数値を返す必要があります。

```js
assert(typeof convertToInteger('10011') === 'number');
```

`convertToInteger("10011")` は 19 を返す必要があります。

```js
assert(convertToInteger('10011') === 19);
```

`convertToInteger("111001")` は 57 を返す必要があります。

```js
assert(convertToInteger('111001') === 57);
```

`convertToInteger("JamesBond")` は `NaN` を返す必要があります。

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("10011");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
```
