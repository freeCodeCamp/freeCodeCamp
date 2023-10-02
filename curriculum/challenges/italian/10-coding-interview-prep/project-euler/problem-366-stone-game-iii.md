---
id: 5900f4da1000cf542c50ffed
title: 'Problema 366: Gioco delle pietre III'
challengeType: 1
forumTopicId: 302027
dashedName: problem-366-stone-game-iii
---

# --description--

Due giocatori, Anton e Bernhard, stanno giocando il seguente gioco.

C'è una pila di $n$ pietre.

Il primo giocatore può rimuovere qualsiasi numero positivo di pietre, ma non l'intera pila.

Successivamente, ogni giocatore può rimuovere al massimo il doppio del numero di pietre che il suo avversario ha preso nella mossa precedente.

Il giocatore che rimuove l'ultima pietra vince.

Ad es. $n = 5$

Se il primo giocatore prende più di una pietra il giocatore successivo sarà in grado di prendere tutte le pietre rimaste.

Se il primo giocatore prende una pietra, lasciandone quattro, anche il suo avversario prenderà una pietra, lasciando tre pietre.

Il primo giocatore non può prenderle tutte e tre perché può prendere al massimo $2 \times 1 = 2$ pietre. Quindi diciamo che anche lui prende una pietra, lasciandone 2.

Il secondo giocatore può prendere le due pietre rimanenti e vince.

Quindi 5 è una posizione perdente per il primo giocatore.

Per alcune posizioni vincenti c'è più di una possibile mossa per il primo giocatore.

Ad es. quando $n = 17$ il primo giocatore può rimuovere una o quattro pietre.

Sia $M(n)$ il numero massimo di pietre che il primo giocatore può prendere da una posizione vincente al suo primo turno e $M(n) = 0$ per qualsiasi altra posizione.

$\sum M(n)$ per $n ≤ 100$ è 728.

Trova $\sum M(n)$ per $n ≤ {10}^{18}$. Dai la tua risposta nel formato ${10}^8$.

# --hints--

`stoneGameThree()` dovrebbe restituire `88351299`.

```js
assert.strictEqual(stoneGameThree(), 88351299);
```

# --seed--

## --seed-contents--

```js
function stoneGameThree() {

  return true;
}

stoneGameThree();
```

# --solutions--

```js
// solution required
```
