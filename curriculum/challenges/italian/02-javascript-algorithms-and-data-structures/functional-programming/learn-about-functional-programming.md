---
id: 587d7b8d367417b2b2512b5b
title: Scoprire la programmazione funzionale
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

La programmazione funzionale è uno stile di programmazione in cui le soluzioni sono funzioni semplici e isolate, senza effetti indesiderati al di fuori del campo di applicazione della funzione: `INPUT -> PROCESS -> OUTPUT`

La programmazione funzionale riguarda:

1) Funzioni isolate - non c'è dipendenza dallo stato del programma, che include variabili globali che sono soggette a cambiamenti

2) Funzioni pure - lo stesso input dà sempre lo stesso output

3) Funzioni con effetti collaterali limitati - eventuali cambiamenti, o mutazioni, allo stato del programma al di fuori della funzione sono attentamente controllati

# --instructions--

I membri di freeCodeCamp amano il tè.

Nell'editor di codice, le funzioni `prepareTea` e `getTea` sono già definite per te. Chiama la funzione `getTea` per ottenere 40 tazze di tè per la squadra, e memorizzale nella variabile `tea4TeamFCC`.

# --hints--

La variabile `tea4TeamFCC` dovrebbe contenere 40 tazze di tè per la squadra.

```js
assert(tea4TeamFCC.length === 40);
```

La variabile `tea4TeamFCC` dovrebbe contenere tazze di tè verde.

```js
assert(tea4TeamFCC[0] === 'greenTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line
```

# --solutions--

```js
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40); 
```
