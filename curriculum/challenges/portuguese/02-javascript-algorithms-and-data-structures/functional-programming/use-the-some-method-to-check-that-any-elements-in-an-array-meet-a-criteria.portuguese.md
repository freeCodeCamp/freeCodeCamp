---
id: 587d7dab367417b2b2512b6f
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
challengeType: 1
videoUrl: ''
localeTitle: Use o método Some para verificar se todos os elementos em uma matriz atendem a um critério
---

## Description
<section id="description"> O método <code>some</code> funciona com arrays para verificar se <em>algum</em> elemento passa por um teste específico. Retorna um valor booleano - <code>true</code> se algum dos valores atender aos critérios, <code>false</code> se não. Por exemplo, o código a seguir verificaria se algum elemento na matriz de <code>numbers</code> é menor que 10: <blockquote> números var = [10, 50, 8, 220, 110, 11]; <br> numbers.some (function (currentValue) { <br> return currentValue &lt;10; <br> }); <br> // Retorna true </blockquote></section>

## Instructions
<section id="instructions"> Use o método <code>some</code> dentro da função <code>checkPositive</code> para verificar se algum elemento em <code>arr</code> é positivo. A função deve retornar um valor booleano. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método <code>some</code> .
    testString: 'assert(code.match(/\.some/g), "Your code should use the <code>some</code> method.");'
  - text: '<code>checkPositive([1, 2, 3, -4, 5])</code> deve retornar <code>true</code> .'
    testString: 'assert(checkPositive([1, 2, 3, -4, 5]), "<code>checkPositive([1, 2, 3, -4, 5])</code> should return <code>true</code>.");'
  - text: '<code>checkPositive([1, 2, 3, 4, 5])</code> deve retornar <code>true</code> .'
    testString: 'assert(checkPositive([1, 2, 3, 4, 5]), "<code>checkPositive([1, 2, 3, 4, 5])</code> should return <code>true</code>.");'
  - text: '<code>checkPositive([-1, -2, -3, -4, -5])</code> deve retornar <code>false</code> .'
    testString: 'assert(!checkPositive([-1, -2, -3, -4, -5]), "<code>checkPositive([-1, -2, -3, -4, -5])</code> should return <code>false</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkPositive(arr) {
  // Add your code below this line


  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
function checkPositive(arr) {
  // Add your code below this line
  return arr.some(n => n > 0);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```
</section>
