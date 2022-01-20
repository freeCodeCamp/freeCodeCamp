---
id: 5a23c84252665b21eecc8046
title: 対称差
challengeType: 5
forumTopicId: 16086
dashedName: symmetric-difference
---

# --description--

2つの [集合](https://rosettacode.org/wiki/set)の* A *と*B*について、$(A \\setminus B) \\cup (B \\setminus A).$ を計算します。つまり、*A* または *B* に属しているが、両方共には属していない項目を列挙します。 この集合は、 *A* と *B* の [対称差](https://en.wikipedia.org/wiki/Symmetric difference)と呼ばれます。 言い換えれば: $(A \\cup B) \\setminus (A \\cap B)$ となります。(少なくとも *A* または *B* のいずれかに属している項目の集合から *A* と *B* の両方に属している項目の集合を引きます)。

# --instructions--

2つの配列をパラメータとして取り、対称差を返す関数を記述してください。 返す前に、結果の配列をソートします。

# --hints--

`symmetricDifference` は関数とします。

```js
assert(typeof symmetricDifference == 'function');
```

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` は配列を返す必要があります。

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

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` は `["Jim", "Serena"]` を返す必要があります。

```js
assert.deepEqual(
  symmetricDifference(
    ['John', 'Bob', 'Mary', 'Serena'],
    ['Jim', 'Mary', 'John', 'Bob']
  ),
  ['Jim', 'Serena']
);
```

`symmetricDifference([1, 2, 3], [3, 4])` は `[1, 2, 4]` を返す必要があります。

```js
assert.deepEqual(symmetricDifference([1, 2, 3], [3, 4]), [1, 2, 4]);
```

`symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7])` は `[1, 2, 5, 7, 8]` を返す必要があります。

```js
assert.deepEqual(symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7]), [
  1,
  2,
  5,
  7,
  8
]);
```

`symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9])` は `[2, 4, 9]` を返す必要があります。

```js
assert.deepEqual(
  symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9]),
  [2, 4, 9]
);
```

`symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9])` は `[1, 3, 4, 8]` を返す必要があります。

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
