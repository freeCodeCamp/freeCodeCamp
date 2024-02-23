---
id: 5900f3ef1000cf542c50ff01
title: '问题 129：纯元数可分性'
challengeType: 1
forumTopicId: 301756
dashedName: problem-129-repunit-divisibility
---

# --description--

A number consisting entirely of ones is called a repunit. We shall define $R(k)$ to be a repunit of length $k$; for example, $R(6) = 111111$.

定义正整数 $n$ 满足 $GCD(n, 10) = 1$，可以证明总是存在 $k$，使 $R(k)$ 可以被 $n$ 整除，记 $A(n)$ 为满足条件的 $k$ 的最小值；例如，$A(7) = 6$ 而 $A(41) = 5$。

使得 $A(n)$ 第一次超过 10 的 $n$ 的值是 17。

找到使得 $A(n)$ 第一次超过 100 万的 $n$ 的值。

# --hints--

`repunitDivisibility()` 应该返回 `1000023`。

```js
assert.strictEqual(repunitDivisibility(), 1000023);
```

# --seed--

## --seed-contents--

```js
function repunitDivisibility() {

  return true;
}

repunitDivisibility();
```

# --solutions--

```js
// solution required
```
