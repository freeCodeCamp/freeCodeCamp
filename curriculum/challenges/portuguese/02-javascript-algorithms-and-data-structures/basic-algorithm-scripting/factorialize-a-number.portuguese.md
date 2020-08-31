---
id: a302f7aae1aa3152a5b413bc
title: Factorialize a Number
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Factorialize um número
---

## Description
<section id="description"> Retorna o fatorial do inteiro fornecido. Se o inteiro é representado com a letra n, um fatorial é o produto de todos os inteiros positivos menores ou iguais a n. Os fatoriais são frequentemente representados com a notação abreviada <code>n!</code> Por exemplo: <code>5! = 1 * 2 * 3 * 4 * 5 = 120</code> Somente números inteiros maiores ou iguais a zero serão fornecidos para a função. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>factorialize(5)</code> deve retornar um número.
    testString: 'assert(typeof factorialize(5) === "number", "<code>factorialize(5)</code> should return a number.");'
  - text: <code>factorialize(5)</code> deve retornar 120.
    testString: 'assert(factorialize(5) === 120, "<code>factorialize(5)</code> should return 120.");'
  - text: <code>factorialize(10)</code> deve retornar 3628800.
    testString: 'assert(factorialize(10) === 3628800, "<code>factorialize(10)</code> should return 3628800.");'
  - text: <code>factorialize(20)</code> deve retornar 2432902008176640000.
    testString: 'assert(factorialize(20) === 2432902008176640000, "<code>factorialize(20)</code> should return 2432902008176640000.");'
  - text: <code>factorialize(0)</code> deve retornar 1.
    testString: 'assert(factorialize(0) === 1, "<code>factorialize(0)</code> should return 1.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function factorialize(num) {
  return num;
}

factorialize(5);

```

</div>



</section>

## Solution
<section id='solution'>

```js
function factorialize(num) {
  return num <= 1 ? 1 : num * factorialize(num - 1);
}

factorialize(5);
```
</section>
