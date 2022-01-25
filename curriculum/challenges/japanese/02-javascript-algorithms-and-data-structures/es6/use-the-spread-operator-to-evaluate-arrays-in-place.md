---
id: 587d7b89367417b2b2512b48
title: スプレッド演算子を使用して配列をインプレースで評価する
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 では<dfn>スプレッド演算子</dfn>が導入されています。この演算子を使用すると、複数のパラメーターまたは要素が要求される場所の中で配列やその他の式を展開することができます。

次の ES5 コードでは、配列の最大値を計算するために `apply()` を使用しています。

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` の値は `89` になります。

`Math.max(arr)` は `NaN` を返すため、`Math.max.apply(null, arr)` を使用する必要がありました。 `Math.max()` は、配列ではなくコンマ区切りの引数を要求します。 スプレッド演算子を使用すれば、この構文が読みやすくなり、管理しやすくなります。

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` の値は `89` になります。

`...arr` は、分割された配列を返します。 つまり、スプレッド演算子によって配列が*展開*されます。 ただし、スプレッド演算子が有効なのは「インプレース」のみです。つまり、関数の引数や配列リテラルなどの中でのみ動作します。 次のコードは有効ではありません。

```js
const spreaded = ...arr;
```

# --instructions--

スプレッド演算子を使用して、 `arr1` のすべての内容を別の配列 `arr2` にコピーしてください。

# --hints--

`arr2` は `arr1` の正確なコピーである必要があります。

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

`...` スプレッド演算子を使用して `arr1` を複製する必要があります。

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr1` が変更されても `arr2` は変わりません。

```js
assert((arr1, arr2) => {
  arr1.push('JUN');
  return arr2.length < arr1.length;
});
```

# --seed--

## --seed-contents--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```
