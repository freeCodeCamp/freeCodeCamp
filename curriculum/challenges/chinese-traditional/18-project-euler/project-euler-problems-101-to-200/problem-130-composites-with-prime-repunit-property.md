---
id: 5900f3ee1000cf542c50ff00
title: '問題 130：具有素數純元數特性的合數'
challengeType: 1
forumTopicId: 301758
dashedName: problem-130-composites-with-prime-repunit-property
---

# --description--

A number consisting entirely of ones is called a repunit. We shall define $R(k)$ to be a repunit of length $k$; for example, $R(6) = 111111$.

定義正整數 $n$ 滿足 $GCD(n, 10) = 1$，可以證明總是存在 $k$，使 $R(k)$ 可以被 $n$ 整除，記 $A(n)$ 爲滿足條件的 $k$ 的最小值；例如，$A(7) = 6$ 而 $A(41) = 5$。

已知，對於所有的素數 $p > 5$，$p − 1$ 可以被 $A(p)$ 整除。 例如，當 $p = 41, A(41) = 5$，而 40 可以被 5 整除。

然而，也有一些罕見的複合值也是如此。前五個示例是 91、259、451、481 和 703。

找出 $n$ 的前 25 個複合值的總和，其中 $GCD(n, 10) = 1$ 且 $n − 1$ 可被 $A(n)$ 整除。

# --hints--

`compositeRepunit()` 應該返回 `149253`。

```js
assert.strictEqual(compositeRepunit(), 149253);
```

# --seed--

## --seed-contents--

```js
function compositeRepunit() {

  return true;
}

compositeRepunit();
```

# --solutions--

```js
// solution required
```
