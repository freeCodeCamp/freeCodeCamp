---
id: 5900f3f91000cf542c50ff0b
title: '問題 141: 平方数でもある漸増数 n を調べ上げる'
challengeType: 1
forumTopicId: 301770
dashedName: problem-141-investigating-progressive-numbers-n-which-are-also-square
---

# --description--

正の整数 $n$ を $d$ で除し、商を $q$、余りを $r$ と表します。 さらに、$d$, $q$, $r$ は等比数列内の連続した正の整数項ですが、必ずしもこの順序ではありません。

例えば、58 を 6で割ると商が 9、余りが 4 です。 4, 6, 9 が、等比数列 (公比 $\frac{3}{2}$) 内の連続した項であることも分かります 。

このような数 $n$ を「漸増的」な数と呼ぶことにします。

一部の漸増的な数、例えば 9 や 10404 = ${102}^2$ は完全平方数でもあります。 10 万未満の漸増的な完全平方数の総和は 124657です。

1 兆 (${10}^{12}$) 未満の漸増的な完全平方数の総和を求めなさい。

# --hints--

`progressivePerfectSquares()` は `878454337159` を返す必要があります。

```js
assert.strictEqual(progressivePerfectSquares(), 878454337159);
```

# --seed--

## --seed-contents--

```js
function progressivePerfectSquares() {

  return true;
}

progressivePerfectSquares();
```

# --solutions--

```js
// solution required
```
