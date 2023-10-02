---
id: 5900f40d1000cf542c50ff20
title: 'Problema 161: Triomini'
challengeType: 1
forumTopicId: 301795
dashedName: problem-161-triominoes
---

# --description--

Un triomino è una figura che consiste di tre quadrati uniti per i lati.

Ci sono due forme base:

<img class="img-responsive center-block" alt="le due forme base dei triomini" src="https://cdn.freecodecamp.org/curriculum/project-euler/triominoes-1.gif" style="background-color: white; padding: 10px;" />

Se consideriamo tutte le possibili orientazioni allora ce ne sono sei:

<img class="img-responsive center-block" alt="le forme dei triomini includendo l'orientazione" src="https://cdn.freecodecamp.org/curriculum/project-euler/triominoes-2.gif" style="background-color: white; padding: 10px;" />

Ogni griglia n per m in cui nxm è divisibile per 3 può essere riempita di triomini. Se consideriamo il riempimento che può essere ottenuto come riflessione o rotazione di un altro riempimento come diverso allora ci sono 41 modi diversi per riempire una griglia 2 per 9 con dei triomini:

<img class="img-responsive center-block" alt="una animazione mostrante i 41 modi per riempire una griglia 9x2 con i triomini" src="https://cdn.freecodecamp.org/curriculum/project-euler/triominoes-3.gif" style="background-color: white; padding: 10px;" />

In quanti modi diversi può essere riempita in questo modo una griglia 9 per 12 con i troimini?

# --hints--

`triominoes()` dovrebbe restituire `20574308184277972`.

```js
assert.strictEqual(triominoes(), 20574308184277972);
```

# --seed--

## --seed-contents--

```js
function triominoes() {

  return true;
}

triominoes();
```

# --solutions--

```js
// solution required
```
