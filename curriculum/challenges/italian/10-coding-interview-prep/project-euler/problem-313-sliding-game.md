---
id: 5900f4a61000cf542c50ffb8
title: 'Problema 313: Gioco scorrevole'
challengeType: 1
forumTopicId: 301969
dashedName: problem-313-sliding-game
---

# --description--

In un gioco scorrevole un contatore può scorrere orizzontalmente o verticalmente in uno spazio vuoto. L'obiettivo del gioco è quello di spostare il contatore rosso dall'angolo in alto a sinistra di una griglia all'angolo in basso a destra; lo spazio inizia sempre nell'angolo in basso a destra. Ad esempio, la seguente sequenza di immagini mostra come il gioco può essere completato in cinque mosse su una griglia 2 per 2.

<img class="img-responsive center-block" alt="completamento della partita in cinque mosse sulla griglia 2x2" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-1.gif" style="background-color: white; padding: 10px;" />

Sia $S(m, n)$ il numero minimo di mosse necessarie a completare il gioco su una griglia $m$ x $n$. Ad esempio, si può verificare che $S(5, 4) = 25$.

<img class="img-responsive center-block" alt="stato iniziale della griglia e stato finale della griglia per il gioco sulla griglia 5x4" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-2.gif" style="background-color: white; padding: 10px;" />

Ci sono esattamente 5482 griglie per le quali $S(m, n) = p^2$, dove $p &lt; 100$ è primo.

Quante griglie danno $S(m, n) = p^2$, dove $p &lt; {10}^6$ è primo?

# --hints--

`slidingGame()` dovrebbe restituire `2057774861813004`.

```js
assert.strictEqual(slidingGame(), 2057774861813004);
```

# --seed--

## --seed-contents--

```js
function slidingGame() {

  return true;
}

slidingGame();
```

# --solutions--

```js
// solution required
```
