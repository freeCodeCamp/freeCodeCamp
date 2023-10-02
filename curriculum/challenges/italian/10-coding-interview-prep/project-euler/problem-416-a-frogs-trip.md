---
id: 5900f50e1000cf542c510020
title: 'Problema 416: Viaggio di una rana'
challengeType: 1
forumTopicId: 302085
dashedName: problem-416-a-frogs-trip
---

# --description--

Una riga di $n$ quadrati contiene una rana nel quadrato più a sinistra. Con salti successivi, la rana va al quadrato più a destra e poi torna al quadrato più a sinistra. Nel viaggio verso l'esterno salta uno, due o tre quadrati a destra, e durante il viaggio di ritorno salta a sinistra in modo simile. Non può saltare fuori dai quadrati. Ripete il viaggio di andata e ritorno $m$ volte.

Sia $F(m, n)$ il numero di modi in cui la rana può viaggiare in modo che al massimo un quadrato rimanga non visitato.

Per esempio, $F(1, 3) = 4$, $F(1, 4) = 15$, $F(1, 5) = 46$, $F(2, 3) = 16$ and $F(2, 100)\bmod {10}^9 = 429\\,619\\,151$.

Trova le ultime 9 cifre di $F(10, {10}^{12})$.

# --hints--

`frogsTrip()` dovrebbe restituire `898082747`.

```js
assert.strictEqual(frogsTrip(), 898082747);
```

# --seed--

## --seed-contents--

```js
function frogsTrip() {

  return true;
}

frogsTrip();
```

# --solutions--

```js
// solution required
```
