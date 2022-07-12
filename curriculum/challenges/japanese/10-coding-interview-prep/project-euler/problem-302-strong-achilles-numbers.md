---
id: 5900f49b1000cf542c50ffad
title: '問題 302: 強力なアキレス数'
challengeType: 1
forumTopicId: 301956
dashedName: problem-302-strong-achilles-numbers
---

# --description--

正の整数 $n$ のすべての素因数 $p$ について $p^2$ が $n$ の約数である場合、$n$ は多冪数です。

正の整数 $n$ を別の正の整数の累乗で表せる場合、$n$ は累乗数です。

正の整数 $n$ が多冪数であるが累乗数ではない場合、$n$ はアキレス数です。 例えば、864 と 1800 はアキレス数です。それぞれ、$864 = 2^5 \times 3^3$ と $1800 = 2^3 \times 3^2 \times 5^2$ です。

正の整数 $S$ と φ(S)$ の両方がアキレス数の場合、$S$ を「強力なアキレス数」と呼ぶことにします。 $φ$ はオイラーのトーティエント関数を表します。

例えば、864 は強力なアキレス数です。$φ(864) = 288 = 2^5 \times 3^2$ となるからです。 しかし、1800 は強力なアキレス数ではありません。$φ(1800) = 480 = 2^5 \times 3^1 \times 5^1$ となるからです。

強力なアキレス数は ${10}^4$ 未満に 7 つ、${10}^8$ 未満に 656 個あります。

${10}^{18}$ 未満の強力なアキレス数はいくつありますか。

# --hints--

`strongAchillesNumbers()` は `1170060` を返す必要があります。

```js
assert.strictEqual(strongAchillesNumbers(), 1170060);
```

# --seed--

## --seed-contents--

```js
function strongAchillesNumbers() {

  return true;
}

strongAchillesNumbers();
```

# --solutions--

```js
// solution required
```
