---
id: 587d7b8f367417b2b2512b60
title: Refactor Global Variables Out of Functions
challengeType: 1
videoUrl: ''
localeTitle: Refatorar variáveis ​​globais com funções
---

## Description
<section id="description"> Até agora, vimos dois princípios distintos para a programação funcional: 1) Não altere uma variável ou objeto - crie novas variáveis ​​e objetos e os retorne, se necessário, a partir de uma função. 2) Declarar argumentos de função - qualquer cálculo dentro de uma função depende apenas dos argumentos e não de qualquer objeto ou variável global. Adicionar um a um número não é muito interessante, mas podemos aplicar esses princípios ao trabalhar com matrizes ou objetos mais complexos. </section>

## Instructions
<section id="instructions"> Refatorar (reescrever) o código para que a matriz global <code>bookList</code> não seja alterada dentro de nenhuma função. A função <code>add</code> deve adicionar o <code>bookName</code> dado ao final de um array. A função <code>remove</code> deve remover o <code>bookName</code> dado de uma matriz. Ambas as funções devem retornar um array, e quaisquer novos parâmetros devem ser adicionados antes do <code>bookName</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>bookList</code> não deve mudar e ainda ser igual <code>[&quot;The Hound of the Baskervilles&quot;, &quot;On The Electrodynamics of Moving Bodies&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;]</code> .'
    testString: 'assert(JSON.stringify(bookList) === JSON.stringify(["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]), "<code>bookList</code> should not change and still equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.");'
  - text: '<code>newBookList</code> deve ser igual <code>[&quot;The Hound of the Baskervilles&quot;, &quot;On The Electrodynamics of Moving Bodies&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;, &quot;A Brief History of Time&quot;]</code> .'
    testString: 'assert(JSON.stringify(newBookList) === JSON.stringify(["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]), "<code>newBookList</code> should equal <code>["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]</code>.");'
  - text: '<code>newerBookList</code> deve ser igual a <code>[&quot;The Hound of the Baskervilles&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;]</code> .'
    testString: 'assert(JSON.stringify(newerBookList) === JSON.stringify(["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]), "<code>newerBookList</code> should equal <code>["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]</code>.");'
  - text: '<code>newestBookList</code> deve ser igual <code>[&quot;The Hound of the Baskervilles&quot;, &quot;Philosophiæ Naturalis Principia Mathematica&quot;, &quot;Disquisitiones Arithmeticae&quot;, &quot;A Brief History of Time&quot;]</code> .'
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
