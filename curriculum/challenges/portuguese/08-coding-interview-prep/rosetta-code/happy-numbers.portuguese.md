---
title: Happy numbers
id: 594810f028c0303b75339ad1
challengeType: 5
videoUrl: ''
localeTitle: Números felizes
---

## Description
<section id="description"><p> Um número feliz é definido pelo seguinte processo: </p><p> Começando com qualquer número inteiro positivo, substitua o número pela soma dos quadrados de seus dígitos e repita o processo até que o número seja igual a 1 (onde permanecerá), ou faça um loop infinitamente em um ciclo que não inclua 1. Esses números para os quais este processo termina em 1 são números felizes, enquanto aqueles que não terminam em 1 são números infelizes. </p><p> Implemente uma função que retorne true se o número for feliz ou false, se não for. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>happy</code> é uma função.
    testString: 'assert(typeof happy === "function", "<code>happy</code> is a function.");'
  - text: <code>happy(1)</code> deve retornar um booleano.
    testString: 'assert(typeof happy(1) === "boolean", "<code>happy(1)</code> should return a boolean.");'
  - text: <code>happy(1)</code> deve retornar verdadeiro.
    testString: 'assert(happy(1), "<code>happy(1)</code> should return true.");'
  - text: <code>happy(2)</code> deve retornar falso.
    testString: 'assert(!happy(2), "<code>happy(2)</code> should return false.");'
  - text: <code>happy(7)</code> deve retornar verdadeiro.
    testString: 'assert(happy(7), "<code>happy(7)</code> should return true.");'
  - text: <code>happy(10)</code> deve retornar verdadeiro.
    testString: 'assert(happy(10), "<code>happy(10)</code> should return true.");'
  - text: <code>happy(13)</code> deve retornar verdadeiro.
    testString: 'assert(happy(13), "<code>happy(13)</code> should return true.");'
  - text: <code>happy(19)</code> deve retornar verdadeiro.
    testString: 'assert(happy(19), "<code>happy(19)</code> should return true.");'
  - text: <code>happy(23)</code> deve retornar verdadeiro.
    testString: 'assert(happy(23), "<code>happy(23)</code> should return true.");'
  - text: <code>happy(28)</code> deve retornar verdadeiro.
    testString: 'assert(happy(28), "<code>happy(28)</code> should return true.");'
  - text: <code>happy(31)</code> deve retornar verdadeiro.
    testString: 'assert(happy(31), "<code>happy(31)</code> should return true.");'
  - text: '<code>happy(32)</code> deve retornar verdadeiro:'
    testString: 'assert(happy(32), "<code>happy(32)</code> should return true:.");'
  - text: <code>happy(33)</code> deve retornar falso.
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
