---
id: 599d15309e88c813a40baf58
title: エントロピー
challengeType: 1
forumTopicId: 302254
dashedName: entropy
---

# --description--

与えられた入力文字列のシャノンエントロピーHを計算します。

$n$ の異なる文字 (2進数でn=2) からなる$N$「シンボル」文字列 (合計文字) である離散確率変数 $X$ の場合、Xのシャノンエントロピーをビット／シンボルで表すと以下のようになります。

$H_2(X) = -\\sum\_{i=1}^n \\frac{count_i}{N} \\log_2 \\left(\\frac{count_i}{N}\\right)$

$count_i$ は、文字 $n_i$ の数です。

# --hints--

`entropy` という関数です。

```js
assert(typeof entropy === 'function');
```

`entropy("0")` は `0` を返します。

```js
assert.equal(entropy('0'), 0);
```

`entropy("01")` は `1` を返します。

```js
assert.equal(entropy('01'), 1);
```

`entropy("0123")` は `2` を返します。

```js
assert.equal(entropy('0123'), 2);
```

`entropy("01234567")` は `3` を返します。

```js
assert.equal(entropy('01234567'), 3);
```

`entropy("0123456789abcdef")` は `4` を返します。

```js
assert.equal(entropy('0123456789abcdef'), 4);
```

`entropy("1223334444")` は `1.8464393446710154` を返します。

```js
assert.equal(entropy('1223334444'), 1.8464393446710154);
```

# --seed--

## --seed-contents--

```js
function entropy(s) {

}
```

# --solutions--

```js
function entropy(s) {
    // Create a dictionary of character frequencies and iterate over it.
  function process(s, evaluator) {
    let h = Object.create(null),
      k;
    s.split('').forEach(c => {
      h[c] && h[c]++ || (h[c] = 1); });
    if (evaluator) for (k in h) evaluator(k, h[k]);
    return h;
  }
    // Measure the entropy of a string in bits per symbol.

  let sum = 0,
    len = s.length;
  process(s, (k, f) => {
    const p = f / len;
    sum -= p * Math.log(p) / Math.log(2);
  });
  return sum;
}
```
