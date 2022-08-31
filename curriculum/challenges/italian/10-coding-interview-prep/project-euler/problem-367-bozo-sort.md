---
id: 5900f4db1000cf542c50ffee
title: 'Problema 367: Bozo sort'
challengeType: 1
forumTopicId: 302028
dashedName: problem-367-bozo-sort
---

# --description--

Bozo sort, da non confondersi con il'algoritmo leggermente meno efficiente bogo sort, consiste nel controllare se la sequenza di input è ordinata, e se non lo è scambiare a caso due elementi. Questo viene ripetuto fino a che la sequenza non è eventualmente in ordine.

Se consideriamo tutte le permutazioni dei primi 4 numeri naturali come input, il valore di aspettazione del numero di scambi, mediato su tutte le $4!$ sequenze di input è $24.75$.

La sequenza già ordinata ha bisogno di 0 step.

In questo problema consideriamo le seguenti varianti nel bozo sort.

Se la sequenza non è in ordine, scegliamo 3 elementi a caso e mescoliamo questi tre elementi casualmente.

Tutte le $3! = 6$ permutazioni di questi tre elementi sono altrettanto probabili.

La sequenza già ordinata ha bisogno di 0 step.

Se consideriamo tutte le permutazioni dei primi 4 numeri naturali come input, il valore di aspettazione del numero di mescolamenti, mediato su tutte le $4!$ sequenze di input è $27.5$.

Considera come sequenze di input le permutazioni dei primi 11 numeri naturali.

Mediato su tutte le $11!$ sequenze di input, qual è il numero medio di mescolamenti che questo algoritmo performerà? Dai la tua risposta arrotondata al numero intero più vicino.

# --hints--

`bozoSort()` dovrebbe restituire `48271207`.

```js
assert.strictEqual(bozoSort(), 48271207);
```

# --seed--

## --seed-contents--

```js
function bozoSort() {

  return true;
}

bozoSort();
```

# --solutions--

```js
// solution required
```
