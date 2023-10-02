---
id: bd7993c9c69feddfaeb8bdef
title: JavaScript の配列を使用して 1 つの変数に複数の値を格納する
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

JavaScript の `array` 変数を使用すると、複数のデータを一か所に格納できます。

配列を宣言するには、開始の角括弧を記述して宣言を開始し、各項目の間にコンマを入れ、最後に終了の角括弧を記述します。

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

# --instructions--

文字列と数値の両方を (この順序で) 含むように、新しい配列 `myArray` を変更してください。

# --hints--

`myArray` は配列である必要があります。

```js
assert(typeof myArray == 'object');
```

`myArray` の最初の項目は文字列である必要があります。

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

`myArray` の 2 番目の項目は数値である必要があります。

```js
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myArray);
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = ["The Answer", 42];
```
