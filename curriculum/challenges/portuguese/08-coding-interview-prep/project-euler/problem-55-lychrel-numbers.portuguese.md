---
id: 5900f3a31000cf542c50feb6
challengeType: 5
title: 'Problem 55: Lychrel numbers'
videoUrl: ''
localeTitle: 'Problema 55: Números Lychrel'
---

## Description
<section id="description"> Se tomarmos 47, inverta e adicione 47 + 74 = 121, que é palíndromo. Nem todos os números produzem palíndromos tão rapidamente. Por exemplo, 349 + 943 = 1292, 1292 + 2921 = 4213 4213 + 3124 = 7337 Ou seja, 349 levou três iterações para chegar a um palíndromo. Embora ninguém tenha provado isso ainda, acredita-se que alguns números, como o 196, nunca produzem um palíndromo. Um número que nunca forma um palíndromo através do processo reverso e adicionar é chamado de número Lychrel. Devido à natureza teórica destes números, e para o propósito deste problema, assumiremos que um número é Lychrel até prova em contrário. Além disso, você está informado de que, para cada número abaixo de dez mil, ele (i) se tornará um palíndromo em menos de cinquenta iterações, ou, (ii) ninguém, com todo o poder computacional que existe, conseguiu até agora mapeá-lo para um palíndromo. De fato, 10677 é o primeiro número a ser mostrado para requerer mais de cinquenta iterações antes de produzir um palíndromo: 4668731596684224866951378664 (53 iterações, 28 dígitos). Surpreendentemente, existem números palíndricos que são, eles próprios, números de Lychrel; O primeiro exemplo é 4994. Quantas Lychrel números estão lá abaixo <code>num</code> ? NOTA: Redação foi modificada ligeiramente em 24 de abril de 2007 para enfatizar a natureza teórica dos números Lychrel. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert.strictEqual(countLychrelNumbers(1000), 13, "<code>countLychrelNumbers(1000)</code> should return 13.");'
  - text: ''
    testString: 'assert.strictEqual(countLychrelNumbers(5000), 76, "<code>countLychrelNumbers(5000)</code> should return 76.");'
  - text: ''
    testString: 'assert.strictEqual(countLychrelNumbers(10000), 249, "<code>countLychrelNumbers(10000)</code> should return 249.");'
  - text: ''
    testString: 'assert.strictEqual(countLychrelNumbers(3243), 39, "Your function should count all Lychrel numbers.");'
  - text: ''
    testString: 'assert.strictEqual(countLychrelNumbers(7654), 140, "Your function should pass all test cases.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countLychrelNumbers(num) {
  // Good luck!
  return true;
}

countLychrelNumbers(10000);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
