---
id: 587d7b8f367417b2b2512b60
title: Refactoring delle variabili globali fuori dalle funzioni
challengeType: 1
forumTopicId: 301235
dashedName: refactor-global-variables-out-of-functions
---

# --description--

Finora abbiamo visto due principi distinti per la programmazione funzionale:

1) Non modificare una variabile o un oggetto - se necessario creare nuove variabili e oggetti e restituirli da una funzione. Suggerimento: usando qualcosa come `const newArr = arrVar`, dove `arrVar` è un array, creerai semplicemente un riferimento alla variabile esistente e non una copia. Quindi cambiando un valore in `newArr` cambierà anche il valore in `arrVar`.

2) Dichiarare i parametri della funzione - qualsiasi calcolo all'interno di una funzione deve dipendere solo dagli argomenti passati alla funzione, e non da qualsiasi oggetto o variabile globale.

Aggiungere uno a un certo numero non è molto eccitante, ma potremo applicare questi stessi principi quando lavoreremo con array o oggetti più complessi.

# --instructions--

Riscrivi il codice in modo che l'array globale `bookList` non venga modificato all'interno di nessuna funzione. La funzione `add` dovrebbe aggiungere il `bookName` dato alla fine dell'array passato e restituire un nuovo array (lista). La funzione `remove` dovrebbe rimuovere il `bookName` dato dall'array che le viene passato.

**Nota:** Entrambe le funzioni dovrebbero restituire un array, e tutti i nuovi parametri dovrebbero essere aggiunti prima del parametro `bookName`.

# --hints--

`bookList` non dovrebbe cambiare e dovrebbe rimanere uguale a `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

```js
add(bookList, "Test");
remove(bookList, "The Hound of the Baskervilles");
assert(
  JSON.stringify(bookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`add(bookList, "A Brief History of Time")` dovrebbe restituire `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
assert(
  JSON.stringify(add(bookList, "A Brief History of Time")) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

`remove(bookList, "On The Electrodynamics of Moving Bodies")` dovrebbe restituire `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

```js
assert(
  JSON.stringify(remove(bookList, 'On The Electrodynamics of Moving Bodies')) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");` dovrebbe essere uguale a `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
assert(
  JSON.stringify(remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies')) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

# --seed--

## --seed-contents--

```js
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;

  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}
```

# --solutions--

```js
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {
  return [...bookList, bookName];
}

function remove(bookList, bookName) {
  const bookListCopy = [...bookList];
  const bookNameIndex = bookList.indexOf(bookName);
  if (bookNameIndex >= 0) {
    bookListCopy.splice(bookNameIndex, 1);
  }
  return bookListCopy;
}
```
