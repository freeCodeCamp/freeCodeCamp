---
id: 5a23c84252665b21eecc8046
title: 對稱差異
challengeType: 1
forumTopicId: 16086
dashedName: symmetric-difference
---

# --description--

Given two sets *A* and *B*, compute $(A \\setminus B) \\cup (B \\setminus A).$ That is, enumerate the items that are in *A* or *B* but not both. This set is called the symmetric difference of *A* and *B*. In other words: $(A \\cup B) \\setminus (A \\cap B)$ (the set of items that are in at least one of *A* or *B* minus the set of items that are in both *A* and *B*).

例如：

對於集 `A = [1, 2, 3]`, 和 `B = [1, 3, 4]`, *A* 和 *B* 的對稱差爲 `[2, 4]`。

# --instructions--

編寫一個函數，將兩個數組作爲參數並返回對稱差。 在返回之前對結果數組進行排序。

# --hints--

`symmetricDifference` 應該是一個函數。

```js
assert(typeof symmetricDifference == 'function');
```

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` 應該返回一個數組。

```js
assert(
  Array.isArray(
    symmetricDifference(
      ['John', 'Bob', 'Mary', 'Serena'],
      ['Jim', 'Mary', 'John', 'Bob']
    )
  )
);
```

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` 應該返回 `["Jim", "Serena"]`。

```js
assert.deepEqual(
  symmetricDifference(
    ['John', 'Bob', 'Mary', 'Serena'],
    ['Jim', 'Mary', 'John', 'Bob']
  ),
  ['Jim', 'Serena']
);
```

`symmetricDifference([1, 2, 3], [3, 4])` 應該返回 `[1, 2, 4]`。

```js
assert.deepEqual(symmetricDifference([1, 2, 3], [3, 4]), [1, 2, 4]);
```

`symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7])` 應該返回 `[1, 2, 5, 7, 8]`。

```js
assert.deepEqual(symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7]), [
  1,
  2,
  5,
  7,
  8
]);
```

`symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9])` 應該返回 `[2, 4, 9]`。

```js
assert.deepEqual(
  symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9]),
  [2, 4, 9]
);
```

`symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9])` 應該返回 `[1, 3, 4, 8]`。

```js
assert.deepEqual(symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9]), [
  1,
  3,
  4,
  8
]);
```

# --seed--

## --seed-contents--

```js
function symmetricDifference(A, B) {

}
```

# --solutions--

```js
function symmetricDifference(A, B) {
  function relative_complement(A, B) {
    return A.filter(function(elem) {
      return B.indexOf(elem) == -1;
    });
  }

  function unique(ary) {
    var u = ary.concat().sort();
    for (var i = 1; i < u.length; ) {
      if (u[i - 1] === u[i]) u.splice(i, 1);
      else i++;
    }
    return u;
  }

  return unique(
    relative_complement(A, B).concat(relative_complement(B, A))
  ).sort();
}
```
