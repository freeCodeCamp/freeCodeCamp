---
id: 5900f4d91000cf542c50ffea
title: 'Problema 364: Distanza confortevole'
challengeType: 1
forumTopicId: 302025
dashedName: problem-364-comfortable-distance
---

# --description--

Ci sono $N$ posti in fila. $N$ persone vengono una dopo l'altra per riempire i posti secondo le seguenti regole:

1. Se esiste un sedile i cui sedili adiacenti non sono occupati prendono tale sedile.
2. Se questo posto è occupato e c'è un posto per il quale solo un posto adiacente è occupato si prende tale posto.
3. Altrimenti si prende uno dei posti disponibili rimanenti.

Sia $T(N)$ il numero di possibilità che $N$ posti siano occupati da $N$ persone con le regole date. La seguente figura mostra $T(4) = 8$.

<img class="img-responsive center-block" alt="otto modi per occupare N posti con N persone" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance.gif" style="background-color: white; padding: 10px;" />

Possiamo verificare che $T(10) = 61\\,632$ e $T(1\\,000)\bmod 100\\,000\\,007 = 47\\,255\\,094$.

Trova $T(1\\,000\\,000)\bmod 100\\,000\\,007$.

# --hints--

`comfortableDistance()` dovrebbe restituire `44855254`.

```js
assert.strictEqual(comfortableDistance(), 44855254);
```

# --seed--

## --seed-contents--

```js
function comfortableDistance() {

  return true;
}

comfortableDistance();
```

# --solutions--

```js
// solution required
```
