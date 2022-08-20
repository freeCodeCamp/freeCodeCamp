---
id: 5900f4b71000cf542c50ffc9
title: '問題 330：歐拉數'
challengeType: 1
forumTopicId: 301988
dashedName: problem-330-eulers-number
---

# --description--

對於所有的整數 $n$，一個無限實數序列 $a(n)$ 定義如下：

$$ a(n) = \begin{cases} 1                                                       & n < 0 \\\\
\displaystyle \sum_{i = 1}^{\infty} \frac{a(n - 1)}{i!} & n \ge 0 \end{cases} $$

例如，

$$\begin{align}   & a(0) = \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = e − 1 \\\\
  & a(1) = \frac{e − 1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = 2e − 3 \\\\ & a(2) = \frac{2e − 3}{1!} + \frac{e − 1}{2!} + \frac{1}{3!} + \ldots = \frac{7}{2} e − 6 \end{align}$$

其中，$e = 2.7182818\ldots$ 是歐拉常數。

可以看出，$a(n)$ 可以寫成 $\displaystyle\frac{A(n)e + B(n)}{n!}$ 這樣的形式，其中 $A(n)$ 和 $B(n)$ 均是整數。

例如，$\displaystyle a(10) = \frac{328161643e − 652694486}{10!}$。

求解 $A({10}^9)$ + $B({10}^9)$ 並給出答案 $\bmod 77\\,777\\,777$。

# --hints--

`eulersNumber()` 應該返回 `15955822`。

```js
assert.strictEqual(eulersNumber(), 15955822);
```

# --seed--

## --seed-contents--

```js
function eulersNumber() {

  return true;
}

eulersNumber();
```

# --solutions--

```js
// solution required
```
