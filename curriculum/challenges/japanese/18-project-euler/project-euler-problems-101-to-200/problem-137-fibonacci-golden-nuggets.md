---
id: 5900f3f51000cf542c50ff08
title: '問題 137: フィボナッチ金塊'
challengeType: 1
forumTopicId: 301765
dashedName: problem-137-fibonacci-golden-nuggets
---

# --description--

無限多項式級数 $A_{F}(x) = xF_1 + x^2F_2 + x^3F_3 + \ldots$ について考えます。ここで、$F_k$ はフィボナッチ数列 $1, 1, 2, 3, 5, 8, \ldots$ (すなわち $F_k = F_{k − 1} + F_{k − 2}, F_1 = 1$, $F_2 = 1$) の第 $k$ 項です。

この問題では、$A_{F}(x)$ が正の整数となるような $x$ の値に注目します。

驚くべきことに、次の式が成り立ちます。

$$\begin{align} A_F(\frac{1}{2}) & = (\frac{1}{2}) × 1 + {(\frac{1}{2})}^2 × 1 + {(\frac{1}{2})}^3 × 2 + {(\frac{1}{2})}^4 × 3 + {(\frac{1}{2})}^5 × 5 + \cdots \\\\
                 & = \frac{1}{2} + \frac{1}{4} + \frac{2}{8} + \frac{3}{16} + \frac{5}{32} + \cdots \\\\ & = 2 \end{align}$$

最初の 5 つの自然数に対応する $x$ の値を下表に示します。

| $x$                         | $A_F(x)$ |
| --------------------------- | -------- |
| $\sqrt{2} − 1$             | $1$      |
| $\frac{1}{2}$              | $2$      |
| $\frac{\sqrt{13} − 2}{3}$ | $3$      |
| $\frac{\sqrt{89} − 5}{8}$ | $4$      |
| $\frac{\sqrt{34} − 3}{5}$ | $5$      |

$x$ が有理数である $A_F(x)$ の値は次第にまれになるので、それを「金塊」と呼ぶことにします。例えば、10 番目の金塊は 74049690 です。

15 番目の金塊を求めなさい。

# --hints--

`goldenNugget()` は `1120149658760` を返す必要があります。

```js
assert.strictEqual(goldenNugget(), 1120149658760);
```

# --seed--

## --seed-contents--

```js
function goldenNugget() {

  return true;
}

goldenNugget();
```

# --solutions--

```js
// solution required
```
