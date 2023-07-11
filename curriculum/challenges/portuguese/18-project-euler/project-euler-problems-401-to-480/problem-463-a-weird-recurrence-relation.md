---
id: 5900f53c1000cf542c51004e
title: 'Problema 463: Uma relação de recorrência estranha'
challengeType: 1
forumTopicId: 302138
dashedName: problem-463-a-weird-recurrence-relation
---

# --description--

A função $f$ é definida para todos os números inteiros positivos da seguinte forma:

$$\begin{align}   & f(1) = 1 \\\\
  & f(3) = 3 \\\\   & f(2n) = f(n) \\\\
  & f(4n + 1) = 2f(2n + 1) - f(n) \\\\ & f(4n + 3) = 3f(2n + 1) - 2f(n) \end{align}$$

A função $S(n)$ é definida como $\sum_{i=1}^{n} f(i)$.

$S(8) = 22$ e $S(100) = 3604$.

Encontre $S(3^{37})$. Dê os últimos 9 algarismos da sua resposta.

# --hints--

`weirdRecurrenceRelation()` deve retornar `808981553`.

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
