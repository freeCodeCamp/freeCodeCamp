---
id: cf1111c1c12feddfaeb1bdef
title: Generate Random Whole Numbers with JavaScript
localeTitle: Generar números enteros al azar con JavaScript
challengeType: 1
---

## Description
<section id='description'> 
Es genial que podamos generar números decimales aleatorios, pero es aún más útil si lo usamos para generar números enteros aleatorios. 
<ol><li> Usa <code>Math.random()</code> para generar un decimal aleatorio. </li><li> Multiplica ese decimal aleatorio por <code>20</code> . </li><li> Use otra función, <code>Math.floor()</code> para redondear el número a su número entero más cercano. </li></ol> 
Recuerda que <code>Math.random()</code> nunca puede devolver un <code>1</code> y, porque estamos redondeando, es imposible obtener <code>20</code> . Esta técnica nos dará un número entero entre <code>0</code> y <code>19</code> . 
Poniendo todo junto, así es como se ve nuestro código: 
<code>Math.floor(Math.random() * 20);</code> 
Estamos llamando a <code>Math.random()</code> , multiplicamos el resultado por 20 y luego <code>Math.floor()</code> el valor a la función <code>Math.floor()</code> para redondear el valor al número entero más cercano. 
</section>

## Instructions
<section id='instructions'> 
Use esta técnica para generar y devolver un número entero aleatorio entre <code>0</code> y <code>9</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El resultado de <code>randomWholeNum</code> debe ser un número entero.
    testString: 'assert(typeof randomWholeNum() === "number" && (function(){var r = randomWholeNum();return Math.floor(r) === r;})(), "The result of <code>randomWholeNum</code> should be a whole number.");'
  - text: Debería estar usando <code>Math.random</code> para generar un número aleatorio.
    testString: 'assert(code.match(/Math.random/g).length > 1, "You should be using <code>Math.random</code> to generate a random number.");'
  - text: Debería haber multiplicado el resultado de <code>Math.random</code> por 10 para que sea un número entre cero y nueve.
    testString: 'assert(code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) || code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g), "You should have multiplied the result of <code>Math.random</code> by 10 to make it a number that is between zero and nine.");'
  - text: Debe usar <code>Math.floor</code> para eliminar la parte decimal del número.
    testString: 'assert(code.match(/Math.floor/g).length > 1, "You should use <code>Math.floor</code> to remove the decimal part of the number.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.random();
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
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```

</section>
