---
id: 594810f028c0303b75339acd
title: '余剰数、不足数、完全数の分類'
challengeType: 1
forumTopicId: 302221
dashedName: abundant-deficient-and-perfect-number-classifications
---

# --description--

真の約数に基づいて、正の整数を3つに分類します。

$P(n)$ は、真の約数が `n` 自身以外の正の整数 `n` である場合の `n` の真の約数の総和です。

`P(n) < n` の場合、`n` は `deficient` に分類されます。

`P(n) === n` の場合、`n` は `perfect` に分類されます。

`P(n) > n` の場合 `n` は `abundant`に分類されます。

**例**: `6` の真の約数は、`1`, `2`, `3`です。 `1 + 2 + 3 = 6` なので、`6` は完全数に分類されます。

# --instructions--

3つの分類に、`1` から `num` までの整数が、それぞれいくつ含まれるかを計算する関数を作成します。 `[deficient, perfect, abundant]` の形式で、結果を配列として出力します。

# --hints--

`getDPA` という関数です。

```js
assert(typeof getDPA === 'function');
```

`getDPA(5000)` は配列を返します。

```js
assert(Array.isArray(getDPA(5000)));
```

`getDPA(5000)` は長さ`3`の配列を返します。

```js
assert(getDPA(5000).length === 3);
```

`getDPA(5000)` は`[3758, 3, 1239]`を返します。

```js
assert.deepEqual(getDPA(5000), [3758, 3, 1239]);
```

`getDPA(10000)` は`[7508, 4, 2488]`を返します。

```js
assert.deepEqual(getDPA(10000), [7508, 4, 2488]);
```

`getDPA(20000)` は`[15043, 4, 4953]`を返します。

```js
assert.deepEqual(getDPA(20000), [15043, 4, 4953]);
```

# --seed--

## --seed-contents--

```js
function getDPA(num) {

}
```

# --solutions--

```js
function getDPA(num) {
  const dpa = [1, 0, 0];
  for (let n = 2; n <= num; n += 1) {
    let ds = 1;
    const e = Math.sqrt(n);
    for (let d = 2; d < e; d += 1) {
      if (n % d === 0) {
        ds += d + (n / d);
      }
    }
    if (n % e === 0) {
      ds += e;
    }
    dpa[ds < n ? 0 : ds === n ? 1 : 2] += 1;
  }
  return dpa;
}
```
