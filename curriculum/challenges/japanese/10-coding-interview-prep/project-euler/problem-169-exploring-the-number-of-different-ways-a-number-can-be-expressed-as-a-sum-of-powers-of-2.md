---
id: 5900f4151000cf542c50ff28
title: >-
  問題 169: 数を 2 の累乗の和で表す方法の数を求める
challengeType: 1
forumTopicId: 301803
dashedName: >-
  problem-169-exploring-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

$f(0)=1$ と定義し、$n$ を 2 の整数乗の和で表す方法が何通りあるかを $f(n)$ で表すものとします。ただし、それぞれの整数乗は最大 2 回しか使えないものとします。

例えば、10 を表す方法は次のように 5 通りあるので、$f(10)=5$ です。

$$\begin{align}   & 1 + 1 + 8 \\\\
  & 1 + 1 + 4 + 4 \\\\   & 1 + 1 + 2 + 2 + 4 \\\\
  & 2 + 4 + 4 \\\\ & 2 + 8 \end{align}$$

$f({10}^{25})$ を求めなさい。

# --hints--

`numberOfWaysToExpress()` は `178653872807` を返す必要があります。

```js
assert.strictEqual(numberOfWaysToExpress(), 178653872807);
```

# --seed--

## --seed-contents--

```js
function numberOfWaysToExpress() {

  return true;
}

numberOfWaysToExpress();
```

# --solutions--

```js
// solution required
```
