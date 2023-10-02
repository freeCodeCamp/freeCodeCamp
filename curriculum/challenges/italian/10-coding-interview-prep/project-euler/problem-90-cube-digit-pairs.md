---
id: 5900f3c61000cf542c50fed9
title: 'Problema 90: coppie di cubi con le cifre'
challengeType: 1
forumTopicId: 302207
dashedName: problem-90-cube-digit-pairs
---

# --description--

Ognuno delle sei facce di un cubo ha scritta una diversa cifra (da 0 a 9); la stessa cosa è fatta con un diverso cubo. Mettendo i due cubi fianco a fianco in diverse posizioni possiamo formare una varietà di numeri a 2 cifre.

Per esempio, possiamo formare il numero quadrato 64:

<img class="img-responsive center-block" alt="due cubi, uno con il numero 6 e uno con il numero 4" src="https://cdn-media-1.freecodecamp.org/project-euler/cube-digit-pairs.png" style="background-color: white; padding: 10px;" />

Infatti, scegliendo con attenzione le cifre sui due cubi, possiamo mostrare tutti i numeri quadrati al di sotto di 100: 01, 04, 09, 16, 25, 36, 49, 64, 81.

Per esempio, un modo in cui questo si può ottenere è scrivendo {0, 5, 6, 7, 8, 9} su un cubo e {1, 2, 3, 4, 8, 9} sull'altro cubo.

Invece, per questo problema è possibile mettere il 6 o il 9 sottosopra così che un arrangiamento come {0, 5, 6, 7, 8, 9} e {1, 2, 3, 4, 6, 7} permette la formazione di tutti e nove i numeri quadrati, altrimenti sarebbe impossibile ottenere 09.

Nel determinare un arrangiamento distingo siamo interessati alle cifre su ogni cubo, non al loro ordine.

<div style="margin-left: 4em;">
  {1, 2, 3, 4, 5, 6} è equivalente a {3, 6, 4, 1, 2, 5}<br>
  {1, 2, 3, 4, 5, 6} è diverso da {1, 2, 3, 4, 5, 9}
</div>

Ma visto che permettiamo al 6 e al 9 di essere capovolti, i due set distinti nell'ultimo esempio rappresentano entrambi il set esteso {1, 2, 3, 4, 5, 6, 9} per lo scopo di formare numeri a due cifre.

Quanti arrangiamenti diversi dei due cubi permettono di formare tutti i numeri quadrati?

# --hints--

`cubeDigitPairs()` dovrebbe restituire un numero.

```js
assert(typeof cubeDigitPairs() === 'number');
```

`cubeDigitPairs()` dovrebbe restituire 1217.

```js
assert.strictEqual(cubeDigitPairs(), 1217);
```

# --seed--

## --seed-contents--

```js
function cubeDigitPairs() {

  return true;
}

cubeDigitPairs();
```

# --solutions--

```js
// solution required
```
