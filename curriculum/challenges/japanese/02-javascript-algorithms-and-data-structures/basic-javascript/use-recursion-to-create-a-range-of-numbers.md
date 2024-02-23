---
id: 5cc0bd7a49b71cb96132e54c
title: 再帰関数を利用して指定範囲の数値配列を作成する
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

前回のチャレンジに引き続き、再帰関数を作成して課題を解決していきます。

# --instructions--

2 つのパラメータを持つ `rangeOfNumbers` という名前の関数を定義しました。 この関数は、`startNum` パラメーターで表される数値で始まり、`endNum` パラメーターで表される数値で終わる、整数の配列を返す必要があります。 開始の数値は常に終了の数値以下になります。 関数では自分自身を呼び出す再帰を利用する必要があり、またどのような種類のループも使用してはいけません。 `startNum` と `endNum` の両方が同じ値である場合にも、関数が機能する必要があります。

# --hints--

この関数は配列を返す必要があります。

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

このコードには、どのようなループ構文 (`for`、`while`、または `forEach`、`map`、`filter`、`reduce` のような高階関数) も使用しないでください。

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

`rangeOfNumbers` では再帰 (自分自身の呼び出し) を利用して、この課題を解決する必要があります。

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

`rangeOfNumbers(1, 5)` は `[1, 2, 3, 4, 5]` を返す必要があります。

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

`rangeOfNumbers(6, 9)` は `[6, 7, 8, 9]` を返す必要があります。

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

`rangeOfNumbers(4, 4)` は `[4]` を返す必要があります。

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

配列をキャッシュするためにグローバル変数を使用しないでください。

```js
rangeOfNumbers(1, 3)
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

# --seed--

## --seed-contents--

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

# --solutions--

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
