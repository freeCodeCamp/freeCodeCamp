---
id: 56533eb9ac21ba0edf2244a8
title: Storing Values with the Assignment Operator
challengeType: 1
videoUrl: ''
localeTitle: Almacenamiento de valores con el operador de asignación
---

## Description
<section id="description"> En JavaScript, puede almacenar un valor en una variable con el operador de <dfn>asignación</dfn> . <code>myVariable = 5;</code> Esto asigna el valor <code>Number</code> <code>5</code> a <code>myVariable</code> . La asignación siempre va de derecha a izquierda. Todo a la derecha del operador <code>=</code> se resuelve antes de que el valor se asigne a la variable a la izquierda del operador. <blockquote> myVar = 5; <br> myNum = myVar; </blockquote> Esto asigna <code>5</code> a <code>myVar</code> y luego resuelve <code>myVar</code> a <code>5</code> nuevamente y lo asigna a <code>myNum</code> . </section>

## Instructions
<section id="instructions"> Asigne el valor <code>7</code> a la variable <code>a</code> . Asigna los contenidos de <code>a</code> a variable <code>b</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: No cambie el código por encima de la línea
    testString: 'assert(/var a;/.test(code) && /var b = 2;/.test(code), "Do not change code above the line");'
  - text: <code>a</code> debe tener un valor de 7
    testString: 'assert(typeof a === "number" && a === 7, "<code>a</code> should have a value of 7");'
  - text: <code>b</code> debe tener un valor de 7
    testString: 'assert(typeof b === "number" && b === 7, "<code>b</code> should have a value of 7");'
  - text: <code>a</code> debe asignarse a <code>b</code> con <code>=</code>
    testString: 'assert(/b\s*=\s*a\s*;/g.test(code), "<code>a</code> should be assigned to <code>b</code> with <code>=</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var a;
var b = 2;

// Only change code below this line

```

</div>

### Before Test
<div id='js-setup'>

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
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
