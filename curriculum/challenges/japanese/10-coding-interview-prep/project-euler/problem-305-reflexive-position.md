---
id: 5900f49d1000cf542c50ffb0
title: '問題 305: 再帰位置'
challengeType: 1
forumTopicId: 301959
dashedName: problem-305-reflexive-position
---

# --description--

10 進数表記の (1から始まる) 連続する正の整数を連結した (無限の) 文字列を、$S$ とします。

したがって、$S = 1234567891011121314151617181920212223242\ldots$ です。

一見して分かるとおり、$S$ にはどの数字も無限に現れます。

$S$ 内で $n$ が $n$ 回目に現れた開始位置を、$f(n)$ と定義します。 例えば、$f(1) = 1$, $f(5) = 81$, $f(12) = 271$, $f(7780) = 111\\,111\\,365$ です。

$1 ≤ k ≤ 13$ のとき、$\sum f(3^k) を求めなさい。

# --hints--

`reflexivePosition()` は `18174995535140` を返す必要があります。

```js
assert.strictEqual(reflexivePosition(), 18174995535140);
```

# --seed--

## --seed-contents--

```js
function reflexivePosition() {

  return true;
}

reflexivePosition();
```

# --solutions--

```js
// solution required
```
