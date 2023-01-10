---
id: 5900f4701000cf542c50ff83
title: 'Problema 260: Gioco delle pietre'
challengeType: 1
forumTopicId: 301909
dashedName: problem-260-stone-game
---

# --description--

Un gioco si gioca con tre mucchi di pietre e due giocatori.

Al turno di ogni giocatore, il giocatore rimuove una o più pietre dai mucchi. Tuttavia, se il giocatore preleva pietre da più di una pila, lo stesso numero di pietre deve essere rimosso da ciascuna delle pile selezionate.

In altre parole, il giocatore sceglie alcuni $N > 0$ e rimuove:

- $N$ pietre da una singola pila qualsiasi; o
- $N$ pietre da due pile qualsiasi ($2N$ totale); o
- $N$ pietre da ciascuna delle tre pile ($3N$ totale).

Il giocatore che prende l'ultima pietra vince la partita.

Una configurazione vincente è quella in cui il primo giocatore può forzare una vittoria.

Ad esempio, (0,0,13), (0,11,11) e (5,5,5) sono configurazioni vincenti perché il primo giocatore può immediatamente rimuovere tutte le pietre.

Una configurazione perdente è quella in cui il secondo giocatore può forzare una vittoria, indipendentemente da ciò che fa il primo giocatore.

Ad esempio, (0,1,2) e (1,3,3) sono configurazioni perdenti: qualsiasi mossa lecita lascia una configurazione vincente per il secondo giocatore.

Considera tutte le configurazioni perdenti ($x_i$,$y_i$,$z_i$) dove $x_i ≤ y_i ≤ z_i ≤ 100$. Possiamo verificare che $\sum (x_i + y_i + z_i) = 173\\,895$ per queste.

Trova $\sum (x_i + y_i + z_i)$ dove ($x_i$,$y_i$,$z_i$) varia sulle configurazioni perdenti con $x_i ≤ y_i ≤ z_i ≤ 1000$.

# --hints--

`stoneGame()` dovrebbe restituire `167542057`.

```js
assert.strictEqual(stoneGame(), 167542057);
```

# --seed--

## --seed-contents--

```js
function stoneGame() {

  return true;
}

stoneGame();
```

# --solutions--

```js
// solution required
```
