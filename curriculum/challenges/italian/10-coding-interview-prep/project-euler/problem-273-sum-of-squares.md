---
id: 5900f47e1000cf542c50ff90
title: 'Problema 273: Somma di quadrati'
challengeType: 1
forumTopicId: 301923
dashedName: problem-273-sum-of-squares
---

# --description--

Considera le equazioni nella forma: $a^2 + b^2 = N$, $0 ≤ a ≤ b$, $a$, $b$ e $N$ interi.

Per $N = 65$ ci sono due soluzioni:

$a = 1, b = 8$ e $a = 4, b = 7$.

Chiamiamo $S(N)$ la somma dei valori di $a$ di tutte le soluzioni di $a^2 + b^2 = N$, $0 ≤ a ≤ b$, $a$, $b$ e $N$ interi.

Quindi $S(65) = 1 + 4 = 5$.

Trova $\sum S(N)$, per tutti i numeri privi di quadrati $N$ divisibili solo per i numeri primi di tipo $4k + 1$ con $4k + 1 &lt; 150$.

# --hints--

`sumOfSquares()` dovrebbe restituire `2032447591196869000`.

```js
assert.strictEqual(sumOfSquares(), 2032447591196869000);
```

# --seed--

## --seed-contents--

```js
function sumOfSquares() {

  return true;
}

sumOfSquares();
```

# --solutions--

```js
// solution required
```
