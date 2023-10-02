---
id: 5900f3f51000cf542c50ff08
title: 'Problema 137: la pepita d''oro di Fibonacci'
challengeType: 1
forumTopicId: 301765
dashedName: problem-137-fibonacci-golden-nuggets
---

# --description--

Considera la serie polinomiale infinita $A_{F}(x) = xF_1 + x^2F_2 + x^3F_3 + \ldots$, dove $F_k$ è il termine $k$-simo nella sequenza di Fibonacci: $1, 1, 2, 3, 5, 8, \ldots$; cioè $F_k = F_{k − 1} + F_{k − 2}, F_1 = 1$ e $F_2 = 1$.

Per questo problema consideriamo i valori di $x$ per cui $A_{F}(x)$ è un numero intero positivo.

Sorprendentemente

$$\begin{align} A_F(\frac{1}{2}) & = (\frac{1}{2}) × 1 + {(\frac{1}{2})}^2 × 1 + {(\frac{1}{2})}^3 × 2 + {(\frac{1}{2})}^4 × 3 + {(\frac{1}{2})}^5 × 5 + \cdots \\\\
                 & = \frac{1}{2} + \frac{1}{4} + \frac{2}{8} + \frac{3}{16} + \frac{5}{32} + \cdots \\\\ & = 2 \end{align}$$

I valori porrispondenti di $x$ per i primi cinque numeri naturali sono mostrati sotto.

| $x$                         | $A_F(x)$ |
| --------------------------- | -------- |
| $\sqrt{2} − 1$             | $1$      |
| $\frac{1}{2}$              | $2$      |
| $\frac{\sqrt{13} − 2}{3}$ | $3$      |
| $\frac{\sqrt{89} − 5}{8}$ | $4$      |
| $\frac{\sqrt{34} − 3}{5}$ | $5$      |

Chiamamo $A_F(x)$ una pepita d'oro se $x$ è razionale, perché diventano sempre più rari; per esempio, la decima pepita d'oro è 74049690.

Trova la quindicesima pepita d'oro.

# --hints--

`goldenNugget()` dovrebbe restituire `1120149658760`.

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
