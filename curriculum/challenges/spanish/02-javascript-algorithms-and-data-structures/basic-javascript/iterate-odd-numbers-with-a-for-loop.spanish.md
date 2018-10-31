---
id: 56104e9e514f539506016a5c
title: Iterate Odd Numbers With a For Loop
challengeType: 1
videoUrl: ''
localeTitle: Iterar números impares con un bucle for
---

## Description
<section id="description"> Para que los bucles no tengan que iterar uno a la vez. Al cambiar nuestra <code>final-expression</code> , podemos contar por números pares. Comenzaremos en <code>i = 0</code> y haremos un bucle mientras <code>i &lt; 10</code> . Incrementaremos <code>i</code> en 2 en cada bucle con <code>i += 2</code> . <blockquote> var ourArray = []; <br> para (var i = 0; i &lt;10; i + = 2) { <br> nuestroArray.push (i); <br> } </blockquote> <code>ourArray</code> ahora contendrá <code>[0,2,4,6,8]</code> . Cambiemos nuestra <code>initialization</code> para que podamos contar por números impares. </section>

## Instructions
<section id="instructions"> Empuje los números impares del 1 al 9 a <code>myArray</code> usando un bucle <code>for</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Usted debe estar usando una <code>for</code> bucle para esto.
    testString: 'assert(code.match(/for\s*\(/g).length > 1, "You should be using a <code>for</code> loop for this.");'
  - text: '<code>myArray</code> debe ser igual a <code>[1,3,5,7,9]</code> .'
    testString: 'assert.deepEqual(myArray, [1,3,5,7,9], "<code>myArray</code> should equal <code>[1,3,5,7,9]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

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
