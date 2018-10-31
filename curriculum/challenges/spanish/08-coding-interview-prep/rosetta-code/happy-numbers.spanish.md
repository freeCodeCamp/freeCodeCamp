---
title: Happy numbers
id: 594810f028c0303b75339ad1
challengeType: 5
videoUrl: ''
localeTitle: Números felices
---

## Description
<section id="description"><p> Un número feliz se define mediante el siguiente proceso: </p><p> Comenzando con cualquier entero positivo, reemplaza el número por la suma de los cuadrados de sus dígitos y repite el proceso hasta que el número sea igual a 1 (donde permanecerá), o se repite sin cesar en un ciclo que no incluye 1. Esos números por lo que este proceso termina en 1 son números felices, mientras que aquellos que no terminan en 1 son números infelices. </p><p> Implemente una función que devuelva verdadero si el número es feliz o falso si no lo es. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>happy</code> es una función.
    testString: 'assert(typeof happy === "function", "<code>happy</code> is a function.");'
  - text: <code>happy(1)</code> debe devolver un booleano.
    testString: 'assert(typeof happy(1) === "boolean", "<code>happy(1)</code> should return a boolean.");'
  - text: <code>happy(1)</code> debe devolver verdadero.
    testString: 'assert(happy(1), "<code>happy(1)</code> should return true.");'
  - text: <code>happy(2)</code> debe devolver falso.
    testString: 'assert(!happy(2), "<code>happy(2)</code> should return false.");'
  - text: <code>happy(7)</code> debe devolver verdadero.
    testString: 'assert(happy(7), "<code>happy(7)</code> should return true.");'
  - text: <code>happy(10)</code> debe devolver verdadero.
    testString: 'assert(happy(10), "<code>happy(10)</code> should return true.");'
  - text: <code>happy(13)</code> debe devolver el verdadero.
    testString: 'assert(happy(13), "<code>happy(13)</code> should return true.");'
  - text: <code>happy(19)</code> debe devolver el verdadero.
    testString: 'assert(happy(19), "<code>happy(19)</code> should return true.");'
  - text: <code>happy(23)</code> debe devolver verdadero.
    testString: 'assert(happy(23), "<code>happy(23)</code> should return true.");'
  - text: <code>happy(28)</code> debe devolver verdadero.
    testString: 'assert(happy(28), "<code>happy(28)</code> should return true.");'
  - text: <code>happy(31)</code> debe devolver verdadero.
    testString: 'assert(happy(31), "<code>happy(31)</code> should return true.");'
  - text: '<code>happy(32)</code> debe devolver verdadero :.'
    testString: 'assert(happy(32), "<code>happy(32)</code> should return true:.");'
  - text: <code>happy(33)</code> debe devolver falso.
    testString: 'assert(!happy(33), "<code>happy(33)</code> should return false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function happy (number) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
