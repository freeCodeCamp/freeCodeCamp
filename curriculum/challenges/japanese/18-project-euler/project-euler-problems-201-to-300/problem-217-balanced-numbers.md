---
id: 5900f4461000cf542c50ff58
title: '問題 217: 平衡な数'
challengeType: 1
forumTopicId: 301859
dashedName: problem-217-balanced-numbers
---

# --description--

$k$ (10進数) 桁数の正の整数について、上位 $⌈\frac{k}{2}⌉$ 桁の和が下位 $⌈\frac{k}{2}⌉$ 桁の和に等しいとき、その整数は「平衡な数」と呼ばれます。ここで、$⌈x⌉$ (「$x$ の天井」と読みます) は $x$ 以上の最小の整数です。したがって、$⌈π⌉ = 4$, $⌈5⌉ = 5$ となります。

例えば回文数はすべて平衡であり、13722 も平衡です。

$10^n$ 未満の平衡な数の総和を $T(n)$ とします。

したがって、$T(1) = 45$, $T(2) = 540$, $T(5) = 334\\,795\\,890$ です。

$T(47)\\,mod\\,3^{15}$ を求めなさい。

# --hints--

`balancedNumbers()` は `6273134` を返す必要があります。

```js
assert.strictEqual(balancedNumbers(), 6273134);
```

# --seed--

## --seed-contents--

```js
function balancedNumbers() {

  return true;
}

balancedNumbers();
```

# --solutions--

```js
// solution required
```
