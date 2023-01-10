---
id: 5cd9a70215d3c4e65518328f
title: Usare la ricorsione per creare un conto alla rovescia
challengeType: 1
forumTopicId: 305925
dashedName: use-recursion-to-create-a-countdown
---

# --description--

In una <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion" target="_blank" rel="noopener noreferrer nofollow">sfida precedente</a>, hai imparato come usare la ricorsione per sostituire un ciclo `for`. Ora, diamo un'occhiata a una funzione più complessa che restituisce un array di interi consecutivi a partire da `1` in base al numero passato alla funzione.

Come accennato nella sfida precedente, ci sarà un <dfn>caso base</dfn>. Il caso base dice alla funzione ricorsiva quando non ha più bisogno di chiamare sé stessa. Si tratta di un caso semplice in cui il valore da restituire è già noto. Ci sarà anche una chiamata <dfn>ricorsiva</dfn> che esegue la funzione originale con argomenti diversi. Se la funzione è scritta correttamente, alla fine sarà raggiunto il caso base.

Per esempio, diciamo che si desideri scrivere una funzione ricorsiva che restituisca un array contenente i numeri da `1` a `n`. Questa funzione dovrà ricevere un argomento, `n`, che rappresenta il numero finale. Poi dovrà chiamare sé stessa con valori progressivamente più piccoli di `n` fino a quando non raggiungerà `1`. È possibile scrivere la funzione come segue:

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

Il valore `[1, 2, 3, 4, 5]` verrà visualizzato nella console.

In un primo momento, questo sembra controintuitivo dal momento che il valore di `n` *decresce*, ma i valori nell'array finale sono *crescenti*. Questo accade perché l'inserimento (push) avviene per ultimo, dopo che la chiamata ricorsiva ha restituito il suo valore. Nel punto in cui `n` è inserito nell'array, `countup(n - 1)` è già stato valutato e ha restituito `[1, 2, ..., n - 1]`.

# --instructions--

Abbiamo definito una funzione chiamata `countdown` con un parametro (`n`). La funzione dovrebbe usare la ricorsione per restituire un array contenente gli interi da `n` a `1` in base al parametro `n`. Se la funzione è chiamata con un numero inferiore a 1, la funzione dovrebbe restituire un array vuoto. Ad esempio, chiamare questa funzione con `n = 5` dovrebbe restituire l'array `[5, 4, 3, 2, 1]`. La tua funzione deve usare la ricorsione richiamando sé stessa e non deve utilizzare cicli di alcun tipo.

# --hints--

`countdown(-1)` dovrebbe restituire un array vuoto.

```js
assert.isEmpty(countdown(-1));
```

`countdown(10)` dovrebbe restituire `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

`countdown(5)` dovrebbe restituire `[5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

Il tuo codice non dovrebbe basarsi su alcun tipo di ciclo (`for`, `while`o funzioni di ordine superiore come `forEach`, `map`, `filter`e `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

Dovresti usare la ricorsione per risolvere questo problema.

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

Le variabili globali non dovrebbero essere usate per memorizzare l'array.

```js
countdown(1)
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line
```

# --solutions--

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```
