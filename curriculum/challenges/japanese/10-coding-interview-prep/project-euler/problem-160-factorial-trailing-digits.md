---
id: 5900f40d1000cf542c50ff1f
title: '問題 160: 階乗の下位桁'
challengeType: 1
forumTopicId: 301794
dashedName: problem-160-factorial-trailing-digits
---

# --description--

任意の $N$ について、$N!$ の末尾のゼロより前にある最後の 5 桁を $f(N)$ とします。

例えば次のようになります。

$$\begin{align}   & 9! = 362880 \\; \text{したがって、} \\; f(9) = 36288 \\\\
  & 10! = 3628800 \\; \text{したがって、} \\; f(10) = 36288 \\\\ & 20! = 2432902008176640000 \\; \text{したがって、} \\; f(20) = 17664 \end{align}$$

$f(1,000,000,000,000)$ を求めなさい。

# --hints--

`factorialTrailingDigits()` は `16576` を返す必要があります。

```js
assert.strictEqual(factorialTrailingDigits(), 16576);
```

# --seed--

## --seed-contents--

```js
function factorialTrailingDigits() {

  return true;
}

factorialTrailingDigits();
```

# --solutions--

```js
// solution required
```
