---
id: 5900f44f1000cf542c50ff61
title: 'Problema 227: l''inseguimento'
challengeType: 1
forumTopicId: 301870
dashedName: problem-227-the-chase
---

# --description--

"L'inseguimento" è un gioco che si svolge usando due dadi e un numero pari di giocatori.

I giocatori si siedono intorno a un tavolo; il gioco inizia con due giocatori opposti che hanno un dado ciascuno. A ogni turno, i due giocatori con un dado lanciano.

Se il giocatore lancia un 1, passa il dado al suo vicino a sinistra.

Se il giocatore lancia un 6, passa il dado al suo vicino sulla destra.

Altrimenti, mantiene il dado per il prossimo turno.

Il gioco termina quando un giocatore ha entrambi i dadi dopo che sono stati lanciati e passati; quel giocatore ha perso.

In una partita con 100 giocatori, qual è il numero previsto di turni del gioco? Dai la tua risposta arrotondata a dieci cifre significative.

# --hints--

`theChase()` dovrebbe restituire `3780.618622`.

```js
assert.strictEqual(theChase(), 3780.618622);
```

# --seed--

## --seed-contents--

```js
function theChase() {

  return true;
}

theChase();
```

# --solutions--

```js
// solution required
```
