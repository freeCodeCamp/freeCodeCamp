---
id: 5900f4141000cf542c50ff26
title: '問題 167: ウラム数列を調べ上げる'
challengeType: 1
forumTopicId: 301801
dashedName: problem-167-investigating-ulam-sequences
---

# --description--

正の整数 $a$ と $b$ について、ウラム数列 $U (a,b)$ は ${U{(a,b)}\_1} = a$, ${U{(a,b)}\_2} = b$ と定義されます。$k > 2$ のとき、${U{(a,b)}\_k}$ は、$U(a,b)$ の相異なる前の 2 つの要素の値の和としてちょうど 1 通りで表せるような、${U{(a,b)}\_{(k-1)}}$ より大きい最小の整数です。

例えば、数列 $U(1,2)$ は次のように始まります。

$$1, 2, 3 = 1 + 2, 4 = 1 + 3, 6 = 2 + 4, 8 = 2 + 6, 11 = 3 + 8$$

5 はこれに含まれません。$5 = 1 + 4 = 2 + 3$ であり、前の 2 つの要素の和として 2 通りで表せるからです。$7 = 1 + 6 = 3 + 4$ も同じことです。

$2 ≤ n ≤ 10$, $k = {10}^{11} のとき、$\sum {U(2, 2n + 1)_k}$ を求めなさい。

# --hints--

`ulamSequences()` は `3916160068885` を返す必要があります。

```js
assert.strictEqual(ulamSequences(), 3916160068885);
```

# --seed--

## --seed-contents--

```js
function ulamSequences() {

  return true;
}

ulamSequences();
```

# --solutions--

```js
// solution required
```
