---
id: 5900f4d21000cf542c50ffe5
title: 'Problema 358: Números cíclicos'
challengeType: 1
forumTopicId: 302018
dashedName: problem-358-cyclic-numbers
---

# --description--

A cyclic number with $n$ digits has a very interesting property:

Cuándo este es multiplicado por 1, 2, 3, 4, ... $n$, todos los productos tienen exactamente los mismo dígitos, en el mismo orden, pero rotados en una forma circular!

El número cíclico más pequeño es el número de 6 dígitos 142857:

$$\begin{align}   & 142857 × 1 = 142857 \\\\
  & 142857 × 2 = 285714 \\\\   & 142857 × 3 = 428571 \\\\
  & 142857 × 4 = 571428 \\\\   & 142857 × 5 = 714285 \\\\
  & 142857 × 6 = 857142 \end{align}$$

El siguiente número cíclico es 0588235294117647 con 16 dígitos:

$$\begin{align}   & 0588235294117647 × 1 = 0588235294117647 \\\\
  & 0588235294117647 × 2 = 1176470588235294 \\\\   & 0588235294117647 × 3 = 1764705882352941 \\\\
  & \ldots \\\\ & 0588235294117647 × 16 = 9411764705882352 \end{align}$$

Note que para números cíclicos, son importantes los ceros principales.

Hay solo un número cíclico para el cual, los once dígitos más a la izquierda son 00000000137 y los cinco dígitos más a la derecha son 56789 (p.ej., este tiene la forma $00000000137\ldots56789$ con un número desconocido de dígitos en el medio). Encuentra la suma de todos sus dígitos.

# --hints--

`cyclicNumbers()` debería devolver `3284144505`.

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
