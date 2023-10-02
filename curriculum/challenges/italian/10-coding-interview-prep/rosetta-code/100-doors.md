---
id: 594810f028c0303b75339acb
title: 100 porte
challengeType: 1
forumTopicId: 302217
dashedName: 100-doors
---

# --description--

Ci sono 100 porte in fila che sono inizialmente tutte chiuse. Fai 100 passaggi vicino alle porte. La prima volta che passi, visiti ogni porta e la azioni (se la porta è chiusa la apri, se è aperta la chiudi). La seconda volta, visita solo ogni seconda porta (cioè le porte numer 2, 4, 6...) e azionala. La terza volta, visita ogni terza porta (cioè, porta #3, #6, #9, ...), ecc., fino a quando non visiti solo la centesima porta.

# --instructions--

Implementa una funzione che determina lo stato delle porte dopo l'ultimo passaggio. Alla fine restituisci un array che contiene il numero di una porta solo se questa è aperta alla fine.

# --hints--

`getFinalOpenedDoors` dovrebbe essere una funzione.

```js
assert(typeof getFinalOpenedDoors === 'function');
```

`getFinalOpenedDoors` dovrebbe restituire un array.

```js
assert(Array.isArray(getFinalOpenedDoors(100)));
```

`getFinalOpenedDoors` dovrebbe produrre il risultato corretto.

```js
assert.deepEqual(getFinalOpenedDoors(100), solution);
```

# --seed--

## --after-user-code--

```js
const solution = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

## --seed-contents--

```js
function getFinalOpenedDoors(numDoors) {

}
```

# --solutions--

```js
function getFinalOpenedDoors(numDoors) {
  // this is the final pattern (always squares).
  // thus, the most efficient solution simply returns an array of squares up to numDoors).
  const finalState = [];
  let i = 1;
  while (Math.pow(i, 2) <= numDoors) {
    finalState.push(Math.pow(i, 2));
    i++;
  }
  return finalState;
}
```
