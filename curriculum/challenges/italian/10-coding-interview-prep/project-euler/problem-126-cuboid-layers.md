---
id: 5900f3ea1000cf542c50fefd
title: 'Problema 126: strati cuboidi'
challengeType: 1
forumTopicId: 301753
dashedName: problem-126-cuboid-layers
---

# --description--

Il numero minimo di cubi per coprire ogni faccia visibile su un cuboide che misura 3 x 2 x 1 è ventidue.

<img class="img-responsive center-block" alt="Un cuboide 3x2x1 ricoperto con ventidue cubi 1x1x1" src="https://cdn.freecodecamp.org/curriculum/project-euler/cuboid-layers.png" style="background-color: white; padding: 10px;" />

Se aggiungiamo un secondo strato a questo solido richiederebbe quarantasei cubi per coprire ogni faccia visibile, il terzo strato richiederebbe settantotto cubi, e il quarto strato richiederedde centodiciotto cubi per coprire ogni faccia visibile.

Eppure, il primo strato di un cuboide misurante 5 x 1 x 1 richiede pure ventidue cubi; in modo simile, il primo strato di cuboidi misuranti 5 x 3 x 1, 7 x 2 x 1, e 11 x 1 x 1 tutti contengono quarantasei cubi.

Definiamo $C(n)$ per rappresentare il numero di cuboidi che contengono $n$ cubi in uno dei suoi strati. Quindi $C(22) = 2$, $C(46) = 4$, $C(78) = 5$, e $C(118) = 8$.

Si scopre che 154 è il valore più basso di $n$ per cui $C(n) = 10$.

Trova il valore più piccolo di $n$ per cui $C(n) = 1000$.

# --hints--

`cuboidLayers()` dovrebbe restituire `18522`.

```js
assert.strictEqual(cuboidLayers(), 18522);
```

# --seed--

## --seed-contents--

```js
function cuboidLayers() {

  return true;
}

cuboidLayers();
```

# --solutions--

```js
// solution required
```
