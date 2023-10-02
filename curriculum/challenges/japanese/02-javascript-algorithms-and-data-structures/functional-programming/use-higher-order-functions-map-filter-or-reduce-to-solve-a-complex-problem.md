---
id: 587d7b88367417b2b2512b45
title: '高階関数 map、filter、または reduce を使用して複雑な問題を解決する'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

ここまで、`map()`、`filter()`、`reduce()` のような高階関数を使用したいくつかのチャレンジに取り組んできました。これらを応用して、より複雑なチャレンジを解決してみましょう。

# --instructions--

`map()`、`filter()`、`reduce()` を自由に組み合わせて `squareList` 関数のコードを完成させてください。 この関数は、実数の配列が渡されたときに、正の整数*のみ* (小数は整数ではありません) についてその 2 乗を含む新しい配列を返す必要があります。 実数の配列の例は、`[-3, 4.8, 5, 3, -3.2]` などとなります。

**注:** 関数ではどのような `for` ループや `while` ループ、または `forEach()` 関数も使用してはいけません。

# --hints--

`squareList` は `function` である必要があります。

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

`for`、`while`、および `forEach` は使用しないでください。

```js
assert(!code.match(/for|while|forEach/g));
```

`map`、`filter`、または `reduce` を使用する必要があります。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\.(map|filter|reduce)\(/g)
);
```

この関数は `array` を返す必要があります。

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` は `[16, 1764, 36]` を返す必要があります。

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` は `[9, 100, 49]` を返す必要があります。

```js
assert.deepStrictEqual(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]), [
  9,
  100,
  49
]);
```

# --seed--

## --seed-contents--

```js
const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

# --solutions--

```js
const squareList = arr => {
  const positiveIntegers = arr.filter(num => {
    return num >= 0 && Number.isInteger(num);
  });
  const squaredIntegers = positiveIntegers.map(num => {
    return num ** 2;
  });
  return squaredIntegers;
};
```
