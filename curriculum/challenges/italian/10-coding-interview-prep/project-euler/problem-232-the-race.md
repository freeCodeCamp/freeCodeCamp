---
id: 5900f4551000cf542c50ff67
title: 'Problema 232: La Gara'
challengeType: 1
forumTopicId: 301876
dashedName: problem-232-the-race
---

# --description--

Due giocatori condividono una moneta imparziale e la prendono a turno per giocare "La Gara".

Nel turno del giocatore 1, egli lancia la moneta una volta: se esce testa, guadagna un punto; se esce croce non guadagna nulla.

Il giocatore 2 nel suo turno sceglie un numero intero $T$ e lancia la moneta $T$ volte: se vengono tutte teste, guadagna $2^{T - 1}$ punti, altrimenti non guadagna nulla.

Il giocatore 1 va per primo. Il vincitore è chi guadagna per primo 100 o più punti.

A ogni turno il Giocatore 2 seleziona il numero, $T$, di lanci di moneta che massimizza la probabilità della sua vincita.

Qual è la probabilità che il giocatore 2 vinca?

Dai la tua risposta arrotondata a otto decimali nel formato 0.abcdefgh .

# --hints--

`theRace()` dovrebbe restituire `0.83648556`.

```js
assert.strictEqual(theRace(), 0.83648556);
```

# --seed--

## --seed-contents--

```js
function theRace() {

  return true;
}

theRace();
```

# --solutions--

```js
// solution required
```
