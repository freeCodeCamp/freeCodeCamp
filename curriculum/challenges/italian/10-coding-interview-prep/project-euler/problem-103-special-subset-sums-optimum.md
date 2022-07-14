---
id: 5900f3d61000cf542c50fee7
title: 'Problema 103: Somme speciali dei sottoinsiemi: ottimali'
challengeType: 1
forumTopicId: 301727
dashedName: problem-103-special-subset-sums-optimum
---

# --description--

Lascia che $S(A)$ rappresenti la somma degli elementi nel set A di dimensione n. La chiameremo una somma speciale se, per due sottoinsiemi disgiunti e non vuoti, B e C, le seguenti proprietà sono vere:

1. $S(B) ≠ S(C)$; cioè, le somme dei sottoinsiemi non possono essere uguali.
2. Se B contiene più elementi di C allora $S(B) > S(C)$.

Se $S(A)$ è minimizzata per un dato n, la chiameremo somma speciale di un set ottimale. Le prime cinque somme speciali di un set ottimale sono date sotto.

$$\begin{align}   & n = 1: \\{1\\} \\\\
  & n = 2: \\{1, 2\\} \\\\   & n = 3: \\{2, 3, 4\\} \\\\
  & n = 4: \\{3, 5, 6, 7\\} \\\\   & n = 5: \\{6, 9, 11, 12, 13\\} \\\\
\end{align}$$

Sembra che per un dato set ottimale, $A = \\{a_1, a_2, \ldots, a_n\\}$, il successivo set ottimale è della forma $B = \\{b, a_1 + b, a_2 + b, \ldots, a_n + b\\}$, dove b è l'elemento "di mezzo" della riga precedente.

Apllicando la "regola" ci aspetteremmo il set ottimale per $n = 6$ sia $A = \\{11, 17, 20, 22, 23, 24\\}$, con $S(A) = 117$. Invece, questo non è il set ottimale, visto che abbiamo semplicemente applicato un algoritmo per ottenere un set quasi ottimale. Il set ottimale per $n = 6$ è $A = \\{11, 18, 19, 20, 22, 25\\}$, con $S(A) = 115$ e la stringa set corrispondente: `111819202225`.

Dato che A è un set ottimale di somma speciale per for $n = 7$, trova la sua stringa.

**Nota:** Questo problema è legato al Problema 105 e al Problema 106.

# --hints--

`optimumSpecialSumSet()` dovrebbe restituire la stringa `20313839404245`.

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
