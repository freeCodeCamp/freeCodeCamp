---
id: 5900f4fe1000cf542c510010
title: 'Problema 400: gioco dell''albero di Fibonacci'
challengeType: 1
forumTopicId: 302067
dashedName: problem-400-fibonacci-tree-game
---

# --description--

Un albero di Fibonacci è un albero binario definito ricorsivamente come:

- $T(0)$ è l'albero vuoto.
- $T(1)$ è l'albero binario con un solo nodo.
- $T(k)$ consiste in un nodo radice che ha $T(k - 1)$ e $T(k - 2)$ come figli.

Su un tale albero due giocatori giocano una partita da asporto. Ad ogni giro, un giocatore seleziona un nodo e rimuove quel nodo insieme al sottoalbero radicato in quel nodo. Il giocatore che è costretto a prendere il nodo radice dell'intero albero perde.

Ecco le mosse vincenti del primo giocatore al primo turno per $T(k)$ da $k = 1$ a $k = 6$.

<img class="img-responsive center-block" alt="le mosse vincenti del primo giocatore, al primo turno per k = 1 a k = 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/fibonacci-tree-game.png" style="background-color: white; padding: 10px;" />

Sia$f(k)$ il numero di mosse vincenti del primo giocatore (es. le mosse per le quali il secondo giocatore non ha alcuna strategia vincente) al primo turno del gioco quando questo gioco è giocato su $T(k)$.

Ad esempio, $f(5) = 1$ e $f(10) = 17$.

Trova $f(10000)$. Dai le ultime 18 cifre della tua risposta.

# --hints--

`fibonacciTreeGame()` dovrebbe restituire `438505383468410600`.

```js
assert.strictEqual(fibonacciTreeGame(), 438505383468410600);
```

# --seed--

## --seed-contents--

```js
function fibonacciTreeGame() {

  return true;
}

fibonacciTreeGame();
```

# --solutions--

```js
// solution required
```
