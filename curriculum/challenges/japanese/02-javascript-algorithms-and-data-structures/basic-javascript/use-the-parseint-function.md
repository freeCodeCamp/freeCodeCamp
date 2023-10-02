---
id: 587d7b7e367417b2b2512b23
title: parseInt 関数を使用する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83LSW'
forumTopicId: 301183
dashedName: use-the-parseint-function
---

# --description--

`parseInt()` 関数は文字列を解析し、整数を返します。 例:

```js
const a = parseInt("007");
```

上記の関数は文字列 `007` を整数 `7` に変換します。 文字列の最初の文字を数値に変換できない場合は `NaN` を返します。

# --instructions--

`convertToInteger` 関数で `parseInt()` を使用して、入力文字列 `str` を整数に変換し、それを返してください。

# --hints--

`convertToInteger` では `parseInt()` 関数を使用する必要があります。

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("56")` は数値を返す必要があります。

```js
assert(typeof convertToInteger('56') === 'number');
```

`convertToInteger("56")` は 56 を返す必要があります。

```js
assert(convertToInteger('56') === 56);
```

`convertToInteger("77")` は 77 を返す必要があります。

```js
assert(convertToInteger('77') === 77);
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

convertToInteger("56");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str);
}
```
