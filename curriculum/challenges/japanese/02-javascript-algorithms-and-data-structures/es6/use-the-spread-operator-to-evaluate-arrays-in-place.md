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

`...arr` は、分割された配列を返します。 In other words, it spreads the array. ただし、スプレッド演算子が有効なのは「インプレース」のみです。つまり、関数の引数や配列リテラルなどの中でのみ動作します。 For example:

```js
const spreaded = [...arr];
```

However, the following code will not work:

```js
const spreaded = ...arr;
```

# --instructions--

Copy all contents of `arr1` into another array `arr2` using the spread operator.

# --hints--

`arr2` should be correct copy of `arr1`.

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

`...` spread operator should be used to duplicate `arr1`.

```js
assert(__helpers.removeJSComments(code).match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr2` should remain unchanged when `arr1` is changed.

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
