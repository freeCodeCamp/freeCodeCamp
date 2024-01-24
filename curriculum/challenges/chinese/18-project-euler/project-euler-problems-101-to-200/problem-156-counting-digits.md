---
id: 5900f4091000cf542c50ff1b
title: '问题156：计数数字'
challengeType: 1
forumTopicId: 301787
dashedName: problem-156-counting-digits
---

# --description--

Starting from zero the natural numbers are written down in base 10 like this:

0 1 2 3 4 5 6 7 8 9 10 11 12....

请考虑数字 $d = 1美元。 在我们写下每个数字n后，我们将更新出现的数字，并调用这个数字 $f(n, 1)$。 那么， $f(n, 1)$) 的第一个值如下：

| $n$ | $f(n, 1)$ |
| --- | --------- |
| 0   | 0         |
| 1   | 1         |
| 2   | 1         |
| 3   | 1         |
| 4   | 1         |
| 5   | 1         |
| 6   | 1         |
| 7   | 1         |
| 8   | 1         |
| 9   | 1         |
| 10  | 2         |
| 11  | 4         |
| 12  | 5         |

请注意， $f(n, 1)$永远不等于 3。

因此，等式$f（n，1）= n$ 的前两个解是 $n = 0$ 和 $n = 1$。 下一个解决方案是 $n = 199981$。 以相同的方式，函数 $f(n，d)$ 给出在写入数字 $n$ 之后已经写下的总位数d。

实际上，对于每个数字 $d≠0$, 0是方程 $f（n，d）= n$ 的第一个解。 让 $s(d)$ 是 $f(n, d) = n$ 的所有解决方案的总和。

给出 $s(1)= 22786974071$。 寻找$\总数{s(d)}$ for $1 ≤ d ≤ 9$。

注意：如果对于某些 $n$，对于多于一个 $d$ 的值，$f(n, d) = n$，对于 $d$ 的每个值，再次计算 $n$ 当$f(n, d) = n$。

# --hints--

`countingDigits()` should return`21295121502550`。

```js
assert.strictEqual(countingDigits(), 21295121502550);
```

# --seed--

## --seed-contents--

```js
function countingDigits() {

  return true;
}

countingDigits();
```

# --solutions--

```js
// solution required
```
