---
id: 587d7dab367417b2b2512b6e
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
challengeType: 1
videoUrl: ''
localeTitle: Use o método Every para verificar se todos os elementos em uma matriz atendem a um critério
---

## Description
<section id="description"> O método <code>every</code> funciona com arrays para verificar se <em>cada</em> elemento passa por um teste específico. Retorna um valor booleano - <code>true</code> se todos os valores atendem aos critérios, <code>false</code> se não. Por exemplo, o código a seguir verificaria se cada elemento na matriz de <code>numbers</code> é menor que 10: <blockquote> números var = [1, 5, 8, 0, 10, 11]; <br> numbers.every (function (currentValue) { <br> return currentValue &lt;10; <br> }); <br> // Retorna falso </blockquote></section>

## Instructions
<section id="instructions"> Use o método <code>every</code> dentro da função <code>checkPositive</code> para verificar se todos os elementos em <code>arr</code> são positivos. A função deve retornar um valor booleano. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método <code>every</code> .
    testString: 'assert(code.match(/\.every/g), "Your code should use the <code>every</code> method.");'
  - text: '<code>checkPositive([1, 2, 3, -4, 5])</code> deve retornar <code>false</code> .'
    testString: 'assert(!checkPositive([1, 2, 3, -4, 5]), "<code>checkPositive([1, 2, 3, -4, 5])</code> should return <code>false</code>.");'
  - text: '<code>checkPositive([1, 2, 3, 4, 5])</code> deve retornar <code>true</code> .'
    testString: 'assert(checkPositive([1, 2, 3, 4, 5]), "<code>checkPositive([1, 2, 3, 4, 5])</code> should return <code>true</code>.");'
  - text: '<code>checkPositive([1, -2, 3, -4, 5])</code> deve retornar <code>false</code> .'
    testString: 'assert(!checkPositive([1, -2, 3, -4, 5]), "<code>checkPositive([1, -2, 3, -4, 5])</code> should return <code>false</code>.");'

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
  return arr.every(n => n > 0);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```
</section>
