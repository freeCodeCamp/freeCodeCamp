---
id: 5900f53e1000cf542c510051
title: 'Problema 466: Termos distintos em uma tabela de multiplicação'
challengeType: 1
forumTopicId: 302141
dashedName: problem-466-distinct-terms-in-a-multiplication-table
---

# --description--

Considere $P(m,n)$ como o número de termos distintos em uma tabela de multiplicação de $m×n$.

Por exemplo, uma tabela de multiplicação 3×4 fica assim:

$$\begin{array}{c}   ×          & \mathbf{1} & \mathbf{2} & \mathbf{3} & \mathbf{4}  \\\\
  \mathbf{1} & 1          & 2          & 3          & 4  \\\\   \mathbf{2} & 2          & 4          & 6          & 8  \\\\
  \mathbf{3} & 3          & 6          & 9          & 12 \end{array}$$

Existem 8 termos distintos {1, 2, 3, 4, 6, 8, 9, 12}, portanto $P(3, 4) = 8$.

Você é informado de que:

$$\begin{align}   & P(64, 64) = 1.263, \\\\
  & P(12, 345) = 1.998, \text{ e} \\\\   & P(32, {10}^{15}) = 13.826.382.602.124.302. \\\\
\end{align}$$

Encontre $P(64, {10}^{16})$.

# --hints--

`multiplicationTable()` deve retornar `258381958195474750`.

```js
assert.strictEqual(multiplicationTable(), 258381958195474750);
```

# --seed--

## --seed-contents--

```js
function multiplicationTable() {

  return true;
}

multiplicationTable();
```

# --solutions--

```js
// solution required
```
