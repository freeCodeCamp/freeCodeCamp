---
id: 5a23c84252665b21eecc8014
title: ソートの安定性
challengeType: 1
forumTopicId: 302308
dashedName: sort-stability
---

# --description--

When sorting records in a table by a particular column or field, a <a href="https://www.freecodecamp.org/news/stability-in-sorting-algorithms-a-treatment-of-equality-fa3140a5a539/" target="_blank" rel="noopener noreferrer nofollow">stable sort</a> will always retain the relative order of records that have the same key.

例えば、この国と都市の表で **2 番目**の列の都市で安定ソートを行うと、米国のバーミンガムが英国のバーミンガムの上という順序が保たれます。 (このケースでは、不安定ソートでも米国のバーミンガムが英国のバーミンガムの上に配置される*可能性*はありますが、安定ソートのルーチンはそれを*保証*します）。

<pre>UK  London
US  New York
US  Birmingham
UK  Birmingham
</pre>

同様に 最初の列だけに安定ソートを行うと、最初の項目として「UK London」が、最後の項目として「US Birmingham」が来ます (同じ最初の単語 – 「UK」または「US」 – を持つ要素の順序が維持されるため)。

# --instructions--

パラメータとして2 次元配列を取る関数を記述してください。 各要素には、上記の例に似た 2 つの要素があります。 この関数は、前述のように配列をソートし、ソートされた配列を返します。

# --hints--

`stableSort` は関数とします。

```js
assert(typeof stableSort == 'function');
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` は配列を返す必要があります。

```js
assert(
  Array.isArray(
    stableSort([
      ['UK', 'London'],
      ['US', 'New York'],
      ['US', 'Birmingham'],
      ['UK', 'Birmingham']
    ])
  )
);
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` は `[["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]]` を返す必要があります。

```js
assert.deepEqual(
  stableSort([
    ['UK', 'London'],
    ['US', 'New York'],
    ['US', 'Birmingham'],
    ['UK', 'Birmingham']
  ]),
  [
    ['US', 'Birmingham'],
    ['UK', 'Birmingham'],
    ['UK', 'London'],
    ['US', 'New York']
  ]
);
```

`stableSort([[2, 2], [1, 2], [1, 4], [1, 5]])` は `[[2, 2], [1, 2], [1, 4], [1, 5]]` を返す必要があります。

```js
assert.deepEqual(
  stableSort([
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]),
  [
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]
);
```

`stableSort([[11, 55], [12, 45], [11, 45], [32, 45]])` は `[[12, 45], [11, 45], [32, 45], [11, 55]]` を返す必要があります。

```js
assert.deepEqual(
  stableSort([
    [11, 55],
    [12, 45],
    [11, 45],
    [32, 45]
  ]),
  [
    [12, 45],
    [11, 45],
    [32, 45],
    [11, 55]
  ]
);
```

`stableSort([[10, 22], [1, 2], [1, 4], [1, 5], [10, 9]])` は `[[1, 2], [1, 4], [1, 5], [10, 9], [10, 22]]` を返す必要があります。

```js
assert.deepEqual(
  stableSort([
    [10, 22],
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9]
  ]),
  [
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9],
    [10, 22]
  ]
);
```

`stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]])` は `[[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]]` を返す必要があります。

```js
assert.deepEqual(
  stableSort([
    [55, 54],
    [12, 22],
    [31, 43],
    [31, 54],
    [10, 49]
  ]),
  [
    [12, 22],
    [31, 43],
    [10, 49],
    [55, 54],
    [31, 54]
  ]
);
```

# --seed--

## --seed-contents--

```js
function stableSort(arr) {

}
```

# --solutions--

```js
function stableSort(arr) {
  arr.sort(function(a, b) {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
  return arr;
}
```
