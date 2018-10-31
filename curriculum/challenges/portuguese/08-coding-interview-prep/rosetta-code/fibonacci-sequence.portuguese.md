---
title: Fibonacci sequence
id: 597f24c1dda4e70f53c79c81
challengeType: 5
videoUrl: ''
localeTitle: Seqüência de Fibonacci
---

## Description
<section id="description"><p> Adicione uma função para gerar o <big><sup>n-ésimo</sup></big> número de Fibonacci. </p> /// <p> O <big><sup>n-ésimo</sup></big> número de Fibonacci é dada por: /// </p><p> F <sub>n</sub> = F <sub>n-1</sub> + F <sub>n-2</sub> </p> /// <p> Os dois primeiros termos da série são 0, 1. </p> /// <p> Assim, a série é: 0, 1, 1, 2, 3, 5, 8, 13 ... </p> /// </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fibonacci</code> é uma função.
    testString: 'assert(typeof fibonacci === "function", "<code>fibonacci</code> is a function.");'
  - text: <code>fibonacci(2)</code> deve retornar um número.
    testString: 'assert(typeof fibonacci(2) == "number", "<code>fibonacci(2)</code> should return a number.");'
  - text: <code>fibonacci(3)</code> deve retornar 1. &quot;)
    testString: 'assert.equal(fibonacci(3),1,"<code>fibonacci(3)</code> should return 1.");'
  - text: <code>fibonacci(5)</code> deve retornar 3. &quot;)
    testString: 'assert.equal(fibonacci(5),3,"<code>fibonacci(5)</code> should return 3.");'
  - text: <code>fibonacci(10)</code> deve retornar 34. &quot;)
    testString: 'assert.equal(fibonacci(10),34,"<code>fibonacci(10)</code> should return 34.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fibonacci(n) {
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
