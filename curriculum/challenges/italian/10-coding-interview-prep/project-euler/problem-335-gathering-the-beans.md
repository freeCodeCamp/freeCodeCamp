---
id: 5900f4bd1000cf542c50ffce
title: 'Problema 335: Raccogliere i fagioli'
challengeType: 1
forumTopicId: 301993
dashedName: problem-335-gathering-the-beans
---

# --description--

Ogni volta che Peter si sente annoiato, mette alcune ciotole, contenenti un fagiolo ciascuno, in un cerchio. Dopo di che, prende tutti i fagioli da una certa ciotola e li rovescia uno ad uno nelle ciotole andando in senso orario. Lo ripete, a partire dalla ciotola in cui ha lasciato cadere l'ultimo fagiolo, fino a quando la situazione iniziale appare di nuovo. Ad esempio con 5 ciotole agisce come segue:

<img class="img-responsive center-block" alt="animazione di fagioli che si muovono in 5 ciotole" src="https://cdn.freecodecamp.org/curriculum/project-euler/gathering-the-beans.gif" style="background-color: white; padding: 10px;" />

Quindi con 5 ciotole servono a Peter 15 mosse per tornare alla situazione iniziale.

Lascia che $M(x)$ rappresenti il numero di mosse necessarie per tornare alla situazione iniziale, a partire da $x$ ciotole. Così, $M(5) = 15$. Può anche essere verificato che $M(100) = 10920$.

Trova $\displaystyle\sum_{k = 0}^{{10}^{18}} M(2^k + 1)$. Dai la tua risposta modulo $7^9$.

# --hints--

`gatheringTheBeans()` dovrebbe restituire `5032316`.

```js
assert.strictEqual(gatheringTheBeans(), 5032316);
```

# --seed--

## --seed-contents--

```js
function gatheringTheBeans() {

  return true;
}

gatheringTheBeans();
```

# --solutions--

```js
// solution required
```
