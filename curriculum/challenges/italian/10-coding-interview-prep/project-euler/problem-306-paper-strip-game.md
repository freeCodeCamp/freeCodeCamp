---
id: 5900f49f1000cf542c50ffb1
title: 'Problema 306: Gioco della striscia di carta'
challengeType: 1
forumTopicId: 301960
dashedName: problem-306-paper-strip-game
---

# --description--

Il seguente gioco è un classico esempio di Teoria dei Giochi Combinatoriale:

Due giocatori iniziano con una striscia di $n$ quadrati bianchi e si alternano i turni. A ogni turno, un giocatore sceglie due quadrati bianchi contigui e li colora di nero. Il primo giocatore che non può fare una mossa, perde.

- $n = 1$: Non ci sono mosse valide, quindi il primo giocatore perde automaticamente.
- $n = 2$: Solo una mossa valida, dopo la quale il secondo giocatore perde.
- $n = 3$: Due mosse valide, ma entrambe lasciano una situazione in cui il secondo giocatore perde.
- $n = 4$: Ci sono tre mosse valide per il primo giocatore; il quale può vincere colorando i due quadrati centrali.
- $n = 5$: Quattro mosse valide per il primo giocatore (mostrate sotto in rosso); ma qualsiasi mossa sceglie, il secondo giocatore (blu) vince.

<img class="img-responsive center-block" alt="mosse iniziali valide per una striscia con 5 quadrati" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-strip-game.gif" style="background-color: white; padding: 10px;" />

Quindi, per $1 ≤ n ≤ 5$, ci sono 3 valori di $n$ per cui il primo giocatore può forzare una vittoria.

In maniera simile, per 1 ≤ n ≤ 50$, ci sono 40 valori di $n$ per cui il primo giocatore può forzare una vittoria.

Per $1 ≤ n ≤ 1\\,000\\,000$, quanti valori di $n$ ci sono per cui il primo giocatore può forzare una vittoria?

# --hints--

`paperStripGame()` dovrebbe restituire `852938`.

```js
assert.strictEqual(paperStripGame(), 852938);
```

# --seed--

## --seed-contents--

```js
function paperStripGame() {

  return true;
}

paperStripGame();
```

# --solutions--

```js
// solution required
```
