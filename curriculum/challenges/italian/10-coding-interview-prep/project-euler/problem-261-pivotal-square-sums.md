---
id: 5900f4711000cf542c50ff84
title: 'Problem 261: Somme di quadrati principali'
challengeType: 1
forumTopicId: 301910
dashedName: problem-261-pivotal-square-sums
---

# --description--

Sia $k$ un numero intero positivo detto square-pivot se c'è una coppia di numeri interi $m > 0$ e $n ≥ k$, cossìcché la somma dei ($m + 1$) quadrati consecutivi fino a $k$ sia guale alla somma dei $m$ quadrati consecutivi a partire da ($n + 1$):

$${(k - m)}^2 + \ldots + k^2 = {(n + 1)}^2 + \ldots + {(n + m)}^2$$

Alcuni piccoli square-pivot sono

$$\begin{align}   & \mathbf{4}: 3^2 + \mathbf{4}^2 = 5^2 \\\\
  & \mathbf{21}: {20}^2 + \mathbf{21}^2 = {29}^2 \\\\   & \mathbf{24}: {21}^2 + {22}^2 + {23}^2 + \mathbf{24}^2 = {25}^2 + {26}^2 + {27}^2 \\\\
  & \mathbf{110}: {108}^2 + {109}^2 + \mathbf{110}^2 = {133}^2 + {134}^2 \\\\ \end{align}$$

Trova la somma dei square pivot distinti $≤ {10}^{10}$.

# --hints--

`pivotalSquareSums()` dovrebbe restituire `238890850232021`.

```js
assert.strictEqual(pivotalSquareSums(), 238890850232021);
```

# --seed--

## --seed-contents--

```js
function pivotalSquareSums() {

  return true;
}

pivotalSquareSums();
```

# --solutions--

```js
// solution required
```
