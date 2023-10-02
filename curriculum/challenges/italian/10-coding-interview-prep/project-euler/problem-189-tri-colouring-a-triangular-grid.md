---
id: 5900f4291000cf542c50ff3c
title: 'Problema 189: Tri-colorare una griglia triangolare'
challengeType: 1
forumTopicId: 301825
dashedName: problem-189-tri-colouring-a-triangular-grid
---

# --description--

Considera la seguente configurazione di 64 triangoli:

<img class="img-responsive center-block" alt="64 triangoli disposti in modo da creare un triangolo più grande con lunghezza del lato di 8 triangoli" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-1.gif" style="background-color: white; padding: 10px;" />

Desideriamo colorare l'interno di ogni triangolo con uno dei tre colori: rosso, verde o blu, in modo che due triangoli vicini non abbiano lo stesso colore. Tale colorazione è denominata valida. Definiamo vicini due triangoli che condividono un bordo. Nota: se condividono solo un vertice, allora non sono vicini.

Per esempio, ecco una colorazione valida della griglia di cui sopra:

<img class="img-responsive center-block" alt="griglia colorata di 64 triangoli" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-2.gif" style="background-color: white; padding: 10px;" />

Una colorazione C' ottenuta da una colorazione C per rotazione o riflessione è considerata distinta da C a meno che le due non siano identiche.

Quante distinte colorazioni valide esistono per la configurazione di cui sopra?

# --hints--

`triangularGridColoring()` dovrebbe restituire `10834893628237824`.

```js
assert.strictEqual(triangularGridColoring(), 10834893628237824);
```

# --seed--

## --seed-contents--

```js
function triangularGridColoring() {

  return true;
}

triangularGridColoring();
```

# --solutions--

```js
// solution required
```
