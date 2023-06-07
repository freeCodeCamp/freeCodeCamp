---
id: 5900f5371000cf542c51004a
title: 'Problema 459: gioco dei rovesci'
challengeType: 1
forumTopicId: 302133
dashedName: problem-459-flipping-game
---

# --description--

Il gioco dei rovesci è un gioco per due giocatori giocato su un tabellone quadrato $N$ per $N$.

Ogni quadrato contiene un disco con un lato bianco e un lato nero.

Il gioco inizia con tutti i dischi che mostrano il lato bianco.

Un turno consiste nel capovolgere tutti i dischi in un rettangolo con le seguenti proprietà:

- l'angolo in alto a destra del rettangolo contiene un disco bianco
- la larghezza del rettangolo è un quadrato perfetto (1, 4, 9, 16, ...)
- l'altezza del rettangolo è un numero triangolare (1, 3, 6, 10, ...)

<img class="img-responsive center-block" alt="capovolgere tutti i dischi in un rettangolo 4x3 su una tabella 5x5" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-1.png" style="background-color: white; padding: 10px;" />

I giocatori si alternano nei turni. Un giocatore vince facendo in modo che tutta la griglia sia nera.

Sia $W(N)$ il numero di mosse vincenti per il primo giocatore su una scacchiera $N$ x $N$ con tutti i dischi bianchi, supponendo un gioco perfetto.

$W(1) = 1$, $W(2) = 0$, $W(5) = 8$ e $W({10}^2) = 31\\,395$.

Per $N = 5$, le prime otto mosse vincenti del giocatore sono:

<img class="img-responsive center-block" alt="le prime otto mosse vincenti per N = 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-2.png" style="background-color: white; padding: 10px;" />

Trova $W({10}^6)$.

# --hints--

`flippingGame()` dovrebbe restituire `3996390106631`.

```js
assert.strictEqual(flippingGame(), 3996390106631);
```

# --seed--

## --seed-contents--

```js
function flippingGame() {

  return true;
}

flippingGame();
```

# --solutions--

```js
// solution required
```
