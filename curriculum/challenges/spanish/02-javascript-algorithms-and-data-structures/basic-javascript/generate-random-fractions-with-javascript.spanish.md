---
id: cf1111c1c11feddfaeb9bdef
title: Generate Random Fractions with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Generar fracciones aleatorias con JavaScript
---

## Description
<section id="description"> Los números aleatorios son útiles para crear un comportamiento aleatorio. JavaScript tiene una función <code>Math.random()</code> que genera un número decimal aleatorio entre <code>0</code> (incluido) y no hasta <code>1</code> (exclusivo). Por <code>Math.random()</code> tanto, <code>Math.random()</code> puede devolver un <code>0</code> pero nunca devolver una <code>1</code> <strong>Nota</strong> <br> Al igual que el <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">almacenamiento de valores con el operador igual</a> , todas las llamadas de función se resolverán antes de que se ejecute la <code>return</code> , por lo que podemos <code>return</code> el valor de la función <code>Math.random()</code> . </section>

## Instructions
<section id="instructions"> Cambie <code>randomFraction</code> para devolver un número aleatorio en lugar de devolver <code>0</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>randomFraction</code> debería devolver un número aleatorio.
    testString: 'assert(typeof randomFraction() === "number", "<code>randomFraction</code> should return a random number.");'
  - text: El número devuelto por <code>randomFraction</code> debe ser un decimal.
    testString: 'assert((randomFraction()+""). match(/\./g), "The number returned by <code>randomFraction</code> should be a decimal.");'
  - text: Debería estar usando <code>Math.random</code> para generar el número decimal aleatorio.
    testString: 'assert(code.match(/Math\.random/g).length >= 0, "You should be using <code>Math.random</code> to generate the random decimal number.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function randomFraction() {

  // Only change code below this line.

  return 0;

  // Only change code above this line.
}

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
