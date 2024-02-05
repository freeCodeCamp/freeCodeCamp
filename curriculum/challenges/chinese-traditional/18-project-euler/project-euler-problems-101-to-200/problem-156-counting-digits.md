---
id: 5900f4091000cf542c50ff1b
title: '問題156：計數數字'
challengeType: 1
forumTopicId: 301787
dashedName: problem-156-counting-digits
---

# --description--

Starting from zero the natural numbers are written down in base 10 like this:

0 1 2 3 4 5 6 7 8 9 10 11 12....

請考慮數字 $d = 1美元。 在我們寫下每個數字n後，我們將更新出現的數字，並調用這個數字 $f(n, 1)$。 那麼， $f(n, 1)$) 的第一個值如下：

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

請注意， $f(n, 1)$永遠不等於 3。

因此，等式$f（n，1）= n$ 的前兩個解是 $n = 0$ 和 $n = 1$。 下一個解決方案是 $n = 199981$。 以相同的方式，函數 $f(n，d)$ 給出在寫入數字 $n$ 之後已經寫下的總位數d。

實際上，對於每個數字 $d≠0$, 0是方程 $f（n，d）= n$ 的第一個解。 讓 $s(d)$ 是 $f(n, d) = n$ 的所有解決方案的總和。

給出 $s(1)= 22786974071$。 尋找$\總數{s(d)}$ for $1 ≤ d ≤ 9$。

注意：如果對於某些 $n$，對於多於一個 $d$ 的值，$f(n, d) = n$，對於 $d$ 的每個值，再次計算 $n$ 當$f(n, d) = n$。

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
