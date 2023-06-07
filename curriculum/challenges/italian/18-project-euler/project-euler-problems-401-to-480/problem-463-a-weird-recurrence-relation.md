---
id: 5900f53c1000cf542c51004e
title: 'Problema 463: una strana relazione ricorrente'
challengeType: 1
forumTopicId: 302138
dashedName: problem-463-a-weird-recurrence-relation
---

# --description--

La funzione $f$ è definita per tutti i numeri interi positivi come segue:

$$\begin{align}   & f(1) = 1 \\\\
  & f(3) = 3 \\\\   & f(2n) = f(n) \\\\
  & f(4n + 1) = 2f(2n + 1) - f(n) \\\\ & f(4n + 3) = 3f(2n + 1) - 2f(n) \end{align}$$

La funzione $S(n)$ è definita come $\sum_{i=1}^{n} f(i)$.

$S(8) = 22$ e $S(100) = 3604$.

Trova $S(3^{37})$. Dai le ultime 9 cifre della tua risposta.

# --hints--

`weirdRecurrenceRelation()` dovrebbe restituire `808981553`.

```js
assert.strictEqual(weirdRecurrenceRelation(), 808981553);
```

# --seed--

## --seed-contents--

```js
function weirdRecurrenceRelation() {

  return true;
}

weirdRecurrenceRelation();
```

# --solutions--

```js
// solution required
```
