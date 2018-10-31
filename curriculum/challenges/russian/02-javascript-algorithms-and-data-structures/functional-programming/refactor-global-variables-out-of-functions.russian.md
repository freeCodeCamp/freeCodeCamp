---
id: 587d7b8f367417b2b2512b60
title: Refactor Global Variables Out of Functions
challengeType: 1
videoUrl: ''
localeTitle: Глобальные переменные Refactor вне функций
---

## Description
<section id="description"> До сих пор мы видели два разных принципа функционального программирования: 1) Не изменяйте переменную или объект - создавайте новые переменные и объекты и возвращайте их, если необходимо, из функции. 2) Объявлять аргументы функции - любое вычисление внутри функции зависит только от аргументов, а не от любого глобального объекта или переменной. Добавление одного к числу не очень интересно, но мы можем применять эти принципы при работе с массивами или более сложными объектами. </section>

## Instructions
<section id="instructions"> Refactor (переписать) код, поэтому глобальный массив <code>bookList</code> не изменяется внутри любой функции. Функция <code>add</code> должна добавить данное имя <code>bookName</code> в конец массива. Функция <code>remove</code> должна удалить данную <code>bookName</code> из массива. Обе функции должны возвращать массив, и любые новые параметры должны быть добавлены до имени <code>bookName</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>bookList</code> не должен меняться и <code>bookList</code> равным <code>[&quot;The Hound of the Baskervilles&quot;, &quot;On The Electrodynamics of Moving Bodies&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;]</code> .'
    testString: 'assert(JSON.stringify(bookList) === JSON.stringify(["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]), "<code>bookList</code> should not change and still equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.");'
  - text: '<code>newBookList</code> должен равняться <code>[&quot;The Hound of the Baskervilles&quot;, &quot;On The Electrodynamics of Moving Bodies&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;, &quot;A Brief History of Time&quot;]</code> <code>newBookList</code> <code>[&quot;The Hound of the Baskervilles&quot;, &quot;On The Electrodynamics of Moving Bodies&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;, &quot;A Brief History of Time&quot;]</code> .'
    testString: 'assert(JSON.stringify(newBookList) === JSON.stringify(["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]), "<code>newBookList</code> should equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]</code>.");'
  - text: '<code>newerBookList</code> должен равняться <code>[&quot;The Hound of the Baskervilles&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;]</code> <code>newerBookList</code> <code>[&quot;The Hound of the Baskervilles&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;]</code> .'
    testString: 'assert(JSON.stringify(newerBookList) === JSON.stringify(["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]), "<code>newerBookList</code> should equal <code>["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.");'
  - text: '<code>newestBookList</code> должен равняться <code>[&quot;The Hound of the Baskervilles&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;, &quot;A Brief History of Time&quot;]</code> <code>newestBookList</code> <code>[&quot;The Hound of the Baskervilles&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;, &quot;A Brief History of Time&quot;]</code> .'
    testString: 'assert(JSON.stringify(newestBookList) === JSON.stringify(["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]), "<code>newestBookList</code> should equal <code>["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (bookName) {

  return bookList.push(bookName);

  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookName) {
  if (bookList.indexOf(bookName) >= 0) {

    return bookList.splice(0, 1, bookName);

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
// solution required
```
</section>
