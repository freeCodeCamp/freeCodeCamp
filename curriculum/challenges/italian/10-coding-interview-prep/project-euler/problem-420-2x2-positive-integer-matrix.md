---
id: 5900f5111000cf542c510023
title: 'Problema 420: matrice intera 2x2 positiva'
challengeType: 1
forumTopicId: 302090
dashedName: problem-420-2x2-positive-integer-matrix
---

# --description--

Una matrice intera positiva è una matrice i cui elementi sono tutti interi positivi.

Alcune matrici intere positive possono essere espresse come un quadrato di una matrice intera positiva in due modi diversi. Ecco un esempio:

$$$\begin{pmatrix}   40 & 12 \\\\
  48 & 40 \end{pmatrix}=
{\start{pmatrix}
  2 & 3 \\\\
 12 & 2 \end{pmatrix}}^2 =
{\start{pmatrix}
  6 & 1 \\\\
  4 & 6 \end{pmatrix}}^2$$

Definiamo $F(N)$ come il numero delle matrici intere positive 2x2 che hanno una traccia inferiore a N e che possono essere espresse come un quadrato di una matrice intera positiva in due modi diversi.

Possiamo verificare che $F(50) = 7$ e $F(1000) = 1019$.

Trova $F({10}^7)$.

# --hints--

`positiveIntegerMatrix()` dovrebbe restituire `145159332`.

```js
assert.strictEqual(positiveIntegerMatrix(), 145159332);
```

# --seed--

## --seed-contents--

```js
function positiveIntegerMatrix() {

  return true;
}

positiveIntegerMatrix();
```

# --solutions--

```js
// solution required
```
