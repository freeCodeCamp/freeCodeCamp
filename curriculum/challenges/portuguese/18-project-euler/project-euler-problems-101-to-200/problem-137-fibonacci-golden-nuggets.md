---
id: 5900f3f51000cf542c50ff08
title: 'Problema 137: Pepitas de ouro de Fibonacci'
challengeType: 1
forumTopicId: 301765
dashedName: problem-137-fibonacci-golden-nuggets
---

# --description--

Considere a série polinomial infinita $A_{F}(x) = xF_1 + x^2F_2 + x^3F_3 + \ldots$, onde $F_k$ é o $k$º termo na sequência de Fibonacci: $1, 1, 2, 3, 5, 8, \ldots$; ou seja, $F_k = F_{k − 1} + F_{k − 2}, F_1 = 1$ e $F_2 = 1$.

Para este problema, estaremos interessados em valores de $x$ para os quais $A_{F}(x)$ é um número inteiro positivo.

Surpreendentemente,

$$\begin{align} A_F(\frac{1}{2}) & = (\frac{1}{2}) × 1 + {(\frac{1}{2})}^2 × 1 + {(\frac{1}{2})}^3 × 2 + {(\frac{1}{2})}^4 × 3 + {(\frac{1}{2})}^5 × 5 + \cdots \\\\
                 & = \frac{1}{2} + \frac{1}{4} + \frac{2}{8} + \frac{3}{16} + \frac{5}{32} + \cdots \\\\ & = 2 \end{align}$$

Os valores correspondentes de $x$ para os primeiros cinco números naturais são mostrados abaixo.

| $x$                         | $A_F(x)$ |
| --------------------------- | -------- |
| $\sqrt{2} − 1$             | $1$      |
| $\frac{1}{2}$              | $2$      |
| $\frac{\sqrt{13} − 2}{3}$ | $3$      |
| $\frac{\sqrt{89} − 5}{8}$ | $4$      |
| $\frac{\sqrt{34} − 3}{5}$ | $5$      |

Vamos chamar $A_F(x)$ de pepita de ouro se $x$ for racional, porque eles se tornam cada vez mais raros (por exemplo, a 10ª pepita de ouro é 74049690).

Encontre a 15ª pepita dourada.

# --hints--

`goldenNugget()` deve retornar `1120149658760`.

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
