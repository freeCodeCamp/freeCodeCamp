---
id: 5a23c84252665b21eecc8014
title: Sort stability
challengeType: 1
forumTopicId: 302308
dashedName: sort-stability
---

# --description--

When sorting records in a table by a particular column or field, a <a href="https://www.freecodecamp.org/news/stability-in-sorting-algorithms-a-treatment-of-equality-fa3140a5a539/" target="_blank" rel="noopener noreferrer nofollow">stable sort</a> will always retain the relative order of records that have the same key.

For example, in this table of countries and cities, a stable sort on the **second** column, the cities, would keep the US Birmingham above the UK Birmingham. (Although an unstable sort *might*, in this case, place the US Birmingham above the UK Birmingham, a stable sort routine would *guarantee* it).

<pre>UK  London
US  New York
US  Birmingham
UK  Birmingham
</pre>

Similarly, stable sorting on just the first column would generate "UK London" as the first item and "US Birmingham" as the last item (since the order of the elements having the same first word – "UK" or "US" – would be maintained).

# --instructions--

Write a function that takes a 2D array as a parameter. Each element has 2 elements similar to the above example. The function should sort the array as mentioned previously and return the sorted array.

# --hints--

`stableSort` sollte eine Funktion sein.

```js
assert(typeof stableSort == 'function');
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` sollte ein Array zurückgeben.

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

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` sollte `[["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]]` zurückgeben.

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

`stableSort([[2, 2], [1, 2], [1, 4], [1, 5]])` sollte `[[2, 2], [1, 2], [1, 4], [1, 5]]` zurückgeben.

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

`stableSort([[11, 55], [12, 45], [11, 45], [32, 45]])` sollte `[[12, 45], [11, 45], [32, 45], [11, 55]]` zurückgeben.

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

`stableSort([[10, 22], [1, 2], [1, 4], [1, 5], [10, 9]])` sollte `[[1, 2], [1, 4], [1, 5], [10, 9], [10, 22]]` zurückgeben.

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

`stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]])` sollte `[[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]]` zurückgeben.

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
