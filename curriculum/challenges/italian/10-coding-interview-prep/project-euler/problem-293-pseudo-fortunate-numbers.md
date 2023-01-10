---
id: 5900f4931000cf542c50ffa4
title: 'Problema 293: Numeri Pseudo-Fortunati'
challengeType: 1
forumTopicId: 301945
dashedName: problem-293-pseudo-fortunate-numbers
---

# --description--

Un intero pari positivo $N$ sarà chiamato ammissibile, se è una potenza di 2 o i suoi distinti fattori primi sono primi consecutivi.

I primi dodici numeri ammissibili sono 2, 4, 6, 8, 12, 16, 18, 24, 30, 32, 36, 48.

Se $N$ è ammissibile, il più piccolo numero intero $M > 1$ tale che la somma $N + M$ sia prima, sarà chiamato il numero pseudo-fortunato per $N$.

Ad esempio $N = 630$ è ammissibile in quanto è pari e i suoi distinti fattori primi sono i primi consecutivi 2, 3, 5 e 7. Il numero primo successivo a 631 è 641; quindi il numero pseudo-fortunato per 630 è $M = 11$. Si può anche vedere che il numero pseudo-fortunato per 16 è 3.

Trova la somma di tutti i numeri pseudo-fortunati distinti per i numeri ammissibili $N$ minori di ${10}^9$.

# --hints--

`pseudoFortunateNumbers()` dovrebbe restituire `2209`.

```js
assert.strictEqual(pseudoFortunateNumbers(), 2209);
```

# --seed--

## --seed-contents--

```js
function pseudoFortunateNumbers() {

  return true;
}

pseudoFortunateNumbers();
```

# --solutions--

```js
// solution required
```
