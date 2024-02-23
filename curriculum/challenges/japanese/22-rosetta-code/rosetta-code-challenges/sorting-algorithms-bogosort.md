---
id: 5a23c84252665b21eecc8002
title: ソートアルゴリズム / ボゴソート
challengeType: 1
forumTopicId: 302311
dashedName: sorting-algorithmsbogosort
---

# --description--

Bogosort a list of numbers.

ボゴソートは、ソートされるまで集合をランダムに、単にシャッフルするものです。

「ボゴソート」はネタとしてのみ使用される、とんでもなく非効率的なアルゴリズムです。

平均実行時間は O(n!) です。なぜなら、セットのシャッフルがソートされる確率は約 *n* 階乗分の 1 であるためです。最悪の場合は無限に続くことになりますが、それはランダムなシャッフルがソートされた数列を生成する保証がないからです。

最短のケースは O(n) です。なぜなら、たった 1 回の実行でソートされる可能性があるからです。

擬似コード:

<pre><b>while not</b> InOrder(list) <b>do</b>
  Shuffle(list)
<b>done</b>
</pre>

# --hints--

`bogosort` は関数とします。

```js
assert(typeof bogosort == 'function');
```

`bogosort([25, 32, 12, 7, 20])` は配列を返す必要があります。

```js
assert(Array.isArray(bogosort([25, 32, 12, 7, 20])));
```

`bogosort([25, 32, 12, 7, 20])` は `[7, 12, 20, 25, 32]` を返す必要があります。

```js
assert.deepEqual(bogosort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`bogosort([38, 45, 35, 8, 13])` は `[8, 13, 35, 38, 45]` を返す必要があります。

```js
assert.deepEqual(bogosort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`bogosort([43, 36, 20, 34, 24])` は `[20, 24, 34, 36, 43]` を返す必要があります。

```js
assert.deepEqual(bogosort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`bogosort([12, 33, 26, 18, 1, 16, 38])` は `[1, 12, 16, 18, 26, 33, 38]` を返す必要があります。

```js
assert.deepEqual(bogosort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`bogosort([3, 39, 48, 16, 1, 4, 29])` は `[1, 3, 4, 16, 29, 39, 48]` を返す必要があります。

```js
assert.deepEqual(bogosort([3, 39, 48, 16, 1, 4, 29]), [
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
function bogosort(v) {

}
```

# --solutions--

```js
function bogosort(v) {
  function shuffle(v) {
    for (
      var j, x, i = v.length;
      i;
      j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x
    );
    return v;
  }

  function isSorted(v) {
    for (var i = 1; i < v.length; i++) {
      if (v[i - 1] > v[i]) {
        return false;
      }
    }
    return true;
  }
  var sorted = false;
  while (sorted == false) {
    v = shuffle(v);
    sorted = isSorted(v);
  }
  return v;
}
```
