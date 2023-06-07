---
id: 5900f4861000cf542c50ff99
title: '問題 282: アッカーマン関数'
challengeType: 1
forumTopicId: 301933
dashedName: problem-282-the-ackermann-function
---

# --description--

負でない整数 $m$, $n$ に対して、アッカーマン関数 $A(m, n)$ は次のように定義されます。

$$A(m, n) = \begin{cases} n + 1                 & \text{$m = 0$ の場合}             \\\\
A(m - 1, 1)           & \text{$m > 0$ かつ $n = 0$ の場合} \\\\ A(m - 1, A(m, n - 1)) & \text{$m > 0$ かつ $n > 0$ の場合} \end{cases}$$

例えば、$A(1, 0) = 2$, $A(2, 2) = 7$, $A(3, 4) = 125$ です。

$\displaystyle\sum_{n = 0}^6 A(n, n)$ を求め、mod ${14}^8$ で答えなさい。

# --hints--

`ackermanFunction()` は `1098988351` を返す必要があります。

```js
assert.strictEqual(ackermanFunction(), 1098988351);
```

# --seed--

## --seed-contents--

```js
function ackermanFunction() {

  return true;
}

ackermanFunction();
```

# --solutions--

```js
// solution required
```
