---
id: a105e963526e7de52b219be9
title: 集合排序
challengeType: 1
forumTopicId: 16077
dashedName: sorted-union
---

# --description--

編寫一個帶有兩個或更多數組的函數，並按原始提供的數組的順序返回一個新的唯一值數組。

換句話說，所有數組中出現的所有值都應按其原始順序包括在內，但最終數組中不得重複。

去重後的數字應按其出現在參數中的原始順序排序，最終數組不應按數字大小進行排序。

如有疑問，請先瀏覽下方的測試用例。

# --hints--

`uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` 應返回 `[1, 3, 2, 5, 4]`。

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

`uniteUnique([1, 2, 3], [5, 2, 1])` 應返回 `[1, 2, 3, 5]`。

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
```

`uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` 應返回 `[1, 2, 3, 5, 4, 6, 7, 8]`。

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

`uniteUnique([1, 3, 2], [5, 4], [5, 6])` 應該返回 `[1, 3, 2, 5, 4, 6]`。

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 4], [5, 6]), [1, 3, 2, 5, 4, 6]);
```

`uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])` 應該返回 `[1, 3, 2, 5, 4]`。

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
