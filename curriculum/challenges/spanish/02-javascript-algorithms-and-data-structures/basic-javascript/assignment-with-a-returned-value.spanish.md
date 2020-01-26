---
id: 56533eb9ac21ba0edf2244c3
title: Assignment with a Returned Value
challengeType: 1
videoUrl: ''
localeTitle: Asignación con un valor devuelto
---

## Description
<section id="description"> Si recuerda de nuestra discusión sobre el <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">almacenamiento de valores con el operador de asignación</a> , todo a la derecha del signo igual se resuelve antes de que se asigne el valor. Esto significa que podemos tomar el valor de retorno de una función y asignarlo a una variable. Supongamos que hemos predefinido una <code>sum</code> función que suma dos números, entonces: <code>ourSum = sum(5, 12);</code> <code>ourSum</code> a la función <code>sum</code> , que devuelve un valor de <code>17</code> y lo asigna a <code>ourSum</code> variable <code>ourSum</code> </section>

## Instructions
<section id="instructions"> Llame a la función <code>processArg</code> con un argumento de <code>7</code> y asigne su valor de retorno a la variable <code>processed</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>processed</code> debe tener un valor de <code>2</code>
    testString: 'assert(processed === 2, "<code>processed</code> should have a value of <code>2</code>");'
  - text: Debes asignar <code>processArg</code> a <code>processed</code>
    testString: 'assert(/processed\s*=\s*processArg\(\s*7\s*\)\s*;/.test(code), "You should assign <code>processArg</code> to <code>processed</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

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
