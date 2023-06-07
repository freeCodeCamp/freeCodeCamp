---
id: 5a23c84252665b21eecc8010
title: ソートアルゴリズム / シェルソート
challengeType: 1
forumTopicId: 302317
dashedName: sorting-algorithmsshell-sort
---

# --description--

Write a function to sort an array of elements using the Shell sort algorithm, a diminishing increment sort. この関数はソートされた配列を返す必要があります。

シェルソート (シェルメソッドとも呼ばれます) は、1959年にこのアルゴリズムを発表した発案者のドナルド・シェルにちなんで名付けられています。

シェルソートは、増分列に基づく交互的な挿入ソートの列です。 増分サイズが1になるまで、パスごとに増分サイズを減少させます。

増分サイズが 1 の場合、シェルソートは単なる挿入ソートです。 しかし、この時点までにデータはほぼソートされていることが確実であり、ここでは挿入ソートが「ベストケース」となります。

どの列の場合も 1 になるまでデータをソートしますが、他よりも優れたいくつかの方法があります。

実証研究では、約 2.2 の割合で実際にうまく動作する幾何学的増分列が示されています。

# --hints--

`shellSort` は関数とします。

```js
assert(typeof shellSort == 'function');
```

`shellSort([25, 32, 12, 7, 20])` は配列を返す必要があります。

```js
assert(Array.isArray(shellSort([25, 32, 12, 7, 20])));
```

`shellSort([25, 32, 12, 7, 20])` は `[7, 12, 20, 25, 32]` を返す必要があります。

```js
assert.deepEqual(shellSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`shellSort([38, 45, 35, 8, 13])` は `[8, 13, 35, 38, 45]` を返す必要があります。

```js
assert.deepEqual(shellSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`shellSort([43, 36, 20, 34, 24])` は `[20, 24, 34, 36, 43]` を返す必要があります。

```js
assert.deepEqual(shellSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`shellSort([12, 33, 26, 18, 1, 16, 38])` は `[1, 12, 16, 18, 26, 33, 38]` を返す必要があります。

```js
assert.deepEqual(shellSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`shellSort([3, 39, 48, 16, 1, 4, 29])` は `[1, 3, 4, 16, 29, 39, 48]` を返す必要があります。

```js
assert.deepEqual(shellSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function shellSort(a) {

}
```

# --solutions--

```js
function shellSort(a) {
  for (var h = a.length; h > 0; h = parseInt(h / 2)) {
    for (var i = h; i < a.length; i++) {
      var k = a[i];
      for (var j = i; j >= h && k < a[j - h]; j -= h) a[j] = a[j - h];
      a[j] = k;
    }
  }
  return a;
}
```
