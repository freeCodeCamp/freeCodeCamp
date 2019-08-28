---
id: 587d7b8f367417b2b2512b60
title: Refactor Global Variables Out of Functions
challengeType: 1
forumTopicId: 301235
localeTitle: Глобальные переменные Refactor вне функций
---

## Description
<section id='description'>
До сих пор мы видели два разных принципа функционального программирования: 1) Не изменяйте переменную или объект - создавайте новые переменные и объекты и возвращайте их, если необходимо, из функции. 2) Объявлять аргументы функции - любое вычисление внутри функции зависит только от аргументов, а не от любого глобального объекта или переменной. Добавление одного к числу не очень интересно, но мы можем применять эти принципы при работе с массивами или более сложными объектами.
</section>

## Instructions
<section id='instructions'>
Refactor (переписать) код, поэтому глобальный массив <code>bookList</code> не изменяется внутри любой функции. Функция <code>add</code> должна добавить данное имя <code>bookName</code> в конец массива. Функция <code>remove</code> должна удалить данную <code>bookName</code> из массива. Обе функции должны возвращать массив, и любые новые параметры должны быть добавлены до имени <code>bookName</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>bookList</code> should not change and still equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.
    testString: assert(JSON.stringify(bookList) === JSON.stringify(["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]));
  - text: <code>newBookList</code> should equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]</code>.
    testString: assert(JSON.stringify(newBookList) === JSON.stringify(['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae', 'A Brief History of Time']));
  - text: <code>newerBookList</code> should equal <code>["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.
    testString: assert(JSON.stringify(newerBookList) === JSON.stringify(['The Hound of the Baskervilles', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae']));
  - text: <code>newestBookList</code> should equal <code>["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]</code>.
    testString: assert(JSON.stringify(newestBookList) === JSON.stringify(['The Hound of the Baskervilles', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae', 'A Brief History of Time']));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add (bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

```

</div>

</section>

## Solution
<section id='solution'>

```js
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (bookList, bookName) {
  return [...bookList, bookName];
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookList, bookName) {
  const bookListCopy = [...bookList];
  const bookNameIndex = bookList.indexOf(bookName);
  if (bookNameIndex >= 0) {
    bookListCopy.splice(bookNameIndex, 1);
  }
  return bookListCopy;
  // Add your code above this line
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
```

</section>
