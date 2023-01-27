---
id: 5900f3fa1000cf542c50ff0c
title: '問題 140: 変形フィボナッチ金塊'
challengeType: 1
forumTopicId: 301769
dashedName: problem-140-modified-fibonacci-golden-nuggets
---

# --description--

無限多項式級数 $A_G(x) = xG_1 + x^2G_2 + x^3G_3 + \cdots$ について考えます。ここで、$G_k$ は二次漸化式 $G_k = G_{k − 1} + G_{k − 2}, G_1 = 1$, $G_2 = 4$ (すなわち $1, 4, 5, 9, 14, 23, \ldots$) の第 $k$ 項です。

この問題では、$A_G(x)$ が正の整数となるような $x$ の値に注目します。

最初の 5 つの自然数に対応する $x$ の値を下表に示します。

| $x$                           | $A_G(x)$ |
| ----------------------------- | -------- |
| $\frac{\sqrt{5} − 1}{4}$    | $1$      |
| $\frac{2}{5}$                | $2$      |
| $\frac{\sqrt{22} − 2}{6}$   | $3$      |
| $\frac{\sqrt{137} − 5}{14}$ | $4$      |
| $\frac{1}{2}$                | $5$      |

$x$ が有理数である $A_G(x)$ の値は次第にまれになるので、それを「金塊」と呼ぶことにします。例えば、20 番目の金塊は 211345365 です。 最初の 30 個の金塊の和を求めなさい。

# --hints--

`modifiedGoldenNuggets()` は `5673835352990` を返す必要があります。

```js
assert.strictEqual(modifiedGoldenNuggets(), 5673835352990);
```

# --seed--

## --seed-contents--

```js
function modifiedGoldenNuggets() {

  return true;
}

modifiedGoldenNuggets();
```

# --solutions--

```js
// solution required
```
