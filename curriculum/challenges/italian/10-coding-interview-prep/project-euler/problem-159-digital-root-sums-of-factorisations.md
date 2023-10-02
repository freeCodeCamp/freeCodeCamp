---
id: 5900f40c1000cf542c50ff1e
title: 'Problema 159: Somma di radici numeriche di fattorizzazione'
challengeType: 1
forumTopicId: 301790
dashedName: problem-159-digital-root-sums-of-factorisations
---

# --description--

Un numero composito può essere fattorizzato in molti modi diversi.

Per esempio, senza includere la moltiplicazione per 1, 24 può essere fattorizzato in 7 modi distinti:

$$\begin{align}   & 24 = 2 \times 2 \times 2 \times 3\\\\
  & 24 = 2 \times 3 \times 4  \\\\   & 24 = 2 \times 2 \times 6  \\\\
  & 24 = 4 \times 6    \\\\   & 24 = 3 \times 8    \\\\
  & 24 = 2 \times 12   \\\\ & 24 = 24 \end{align}$$

Ricordati che le radice numerica di un numero, in base 10, si trova sommando le cifre del numero e ripetendo il processo fino a che il risultato non è inferiore a 10. Quindi la radice numerica di 467 è 8.

Sia la Digital Root Sum (DRS) la somma delle radici numeriche dei fattori individuali dei nostri numeri. La tabella sotto mostra tutti i valori DRS di 24.

| Fattorizzazione | DRS |
| --------------- | --- |
| 2x2x2x3         | 9   |
| 2x3x4           | 9   |
| 2x2x6           | 10  |
| 4x6             | 10  |
| 3x8             | 11  |
| 2x12            | 5   |
| 24              | 6   |

La DRS più grande di 24 è 11. La funzione $mdrs(n)$ restituisce il massimo DRS di $n$. Quindi $mdrs(24) = 11$.

Trova $\sum{mdrs(n)}$ per $1 &lt; n &lt; 1 000 000$.

# --hints--

`euler159()` dovrebbe restituire `14489159`.

```js
assert.strictEqual(euler159(), 14489159);
```

# --seed--

## --seed-contents--

```js
function euler159() {

  return true;
}

euler159();
```

# --solutions--

```js
// solution required
```
