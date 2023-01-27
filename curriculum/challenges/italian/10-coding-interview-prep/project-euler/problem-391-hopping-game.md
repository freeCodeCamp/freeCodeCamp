---
id: 5900f4f31000cf542c510006
title: 'Problema 391: Gioco salterino'
challengeType: 1
forumTopicId: 302056
dashedName: problem-391-hopping-game
---

# --description--

Sia $s_k$ il numero di 1 quando scriviamo i numeri da 0 a $k$ in binario.

Per esempio, scrivendo da 0 a 5 in binario, abbiamo 0, 1, 10, 11, 100, 101. Ci sono sette 1, quindi $s_5 = 7$.

La sequenza $S = \\{s_k : k ≥ 0\\}$ inizia con $\\{0, 1, 2, 4, 5, 7, 9, 12, \ldots\\}$.

Un gioco è giocato da due giocatori. Prima dell'inizio della partita, viene scelto il numero $n$. Un contatore $c$ inizia a 0. Ad ogni turno, il giocatore sceglie un numero da 1 a $n$ (incluso) e aumenta $c$ di quel numero. Il valore risultante di $c$ deve essere un membro di $S$. Se non ci sono più mosse valide, il giocatore perde.

Ad esempio, con $n = 5$ e a partire da $c = 0$:

- Il giocatore 1 sceglie 4, quindi $c$ diventa $0 + 4 = 4$.
- Il giocatore 2 sceglie 5, quindi $c$ diventa $4 + 5 = 9$.
- Il giocatore 1 sceglie 3, quindi $c$ diventa $9 + 3 = 12$.
- ecc.

Nota che $c$ deve sempre appartenere a $S$ e ogni giocatore può aumentare $c$ al massimo di $n$.

Sia $M(n)$ il numero più alto che il primo giocatore può scegliere al suo primo turno per forzare una vittoria, e $M(n) = 0$ se non c'è una mossa del genere. Per esempio, $M(2) = 2$, $M(7) = 1$ e $M(20) = 4$.

Si può verificare che $\sum M{(n)}^3 = 8150$ per $1 ≤ n ≤ 20$.

Trova $\sum M{(n)}^3$ per $1 ≤ n ≤ 1000$.

# --hints--

`hoppingGame()` dovrebbe restituire `61029882288`.

```js
assert.strictEqual(hoppingGame(), 61029882288);
```

# --seed--

## --seed-contents--

```js
function hoppingGame() {

  return true;
}

hoppingGame();
```

# --solutions--

```js
// solution required
```
