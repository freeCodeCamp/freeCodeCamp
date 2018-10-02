---
id: 587d7b8f367417b2b2512b60
title: Refactor Global Variables Out of Functions
challengeType: 1
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
Refactor (rewrite) the code so the global array <code>bookList</code> is not changed inside either function. The <code>add</code> function should add the given <code>bookName</code> to the end of an array. The <code>remove</code> function should remove the given <code>bookName</code> from an array. Both functions should return an array, and any new parameters should be added before the <code>bookName</code> one.
</section>

## Tests
<section id='tests'>

```yml
- text: '<code>bookList</code> should not change and still equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.'
  testString: 'assert(JSON.stringify(bookList) === JSON.stringify(["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]), ''<code>bookList</code> should not change and still equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.'');'
- text: '<code>newBookList</code> should equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]</code>.'
  testString: 'assert(JSON.stringify(newBookList) === JSON.stringify([''The Hound of the Baskervilles'', ''On The Electrodynamics of Moving Bodies'', ''Philosophiæ Naturalis Principia Mathematica'', ''Disquisitiones Arithmeticae'', ''A Brief History of Time'']), ''<code>newBookList</code> should equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]</code>.'');'
- text: '<code>newerBookList</code> should equal <code>["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.'
  testString: 'assert(JSON.stringify(newerBookList) === JSON.stringify([''The Hound of the Baskervilles'', ''Philosophiæ Naturalis Principia Mathematica'', ''Disquisitiones Arithmeticae'']), ''<code>newerBookList</code> should equal <code>["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.'');'
- text: '<code>newestBookList</code> should equal <code>["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]</code>.'
  testString: 'assert(JSON.stringify(newestBookList) === JSON.stringify([''The Hound of the Baskervilles'', ''Philosophiæ Naturalis Principia Mathematica'', ''Disquisitiones Arithmeticae'', ''A Brief History of Time'']), ''<code>newestBookList</code> should equal <code>["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]</code>.'');'

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
