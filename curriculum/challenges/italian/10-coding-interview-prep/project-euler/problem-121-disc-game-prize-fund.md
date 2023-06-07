---
id: 5900f3e51000cf542c50fef8
title: 'Problema 121: fondo premio per il gioco del disco'
challengeType: 1
forumTopicId: 301748
dashedName: problem-121-disc-game-prize-fund
---

# --description--

Una sacca contiene un disco rosso e un disco blu. In una partita casuale un giocatore prende un disco a caso e il suo colore viene annotato. Dopo ogni giro il disco viene rimesso nel sacchetto, viene aggiunto un disco rosso in più e un altro disco viene prelevato a caso.

Il giocatore paga 1£ per giocare e vince se ha preso più dischi blu rispetto ai dischi rossi alla fine del gioco.

Se il gioco è giocato per quattro turni, la probabilità di una vittoria di un giocatore è esattamente 11/120, e quindi il fondo premio massimo che il banchiere dovrebbe assegnare per vincere in questo gioco sarebbe 10£ prima che si aspettasse d'incorrere in una perdita. Nota che qualsiasi pagamento sarà un numero intero di sterline e comprende anche l'originale 1£ pagato per giocare il gioco, così nell'esempio dato il giocatore vince effettivamente 9£.

Trova il fondo premio massimo che dovrebbe essere assegnato a una singola partita in cui sono giocati quindici turni.

# --hints--

`discGamePrize()` dovrebbe restituire `2269`.

```js
assert.strictEqual(discGamePrize(), 2269);
```

# --seed--

## --seed-contents--

```js
function discGamePrize() {

  return true;
}

discGamePrize();
```

# --solutions--

```js
// solution required
```
