---
id: 587d7b8f367417b2b2512b60
title: Refaktoriere globale Variablen außerhalb von Funktionen
challengeType: 1
forumTopicId: 301235
dashedName: refactor-global-variables-out-of-functions
---

# --description--

Bisher haben wir zwei unterschiedliche Prinzipien der funktionalen Programmierung kennengelernt:

1) Verändere keine Variablen oder Objekte - erstelle neue Variablen und Objekte und gib sie bei Bedarf aus einer Funktion zurück. Tipp: Wenn du etwas wie `const newArr = arrVar` verwendest, wobei `arrVar` ein Array ist, wird einfach ein Verweis auf die bestehende Variable erstellt und keine Kopie. Wenn du also einen Wert in `newArr` änderst, ändert sich der Wert in `arrVar`.

2) Deklariere Funktionsparameter - jede Berechnung innerhalb einer Funktion hängt nur von den Argumenten ab, die der Funktion übergeben werden, und nicht von einem globalen Objekt oder einer Variablen.

Das Addieren von eins zu einer Zahl ist nicht sehr aufregend, aber wir können diese Prinzipien anwenden, wenn wir mit Arrays oder komplexeren Objekten arbeiten.

# --instructions--

Schreibe den Code so um, dass das globale Array `bookList` in keiner der Funktionen verändert wird. Die Funktion `add` soll den angegebenen Buchtitel `bookName` an das Ende des übergebenen Arrays anfügen und ein neues Array (Liste) zurückgeben. Die Funktion `remove` soll den angegebenen `bookName` aus dem Array entfernen, das ihr übergeben wurde.

**Hinweis:** Beide Funktionen sollten ein Array zurückgeben, und alle neuen Parameter sollten vor dem Parameter `bookName` hinzugefügt werden.

# --hints--

`bookList` sollte sich nicht ändern und immer noch `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]` entsprechen.

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

`add(bookList, "A Brief History of Time")` sollte `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]` zurückgeben.

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

`remove(bookList, "On The Electrodynamics of Moving Bodies")` sollte `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]` zurückgeben.

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

`remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");` sollte gleich `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]` sein.

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
