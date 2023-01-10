---
id: 5900f3fa1000cf542c50ff0c
title: 'Problema 140: Pepite d''oro di Fibonacci modificato'
challengeType: 1
forumTopicId: 301769
dashedName: problem-140-modified-fibonacci-golden-nuggets
---

# --description--

Considera la serie polinomiale infinita $A_G(x) = xG_1 + x^2G_2 + x^3G_3 + \cdots$, dove $G_k$ è il $k$-esimo termine della relazione di ricorrenza del secondo ordine $G_k = G_{k − 1} + G_{k − 2}, G_1 = 1$ e $G_2 = 4$; cioè, $1, 4, 5, 9, 14, 23, \ldots$.

Per questo problema ci occuperemo dei valori di $x$ per i quali $A_G(x)$ è un numero intero positivo.

I valori corrispondenti di $x$ per i primi cinque numeri naturali sono mostrati sotto.

| $x$                           | $A_G(x)$ |
| ----------------------------- | -------- |
| $\frac{\sqrt{5} − 1}{4}$    | $1$      |
| $\frac{2}{5}$                | $2$      |
| $\frac{\sqrt{22} − 2}{6}$   | $3$      |
| $\frac{\sqrt{137} − 5}{14}$ | $4$      |
| $\frac{1}{2}$                | $5$      |

Chiamamo $A_G(x)$ una pepita d'oro se $x$ è razionale, perché diventano sempre più rari; per esempio, la ventesima pepita d'oro è 211345365. Trova la somma delle prime trenta pepite d'oro.

# --hints--

`modifiedGoldenNuggets()` dovrebbe restituire `5673835352990`

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
