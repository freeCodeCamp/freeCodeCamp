---
id: 5900f3d61000cf542c50fee7
title: 'Problema 103: Quantidade especial de subconjuntos: ideal'
challengeType: 1
forumTopicId: 301727
dashedName: problem-103-special-subset-sums-optimum
---

# --description--

Vamos $S(A)$ representar a soma dos elementos no conjunto A, de tamanho n. Vamos chamá-la de uma soma especial definida se, para dois subconjuntos disjuntos, B e C, as seguintes propriedades são verdadeiras:

1. $S(B) ≠ S(C)$; ou seja, somas de subconjuntos não podem ser iguais.
2. Se B contém mais elementos que C, $S(B) > S(C)$.

Se $S(A)$ for minimizado por um determinado n, vamos chamar de um conjunto de soma especial ideal. Os primeiros cinco conjuntos de somas especiais ideais são fornecidos abaixo.

$$\begin{align}   & n = 1: \\{1\\} \\\\
  & n = 2: \\{1, 2\\} \\\\   & n = 3: \\{2, 3, 4\\} \\\\
  & n = 4: \\{3, 5, 6, 7\\} \\\\   & n = 5: \\{6, 9, 11, 12, 13\\} \\\\
\end{align}$$

Parece que, para um determinado conjunto ideal, $A = \\{a_1, a_2, \ldots, a_n\\}$, o próximo conjunto ideal é do formato $B = \\{b, a_1 + b, a_2 + b, \ldots, a_n + b\\}$, onde b é o elemento do "meio" na linha anterior.

Aplicando esta "regra", esperaríamos que o conjunto ideal para $n = 6$ fosse $A = \\{11, 17, 20, 22, 23, 24\\}$, com $S(A) = 117$. No entanto, este não é o conjunto ideal, já que apenas aplicamos um algoritmo para fornecer um conjunto quase ideal. O conjunto ideal para $n = 6$ é $A = \\{11, 18, 19, 20, 22, 25\\}$, com $S(A) = 115$ e string correspondente do conjunto: `111819202225`.

Dado que A é uma soma especial ideal para $n = 7$, encontre sua string definida.

**Observação:** este problema está relacionado ao Problema 105 e ao Problema 106.

# --hints--

`optimumSpecialSumSet()` deve retornar a string `20313839404245`.

```js
assert.strictEqual(optimumSpecialSumSet(), '20313839404245');
```

# --seed--

## --seed-contents--

```js
function optimumSpecialSumSet() {

  return true;
}

optimumSpecialSumSet();
```

# --solutions--

```js
// solution required
```
