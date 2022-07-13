---
id: 5900f4071000cf542c50ff19
title: 'Problema 154: Esplorare la piramide di Pascal'
challengeType: 1
forumTopicId: 301785
dashedName: problem-154-exploring-pascals-pyramid
---

# --description--

Una piramide triangolare è costruita utilizzando palline sferiche in modo che ogni sfera poggi esattamente su tre palline del livello inferiore.

<img class="img-responsive center-block" alt="piramide triangolare costruita con palline sferiche a quattro livelli" src="https://cdn.freecodecamp.org/curriculum/project-euler/exploring-pascals-pyramid.png" style="background-color: white; padding: 10px;" />

Poi calcoliamo il numero di percorsi che conducono dall'apice a ogni posizione: un percorso inizia all'apice e procede verso il basso in una qualsiasi delle tre sfere direttamente al di sotto della posizione attuale. Di conseguenza, il numero di percorsi per raggiungere una certa posizione è la somma dei numeri immediatamente sopra di esso (a seconda della posizione, ci sono fino a tre numeri sopra di esso).

Il risultato è la piramide di Pascal, e i numeri a ogni livello n sono i coefficienti dell'espansione trinomiale ${(x + y + z)}^n$.

Quanti coefficienti nell'espansione di ${(x + y + z)}^{200000}$ sono multipli di ${10}^{12}$?

# --hints--

`pascalsPyramid()` dovrebbe restituire `479742450`.

```js
assert.strictEqual(pascalsPyramid(), 479742450);
```

# --seed--

## --seed-contents--

```js
function pascalsPyramid() {

  return true;
}

pascalsPyramid();
```

# --solutions--

```js
// solution required
```
