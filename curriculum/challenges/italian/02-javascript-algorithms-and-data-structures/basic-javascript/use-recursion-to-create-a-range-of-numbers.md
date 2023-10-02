---
id: 5cc0bd7a49b71cb96132e54c
title: Usare la ricorsione per creare un intervallo di numeri
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

Proseguendo dalla sfida precedente, ti offriamo un'altra opportunità di creare una funzione ricorsiva per risolvere un problema.

# --instructions--

Abbiamo definito una funzione chiamata `rangeOfNumbers` con due parametri. La funzione dovrebbe restituire un array di interi che inizia con un numero rappresentato dal parametro `startNum` e termina con un numero rappresentato dal parametro `endNum`. Il numero iniziale sarà sempre minore o uguale al numero finale. La tua funzione deve usare ricorsioni chiamando sé stessa e non usare cicli di alcun tipo. Dovrebbe funzionare anche nei casi in cui sia `startNum` che `endNum` hanno lo stesso valore.

# --hints--

La tua funzione dovrebbe restituire un array.

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

Il codice non dovrebbe utilizzare alcun ciclo (`for` o `while` o funzioni di ordine superiore come `forEach`, `map`, `filter`o `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

`rangeOfNumbers` dovrebbe usare la ricorsione (chiamare sé stessa) per risolvere questa sfida.

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

`rangeOfNumbers(1, 5)` dovrebbe restituire `[1, 2, 3, 4, 5]`.

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

`rangeOfNumbers(6, 9)` dovrebbe restituire `[6, 7, 8, 9]`.

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

`rangeOfNumbers(4, 4)` dovrebbe restituire `[4]`.

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

Le variabili globali non dovrebbero essere usate per memorizzare l'array.

```js
rangeOfNumbers(1, 3)
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

# --seed--

## --seed-contents--

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

# --solutions--

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
