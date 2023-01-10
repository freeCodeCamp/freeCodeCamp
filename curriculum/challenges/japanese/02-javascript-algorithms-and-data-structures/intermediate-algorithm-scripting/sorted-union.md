---
id: a105e963526e7de52b219be9
title: 並べて結合する
challengeType: 1
forumTopicId: 16077
dashedName: sorted-union
---

# --description--

2 つ以上の配列を受け取り、元の指定された配列の順序で新しい一意の値の配列を返す関数を作成してください。

つまり、すべての配列から得られるすべての値を元の順序で含める必要がありますが、最終的な配列には重複がないようにする必要があります。

一意の数は元の順序で並べる必要がありますが、最終的な配列は数値順でソートしません。

例については、アサーションテストを確認してください。

# --hints--

`uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` は `[1, 3, 2, 5, 4]` を返す必要があります。

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

`uniteUnique([1, 2, 3], [5, 2, 1])` は `[1, 2, 3, 5]` を返す必要があります。

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
```

`uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` は `[1, 2, 3, 5, 4, 6, 7, 8]` を返す必要があります。

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [
  1,
  2,
  3,
  5,
  4,
  6,
  7,
  8
]);
```

`uniteUnique([1, 3, 2], [5, 4], [5, 6])` は `[1, 3, 2, 5, 4, 6]` を返す必要があります。

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 4], [5, 6]), [1, 3, 2, 5, 4, 6]);
```

`uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])` は `[1, 3, 2, 5, 4]` を返す必要があります。

```js
assert.deepEqual(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

# --seed--

## --seed-contents--

```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

# --solutions--

```js
function uniteUnique(arr) {
  return [].slice.call(arguments).reduce(function(a, b) {
    return [].concat(
      a, 
      b.filter(function(e, currentIndex) {
        return b.indexOf(e) === currentIndex && a.indexOf(e) === -1;
      }));
  }, []);
}
```
