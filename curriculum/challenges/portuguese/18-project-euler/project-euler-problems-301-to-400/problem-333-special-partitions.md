---
id: 5900f4b91000cf542c50ffcc
title: 'Problema 333: Partições especiais'
challengeType: 1
forumTopicId: 301991
dashedName: problem-333-special-partitions
---

# --description--

Todos os números inteiros positivos podem ser divididos de tal forma que cada termo da partição pode ser expresso como $2^i \times 3^j$, onde $i, j ≥ 0$.

Consideremos apenas aquelas partições em que nenhum dos termos pode dividir qualquer um dos outros termos. Por exemplo, a partição de $17 = 2 + 6 + 9 = (2^1 \times 3^0 + 2^1 \times 3^1 + 2^0 \times 3^2)$ não seria válida, pois 2 pode dividir 6. Tão pouco a partição $17 = 16 + 1 = (2^4 \times 3^0 + 2^0 \times 3^0)$ seria válida, já que 1 pode dividir 16. A única partição válida de 17 seria $8 + 9 = (2^3 \times 3^0 + 2^0 \times 3^2)$.

Muitos números inteiros têm mais de uma partição válida, sendo o primeiro 11 tendo as duas partições que seguem.

$$\begin{align}   & 11 = 2 + 9 = (2^1 \times 3^0 + 2^0 \times 3^2) \\\\
  & 11 = 8 + 3 = (2^3 \times 3^0 + 2^0 \times 3^1) \end{align}$$

Vamos definir $P(n)$ como o número de partições válidas de $n$. Por exemplo, $P(11) = 2$.

Vamos considerar apenas os números inteiros primos $q$ que teriam uma única partição válida como $P(17)$.

A soma dos primos $q &lt;100$, tal que $P(q) = 1$ é igual a 233.

Encontre a soma dos números primos $q &lt; 1.000.000$ tal que $P(q) = 1$.

# --hints--

`specialPartitions()` deve retornar `3053105`.

```js
assert.strictEqual(specialPartitions(), 3053105);
```

# --seed--

## --seed-contents--

```js
function specialPartitions() {

  return true;
}

specialPartitions();
```

# --solutions--

```js
// solution required
```
