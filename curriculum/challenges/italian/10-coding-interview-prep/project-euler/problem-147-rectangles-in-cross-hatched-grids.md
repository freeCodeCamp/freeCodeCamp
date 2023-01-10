---
id: 5900f3ff1000cf542c50ff12
title: 'Problema 147: Rettangoli in griglie a tratteggi incrociati'
challengeType: 1
forumTopicId: 301776
dashedName: problem-147-rectangles-in-cross-hatched-grids
---

# --description--

In una griglia 3x2 a tratteggi incrociati, un totale di 37 rettangoli diversi potrebbe essere situato all'interno di tale griglia come indicato nel disegno.

<img class="img-responsive center-block" alt="modi di posizionare diversi rettangoli all'interno di una griglia 3x2 a tratteggio incrociato" src="https://cdn.freecodecamp.org/curriculum/project-euler/rectangles-in-cross-hatched-grids.png" style="background-color: white; padding: 10px;" />

Ci sono 5 griglie più piccole di 3x2, le dimensioni verticali e orizzontali sono importanti, cioè 1x1, 2x1, 3x1, 1x2 e 2x2. Se ciascuno di essi è a tratteggio incrociato, il seguente numero di rettangoli diversi potrebbe essere situato all'interno di tali griglie più piccole:

$$\begin{array}{|c|c|} \hline 1 \times 1 & 1  \\\\ \hline 2 \times 1 & 4  \\\\ \hline 3 \times 1 & 8  \\\\ \hline 1 \times 2 & 4  \\\\ \hline 2 \times 2 & 18 \\\\ \hline \end{array}$$

Aggiungendo questi ai 37 della griglia 3x2, un totale di 72 diversi rettangoli potrebbe essere situato all'interno della 3x2 e delle griglie più piccole.

Quanti rettangoli diversi potrebbero essere situati entro una griglia 47x43 e griglie più piccole?

# --hints--

`crossHatchedRectangles()` dovrebbe restituire `846910284`.

```js
assert.strictEqual(crossHatchedRectangles(), 846910284);
```

# --seed--

## --seed-contents--

```js
function crossHatchedRectangles() {

  return true;
}

crossHatchedRectangles();
```

# --solutions--

```js
// solution required
```
