---
id: 5900f3ff1000cf542c50ff12
title: 'Problema 147: Retângulos em grades cruzadas'
challengeType: 1
forumTopicId: 301776
dashedName: problem-147-rectangles-in-cross-hatched-grids
---

# --description--

Em uma grade cruzada de 3x2, um total de 37 retângulos diferentes podem ser situados dentro dela, conforme indicado no esboço.

<img class="img-responsive center-block" alt="formas de situar diferentes retângulos dentro da grade cruzada de 3x2" src="https://cdn.freecodecamp.org/curriculum/project-euler/rectangles-in-cross-hatched-grids.png" style="background-color: white; padding: 10px;" />

Há 5 grades menores que 3x2, com dimensões vertical e horizontal importantes. São eles: 1x1, 2x1, 3x1, 1x2 e 2x2. Se cada uma delas for cruzada, o número de retângulos diferentes a seguir poderia estar situado dentro dessas grades menores:

$$\begin{array}{|c|c|} \hline 1 \times 1 & 1  \\\\ \hline 2 \times 1 & 4  \\\\ \hline 3 \times 1 & 8  \\\\ \hline 1 \times 2 & 4  \\\\ \hline 2 \times 2 & 18 \\\\ \hline \end{array}$$

Adicionando estes valores aos 37 da grade de 3x2, um total de 72 retângulos diferentes pode ficar situado dentro da grade de 3x2 e das grades menores.

Quantos retângulos diferentes poderiam estar localizados na grade de 47x43 e em suas grades menores?

# --hints--

`crossHatchedRectangles()` deve retornar `846910284`.

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
