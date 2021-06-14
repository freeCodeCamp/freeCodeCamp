---
id: 587d7b8e367417b2b2512b5c
title: Comprendere la terminologia della programmazione funzionale
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

La squadra di FCC ha avuto uno sbalzo di umore e ora vuole due tipi di tè: tè verde e tè nero. Fatto generale: gli sbalzi di umore dei clienti sono piuttosto comuni.

Con queste informazioni, avremo bisogno di rivedere la funzione `getTea` dall'ultima sfida per gestire varie richieste di tè. Possiamo modificare `getTea` in modo che accetti una funzione come parametro per poter cambiare il tipo di tè che prepara. Questo rende `getTea` più flessibile e dà al programmatore più controllo quando le richieste del cliente cambiano.

Prima però, vediamo un po' di terminologia funzionale:

<dfn>Callback</dfn> sono le funzioni che vengono passate a un'altra funzione per decidere l'invocazione di quella funzione. Potresti averle viste passare ad altri metodi, ad esempio in `filter`, la funzione callback dice a JavaScript i criteri per filtrare un array.

Funzioni che possono essere assegnate a una variabile, passate a un'altra funzione, o restituite da un'altra funzione proprio come qualsiasi altro valore normale, sono chiamate <dfn>funzioni di prima classe</dfn>. In JavaScript, tutte le funzioni sono di prima classe.

Le funzioni che prendono una funzione come argomento, o restituiscono una funzione come valore di ritorno sono chiamate funzioni <dfn>di ordine superiore</dfn>.

Quando le funzioni sono passate o restituite da un'altra funzione, le funzioni che sono state passate o restituite possono essere chiamate un <dfn>lambda</dfn>.

# --instructions--

Prepara 27 tazze di tè verde e 13 tazze di tè nero e conservale rispettivamente nelle variabili `tea4GreenTeamFCC` e `tea4BlackTeamFCC`. Nota che la funzione `getTea` è stata modificata e ora prende una funzione come primo argomento.

Nota: I dati (il numero di tazze di tè) sono forniti come ultimo argomento. Ne discuteremo di più nelle lezioni successive.

# --hints--

La variabile `tea4GreenTeamFCC` dovrebbe contenere 27 tazze di tè verde per la squadra.

```js
assert(tea4GreenTeamFCC.length === 27);
```

La variabile `tea4GreenTeamFCC` dovrebbe contenere tazze di tè verde.

```js
assert(tea4GreenTeamFCC[0] === 'greenTea');
```

La variabile `tea4BlackTeamFCC` dovrebbe contenere 13 tazze di tè nero.

```js
assert(tea4BlackTeamFCC.length === 13);
```

La variabile `tea4BlackTeamFCC` dovrebbe contenere tazze di tè nero.

```js
assert(tea4BlackTeamFCC[0] === 'blackTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

# --solutions--

```js
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
```
