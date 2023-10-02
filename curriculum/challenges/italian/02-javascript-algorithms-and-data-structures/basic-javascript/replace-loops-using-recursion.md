---
id: 5cfa3679138e7d9595b9d9d4
title: Sostituire i cicli usando la ricorsione
challengeType: 1
videoUrl: >-
  https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
forumTopicId: 301175
dashedName: replace-loops-using-recursion
---

# --description--

La ricorsione è il concetto che una funzione può essere espressa in termini di se stessa. Per aiutarti a comprenderlo, inizia pensando al seguente compito: moltiplica i primi `n` elementi di un array per creare il prodotto di questi elementi. Utilizzando un ciclo `for`, potresti fare così:

```js
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```

Tuttavia, nota che `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`. Questo significa che puoi riscrivere `multiply` in termini di se stessa e non aver mai bisogno di utilizzare un ciclo.

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

La versione ricorsiva di `multiply` si interrompe in questo modo. Nel <dfn>caso base</dfn>, dove `n <= 0`, restituisce 1. Per valori più grandi di `n`, essa chiama sé stessa, ma con `n - 1`. Quella chiamata di funzione è valutata allo stesso modo, chiamando `multiply` di nuovo fino a `n <= 0`. A questo punto, tutte le funzioni possono restituire il loro valore e l'originale `multiply` restituisce la risposta.

**Nota:** Le funzioni ricorsive devono avere un caso base quando ritornano senza richiamare di nuovo la funzione (in questo esempio, quando `n <= 0`), altrimenti non potranno mai finire di eseguire.

# --instructions--

Scrivi una funzione ricorsiva, `sum(arr, n)`, che restituisce la somma dei primi elementi `n` di un array `arr`.

# --hints--

`sum([1], 0)` dovrebbe essere uguale a 0.

```js
assert.equal(sum([1], 0), 0);
```

`sum([2, 3, 4], 1)` dovrebbe essere uguale 2.

```js
assert.equal(sum([2, 3, 4], 1), 2);
```

`sum([2, 3, 4, 5], 3)` dovrebbe essere uguale 9.

```js
assert.equal(sum([2, 3, 4, 5], 3), 9);
```

Il tuo codice non deve fare affidamento su alcun tipo di ciclo (`for` o `while` o funzioni di ordine superiore come `forEach`, `map`, `filter` o `reduce`.).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

Dovresti usare la ricorsione per risolvere questo problema.

```js
assert(
  sum.toString().match(/sum\(.*\)/g).length > 1
);
```

# --seed--

## --seed-contents--

```js
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
```
