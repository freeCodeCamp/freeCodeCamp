---
id: 5900f4f71000cf542c51000a
title: 'Problema 395: Albero pitagorico'
challengeType: 1
forumTopicId: 302060
dashedName: problem-395-pythagorean-tree
---

# --description--

L'albero pitagorico è un frattale generato dalla seguente procedura:

Inizia con un unità quadrata. Poi, chiamando uno dei lati la sua base (nell'animazione, il lato inferiore è la base):

1. Attacca un triangolo rettangolo sul lato opposto alla base, con l'ipotenusa che coincide con quel lato e con i lati in un rapporto 3-4-5. Nota che il lato più piccolo del triangolo deve essere sul lato a 'destra' rispetto alla base (vedi animazione).
2. Attacca un quadrato ad ogni gamba del triangolo rettangolo, con uno dei suoi lati che coincide con quella gamba.
3. Ripeti questa procedura per entrambi i quadrati, considerando come loro basi i lati che toccano il triangolo.

La figura risultante, dopo un numero infinito di iterazioni, è l'albero pitagorico.

<img class="img-responsive center-block" alt="animazione che mostra 8 iterazioni della procedura" src="https://cdn.freecodecamp.org/curriculum/project-euler/pythagorean-tree.gif" style="background-color: white; padding: 10px;" />

Si può dimostrare che esiste almeno un rettangolo, i cui lati sono paralleli al più grande quadrato dell'albero pitagorico, che racchiude completamente l'albero pitagorico.

Trova l'area più piccola possibile per un tale rettangolo di delimitazione, e dai la risposta arrotondata a 10 cifre decimali.

# --hints--

`pythagoreanTree()` dovrebbe restituire `28.2453753155`.

```js
assert.strictEqual(pythagoreanTree(), 28.2453753155);
```

# --seed--

## --seed-contents--

```js
function pythagoreanTree() {

  return true;
}

pythagoreanTree();
```

# --solutions--

```js
// solution required
```
