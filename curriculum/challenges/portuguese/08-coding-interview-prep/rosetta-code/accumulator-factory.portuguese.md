---
title: Accumulator factory
id: 594810f028c0303b75339ace
challengeType: 5
videoUrl: ''
localeTitle: Fábrica de acumuladores
---

## Description
<section id="description"><p> Crie uma função que use um único argumento (numérico) e retorne outra função que seja um acumulador. A função de acumulador retornada, por sua vez, também recebe um único argumento numérico e retorna a soma de todos os valores numéricos transmitidos até então para esse acumulador (incluindo o valor inicial passado quando o acumulador foi criado). </p><p> Regras: </p><p> Não use variáveis ​​globais. </p><p> Dica: </p><p> Os fechamentos salvam o estado externo. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>accumulator</code> é uma função.
    testString: 'assert(typeof accumulator === "function", "<code>accumulator</code> is a function.");'
  - text: <code>accumulator(0)</code> deve retornar uma função.
    testString: 'assert(typeof accumulator(0) === "function", "<code>accumulator(0)</code> should return a function.");'
  - text: <code>accumulator(0)(2)</code> deve retornar um número.
    testString: 'assert(typeof accumulator(0)(2) === "number", "<code>accumulator(0)(2)</code> should return a number.");'
  - text: 'Passando nos valores 3, -4, 1.5 e 5 deve retornar 5.5.'
    testString: 'assert(testFn(5) === 5.5, "Passing in the values 3, -4, 1.5, and 5 should return 5.5.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function accumulator (sum) {
  // Good luck!
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
