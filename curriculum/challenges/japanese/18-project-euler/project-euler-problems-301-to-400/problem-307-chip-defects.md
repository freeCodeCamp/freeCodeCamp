---
id: 5900f4a01000cf542c50ffb2
title: '問題 307: IC チップの不良'
challengeType: 1
forumTopicId: 301961
dashedName: problem-307-chip-defects
---

# --description--

工場で製造される IC チップ $n$ 個において $k$ 件の不良が不規則に生じます (1 個のチップに何件でも不良が生じる可能性があり、それぞれの不良は他の不良から独立しています)。

少なくとも 3 件の不良を持つチップが存在する確率を、$p(k,n)$ とします。 例えば、$p(3,7) ≈ 0.0204081633$ です。

$p(20\\,000, 1\\,000\\,000)$ を求め、小数第 10 位に四捨五入して 0.abcdefghij の形式弟答えなさい。

# --hints--

`chipDefects()` は `0.7311720251` を返す必要があります。

```js
assert.strictEqual(chipDefects(), 0.7311720251);
```

# --seed--

## --seed-contents--

```js
function chipDefects() {

  return true;
}

chipDefects();
```

# --solutions--

```js
// solution required
```
