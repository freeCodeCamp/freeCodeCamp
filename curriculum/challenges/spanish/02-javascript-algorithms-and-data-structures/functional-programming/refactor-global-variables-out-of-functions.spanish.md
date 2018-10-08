---
id: 587d7b8f367417b2b2512b60
title: Refactor Global Variables Out of Functions
localeTitle: Refactorizar variables globales fuera de funciones
challengeType: 1
---

## Description
<section id='description'> 
Hasta ahora, hemos visto dos principios distintos para la programación funcional: 
1) No alterar una variable u objeto: cree nuevas variables y objetos y devuélvalos si es necesario desde una función. 
2) Declare los argumentos de la función: cualquier cálculo dentro de una función depende solo de los argumentos, y no de cualquier objeto global o variable. 
Agregar uno a un número no es muy emocionante, pero podemos aplicar estos principios al trabajar con matrices u objetos más complejos. 
</section>

## Instructions
<section id='instructions'> 
Refactorice (reescriba) el código para que la matriz de <code>bookList</code> global no se <code>bookList</code> dentro de ninguna de las funciones. La función de <code>add</code> debería agregar el <code>bookName</code> de <code>bookName</code> dado al final de una matriz. La función de <code>remove</code> debe eliminar el <code>bookName</code> de <code>bookName</code> dado de una matriz. Ambas funciones deben devolver una matriz, y cualquier parámetro nuevo debe agregarse antes del <code>bookName</code> one. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>bookList</code> no debe cambiar y aún debe ser igual a <code>[&quot;The Hound of the Baskervilles&quot;, &quot;On The Electrodynamics of Moving Bodies&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;]</code> .&#39;
    testString: 'assert(JSON.stringify(bookList) === JSON.stringify(["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]), "<code>bookList</code> should not change and still equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.");'
  - text: &#39; <code>newBookList</code> debería ser igual a <code>[&quot;The Hound of the Baskervilles&quot;, &quot;On The Electrodynamics of Moving Bodies&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;, &quot;A Brief History of Time&quot;]</code> .&#39;
    testString: 'assert(JSON.stringify(newBookList) === JSON.stringify(["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]), "<code>newBookList</code> should equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]</code>.");'
  - text: &#39; <code>newerBookList</code> debería ser igual a <code>[&quot;The Hound of the Baskervilles&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;]</code> .&#39;
    testString: 'assert(JSON.stringify(newerBookList) === JSON.stringify(["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]), "<code>newerBookList</code> should equal <code>["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.");'
  - text: &#39; <code>newestBookList</code> debería ser igual a <code>[&quot;The Hound of the Baskervilles&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;, &quot;A Brief History of Time&quot;]</code> .
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
