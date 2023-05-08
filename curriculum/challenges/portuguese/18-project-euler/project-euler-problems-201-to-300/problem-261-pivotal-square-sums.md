---
id: 5900f4711000cf542c50ff84
title: 'Problema 261: Soma dos quadrados pivotais'
challengeType: 1
forumTopicId: 301910
dashedName: problem-261-pivotal-square-sums
---

# --description--

Vamos chamar um número inteiro positivo $k$ de um quadrado pivotal se houver um par de números inteiros $m > 0$ e $n ≥ k$, tal que a soma dos quadrados consecutivos ($m + 1$) até $k$ é igual a soma dos $m$ quadrados consecutivos de ($n + 1$) em:

$${(k - m)}^2 + \ldots + k^2 = {(n + 1)}^2 + \ldots + {(n + m)}^2$$

Alguns quadrados pivotais pequenos são

$$\begin{align}   & \mathbf{4}: 3^2 + \mathbf{4}^2 = 5^2 \\\\
  & \mathbf{21}: {20}^2 + \mathbf{21}^2 = {29}^2 \\\\   & \mathbf{24}: {21}^2 + {22}^2 + {23}^2 + \mathbf{24}^2 = {25}^2 + {26}^2 + {27}^2 \\\\
  & \mathbf{110}: {108}^2 + {109}^2 + \mathbf{110}^2 = {133}^2 + {134}^2 \\\\ \end{align}$$

Encontre a soma de todos os quadrados pivotais distintos $≤ {10}^{10}$.

# --hints--

`pivotalSquareSums()` deve retornar `238890850232021`.

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
