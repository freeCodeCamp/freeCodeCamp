---
id: 598e8944f009e646fc236146
title: Understanding Undefined Value returned from a Function
challengeType: 1
videoUrl: ''
localeTitle: Entendiendo el valor indefinido devuelto por una función
---

## Description
<section id="description"> Una función puede incluir la declaración de <code>return</code> , pero no tiene que hacerlo. En el caso de que la función no tenga una declaración de <code>return</code> , cuando la llame, la función procesa el código interno pero el valor devuelto <code>undefined</code> está <code>undefined</code> . <strong>Ejemplo</strong> <blockquote> var suma = 0; <br> función addSum (num) { <br> suma = suma + num; <br> } <br> var devolvió el valor = addSum (3); // la suma será modificada pero el valor devuelto es indefinido </blockquote> <code>addSum</code> es una función sin una declaración de <code>return</code> . La función cambiará la variable de <code>sum</code> global, pero el valor devuelto de la función <code>undefined</code> está <code>undefined</code> </section>

## Instructions
<section id="instructions"> Crea una función <code>addFive</code> sin ningún argumento. Esta función agrega 5 a la variable de <code>sum</code> , pero su valor devuelto <code>undefined</code> está <code>undefined</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addFive</code> debería ser una función
    testString: 'assert(typeof addFive === "function", "<code>addFive</code> should be a function");'
  - text: <code>sum</code> debe ser igual a 8
    testString: 'assert(sum === 8, "<code>sum</code> should be equal to 8");'
  - text: El valor devuelto de <code>addFive</code> debe estar <code>undefined</code>
    testString: 'assert(addFive() === undefined, "Returned value from <code>addFive</code> should be <code>undefined</code>");'
  - text: 'Dentro de tus funciones, suma 5 a la variable de <code>sum</code>'
    testString: 'assert(code.match(/(sum\s*\=\s*sum\s*\+\s*5)|(sum\s*\+\=\s*5)/g).length === 1, "Inside of your functions, add 5 to the <code>sum</code> variable");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line



// Only change code above this line
var returnedValue = addFive();

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
