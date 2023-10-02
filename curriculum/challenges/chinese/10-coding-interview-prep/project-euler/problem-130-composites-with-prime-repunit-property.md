---
id: 5900f3ee1000cf542c50ff00
title: '问题 130：具有素数纯元数特性的合数'
challengeType: 1
forumTopicId: 301758
dashedName: problem-130-composites-with-prime-repunit-property
---

# --description--

完全由 1 组成的数字称为纯元数（repunit）。 我们定义 $R(k)$ 为长度为 $k$ 的纯元数；例如, $R(6) = 111111$。

定义正整数 $n$ 满足 $GCD(n, 10) = 1$，可以证明总是存在 $k$，使 $R(k)$ 可以被 $n$ 整除，记 $A(n)$ 为满足条件的 $k$ 的最小值；例如，$A(7) = 6$ 而 $A(41) = 5$。

已知，对于所有的素数 $p > 5$，$p − 1$ 可以被 $A(p)$ 整除。 例如，当 $p = 41, A(41) = 5$，而 40 可以被 5 整除。

然而，也有一些罕见的复合值也是如此。前五个示例是 91、259、451、481 和 703。

找出 $n$ 的前 25 个复合值的总和，其中 $GCD(n, 10) = 1$ 且 $n − 1$ 可被 $A(n)$ 整除。

# --hints--

`compositeRepunit()` 应该返回 `149253`。

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
