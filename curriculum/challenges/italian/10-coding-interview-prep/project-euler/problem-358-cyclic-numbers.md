---
id: 5900f4d21000cf542c50ffe5
title: 'Problema 358: Numeri ciclici'
challengeType: 1
forumTopicId: 302018
dashedName: problem-358-cyclic-numbers
---

# --description--

Un numero ciclico con $n$ cifre ha una proprietà molto interessante:

Quando è moltiplicato per 1, 2, 3, 4, ... $n$, tutti i prodotti hanno esattamente le stesse cifre, nello stesso ordine, ma ruotate in modo circolare!

Il numero ciclico più piccolo è il numero a 6 cifre 142857:

$$\begin{align}   & 142857 × 1 = 142857 \\\\
  & 142857 × 2 = 285714 \\\\   & 142857 × 3 = 428571 \\\\
  & 142857 × 4 = 571428 \\\\   & 142857 × 5 = 714285 \\\\
  & 142857 × 6 = 857142 \end{align}$$

Il successivo numero ciclico è 0588235294117647 con 16 cifre:

$$\begin{align}   & 0588235294117647 × 1 = 0588235294117647 \\\\
  & 0588235294117647 × 2 = 1176470588235294 \\\\   & 0588235294117647 × 3 = 1764705882352941 \\\\
  & \ldots \\\\ & 0588235294117647 × 16 = 9411764705882352 \end{align}$$

Nota che per i numeri ciclici gli zeri iniziali sono importanti.

C'è solo un numero ciclico per il quale le undici cifre più a sinistra sono 00000000137 e le cinque cifre più a destra sono 56789 (cioè ha la forma $00000000137\ldots56789$ con un numero sconosciuto di cifre nel mezzo). Trova la somma di tutte le sue cifre.

# --hints--

`cyclicNumbers()` dovrebbe restituire `3284144505`.

```js
assert.strictEqual(cyclicNumbers(), 3284144505);
```

# --seed--

## --seed-contents--

```js
function cyclicNumbers() {

  return true;
}

cyclicNumbers();
```

# --solutions--

```js
// solution required
```
