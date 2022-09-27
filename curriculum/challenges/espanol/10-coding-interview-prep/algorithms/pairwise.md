---
id: a3f503de51cfab748ff001aa
title: Emparejamiento inteligente
challengeType: 1
forumTopicId: 301617
dashedName: pairwise
---

# --description--

Dado un arreglo `arr`, encuentra pares de elementos que sumen igual al segundo argumento `arg` y regresa la suma de sus índices.

Podrías utilizar múltiples pares que tengan los mismo elementos numéricos, pero con diferentes índices. Cada par debe usar los índices más bajos posibles. Una vez un elemento se ha utilizado, no se puede emprejar otra vez con otro elemento. Por ejemplo `pairwise([1, 1, 2], 3)` crea un par `[2, 1]` usando el 1 del índice 0, en vez del 1 de el índice 1, por qué la suma de los indíces 0 + 2 &lt; (es menor que) 1+2.

Por ejemplo `pairwise([7, 9, 11, 13, 15], 20)` devuelve `6`. Los pares que suman 20 son `[7, 13]` y `[9, 11]`. Para llegar a la soulción podríamos escribir el arreglo con sus índices y valores.

<div style='margin-left: 2em;'>

| Índice | 0 | 1 | 2 | 3 | 4 |
| ----- | - | - | -- | -- | -- |
| Valor | 7 | 9 | 11 | 13 | 15

</div>

A continuación tomaremos los índices correspondientes a los pares y los sumamos.

<div style='margin-left: 2em;'>

7 + 13 = 20 → Indices 0 + 3 = 3  
9 + 11 = 20 → Índices 1 + 2 = 3  
3 + 3 = 6 → Devuelve `6`

</div>

# --hints--

`pairwise([1, 4, 2, 3, 0, 5], 7)` debe devolver 11.

```js
assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
```

`pairwise([1, 3, 2, 4], 4)` debe devolver 1.

```js
assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
```

`pairwise([1, 1, 1], 2)` debe devolver 1.

```js
assert.deepEqual(pairwise([1, 1, 1], 2), 1);
```

`pairwise([0, 0, 0, 0, 1, 1], 1)` debe devolver 10.

```js
assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
```

`pairwise([], 100)` debería devolver 0.

```js
assert.deepEqual(pairwise([], 100), 0);
```

# --seed--

## --seed-contents--

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
```

# --solutions--

```js
function pairwise(arr, arg) {
  var sum = 0;
  arr.forEach(function(e, i, a) {
    if (e != null) {
      var diff = arg-e;
      a[i] = null;
      var dix = a.indexOf(diff);
      if (dix !== -1) {
        sum += dix;
        sum += i;
        a[dix] = null;
      }
    }
  });
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
```
