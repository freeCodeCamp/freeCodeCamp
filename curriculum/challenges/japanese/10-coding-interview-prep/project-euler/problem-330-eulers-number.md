---
id: 5900f4b71000cf542c50ffc9
title: '問題 330: オイラー数'
challengeType: 1
forumTopicId: 301988
dashedName: problem-330-eulers-number
---

# --description--

すべての整数 $n$ について、実数の無限数列 $a(n)$ は次のように定義されます。

$$ a(n) = \begin{cases} 1                                                       & n < 0 \\\\
\displaystyle \sum_{i = 1}^{\infty} \frac{a(n - 1)}{i!} & n \ge 0 \end{cases} $$

例えば次のようになります。

$$\begin{align}   & a(0) = \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = e − 1 \\\\
  & a(1) = \frac{e − 1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = 2e − 3 \\\\ & a(2) = \frac{2e − 3}{1!} + \frac{e − 1}{2!} + \frac{1}{3!} + \ldots = \frac{7}{2} e − 6 \end{align}$$

ここで、$e = 2.7182818\ldots$ はオイラーの定数です。

$a(n)$ は、整数 $A(n)$ と整数 $B(n)$ に対して $\displaystyle\frac{A(n)e + B(n)}{n!}$ の形式であることが分かります。

例えば、$\displaystyle a(10) = \frac{328161643e − 652694486}{10!}$ です。

$A({10}^9)$ + $B({10}^9)$ を求め、$\bmod 77\\,777\\,777$ で答えなさい。

# --hints--

`eulersNumber()` は `15955822` を返す必要があります。

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
