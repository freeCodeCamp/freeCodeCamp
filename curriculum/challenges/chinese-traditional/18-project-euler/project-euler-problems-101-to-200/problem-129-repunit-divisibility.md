---
id: 5900f3ef1000cf542c50ff01
title: '問題 129：純元數可分性'
challengeType: 1
forumTopicId: 301756
dashedName: problem-129-repunit-divisibility
---

# --description--

A number consisting entirely of ones is called a repunit. We shall define $R(k)$ to be a repunit of length $k$; for example, $R(6) = 111111$.

定義正整數 $n$ 滿足 $GCD(n, 10) = 1$，可以證明總是存在 $k$，使 $R(k)$ 可以被 $n$ 整除，記 $A(n)$ 爲滿足條件的 $k$ 的最小值；例如，$A(7) = 6$ 而 $A(41) = 5$。

使得 $A(n)$ 第一次超過 10 的 $n$ 的值是 17。

找到使得 $A(n)$ 第一次超過 100 萬的 $n$ 的值。

# --hints--

`repunitDivisibility()` 應該返回 `1000023`。

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
