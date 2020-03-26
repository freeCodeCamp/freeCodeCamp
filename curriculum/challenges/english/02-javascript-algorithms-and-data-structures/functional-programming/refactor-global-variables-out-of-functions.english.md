---
id: 587d7b8f367417b2b2512b60
title: Refactor Global Variables Out of Functions
challengeType: 1
forumTopicId: 301235
---

## Description
<section id='description'>
So far, we have seen two distinct principles for functional programming:
1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.
2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.
Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.
</section>

## Instructions
<section id='instructions'>
Rewrite the code so the global array <code>bookList</code> is not changed inside either function. The <code>add</code> function should add the given <code>bookName</code> to the end of the array passed to it and return a new array (list). The <code>remove</code> function should remove the given <code>bookName</code> from the array passed to it.

<strong>Note:</strong> Both functions should return an array, and any new parameters should be added before the <code>bookName</code> parameter.

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
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
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
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (bookList, bookName) {
  return [...bookList, bookName];
}

function remove (bookList, bookName) {
  const bookListCopy = [...bookList];
  const bookNameIndex = bookList.indexOf(bookName);
  if (bookNameIndex >= 0) {
    bookListCopy.splice(bookNameIndex, 1);
  }
  return bookListCopy;
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
```

</section>
