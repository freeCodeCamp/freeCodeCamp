---
id: 5900f4341000cf542c50ff46
title: 'Problema 199: Impacchettamento iterativo dei cerchi'
challengeType: 1
forumTopicId: 301837
dashedName: problem-199-iterative-circle-packing
---

# --description--

Tre cerchi di raggio uguale sono posizionati all'interno di un cerchio più grande in modo che ogni coppia di cerchi sia tangente l'uno all'altro e i cerchi interni non si sovrappongono. Ci sono quattro "lacune" scoperte che devono essere riempite iterativamente con più cerchi tangenti.

<img class="img-responsive center-block" alt="un diagramma di cerchi non sovrapposti" src="https://cdn-media-1.freecodecamp.org/project-euler/199-circles-in-circles.gif" style="background-color: white; padding: 10px;" />

A ogni iterazione viene posto un cerchio di dimensioni massime in ogni divario, che crea più vuoti per la successiva iterazione. Dopo 3 iterazioni (foto), ci sono 108 vuoti e la frazione della zona che non è coperta da cerchi è 0.06790342, arrotondato all’ottavo decimale.

Quale frazione della zona non è coperta da cerchi dopo `n` iterazioni? Dare la risposta arrotondata a otto decimali utilizzando il formato x.xxxxxxxx .

# --hints--

`iterativeCirclePacking(10)` dovrebbe restituire un numero.

```js
assert(typeof iterativeCirclePacking(10) === 'number');
```

`iterativeCirclePacking(10)` dovrebbe restituire `0.00396087`.

```js
assert.strictEqual(iterativeCirclePacking(10), 0.00396087);
```

`iterativeCirclePacking(3)` dovrebbe restituire `0.06790342`.

```js
assert.strictEqual(iterativeCirclePacking(3), 0.06790342);
```

# --seed--

## --seed-contents--

```js
function iterativeCirclePacking(n) {

  return true;
}

iterativeCirclePacking(10);
```

# --solutions--

```js
function iterativeCirclePacking(n) {
  let k1 = 1;
  let k0 = k1 * (3 - 2 * Math.sqrt(3));
  let a0 = 1 / (k0 * k0);
  let a1 = 3 / (k1 * k1);
  a1 += 3 * getArea(k0, k1, k1, n);
  a1 += getArea(k1, k1, k1, n);
  let final = ((a0 - a1) / a0).toFixed(8);

  return parseFloat(final);
  function getArea(k1, k2, k3, depth) {
      if (depth == 0) return 0.0;
      let k4 = k1 + k2 + k3 + 2 * Math.sqrt(k1 * k2 + k2 * k3 + k3 * k1);
      let a = 1 / (k4 * k4);
      a += getArea(k1, k2, k4, depth - 1);
      a += getArea(k2, k3, k4, depth - 1);
      a += getArea(k3, k1, k4, depth - 1);
      return a;
  }
}
```
