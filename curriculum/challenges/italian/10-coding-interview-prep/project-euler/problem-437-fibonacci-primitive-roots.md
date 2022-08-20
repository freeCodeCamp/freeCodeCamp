---
id: 5900f5241000cf542c510036
title: 'Problema 437: le radici primitive di Fibonacci'
challengeType: 1
forumTopicId: 302108
dashedName: problem-437-fibonacci-primitive-roots
---

# --description--

Quando calcoliamo $8^n$ modulo 11 per $n = 0$ fino a 9 otteniamo: 1, 8, 9, 6, 4, 10, 3, 2, 5, 7.

Come possiamo vedere appaiono tutti i valori possibili da 1 a 10. Quindi 8 è una radice primitiva di 11.

Ma c'è di più:

Se guardiamo più da vicino vediamo:

$$\begin{align}   & 1 + 8 = 9 \\\\
  & 8 + 9 = 17 ≡ 6\bmod 11 \\\\   & 9 + 6 = 15 ≡ 4\bmod 11 \\\\
  & 6 + 4 = 10 \\\\   & 4 + 10 = 14 ≡ 3\bmod 11 \\\\
  & 10 + 3 = 13 ≡ 2\bmod 11 \\\\   & 3 + 2 = 5 \\\\
  & 2 + 5 = 7 \\\\ & 5 + 7 = 12 ≡ 1\bmod 11. \end{align}$$

Quindi le potenze di 8 mod 11 sono cicliche con periodo 10, e $8^n + 8^{n + 1} ≡ 8^{n + 2} (\text{mod } 11)$. 8 è chiamata radice primitiva di Fibonacci di 11.

Non tutti i primi hanno una radice primitiva di Fibonacci. Ci sono 323 primi minori di 10000 con una o più radici primitive di Fibonacci e la somma di questi primi è 1480491.

Trova la somma dei primi minori di $100\\,000\\,000$ con almeno una radice primitiva di Fibonacci.

# --hints--

`fibonacciPrimitiveRoots()` dovrebbe restituire `74204709657207`.

```js
assert.strictEqual(fibonacciPrimitiveRoots(), 74204709657207);
```

# --seed--

## --seed-contents--

```js
function fibonacciPrimitiveRoots() {

  return true;
}

fibonacciPrimitiveRoots();
```

# --solutions--

```js
// solution required
```
