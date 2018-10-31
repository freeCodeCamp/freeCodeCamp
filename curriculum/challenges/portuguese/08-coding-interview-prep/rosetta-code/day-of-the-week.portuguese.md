---
title: Day of the week
id: 5966f99c45e8976909a85575
challengeType: 5
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"><p> Uma empresa decide que, sempre que o Natal cai no domingo, eles darão aos seus empregados todos os feriados extra pagos para que, juntamente com feriados, os trabalhadores não precisem trabalhar na semana seguinte (entre 25 de dezembro e 1 de janeiro). </p><p> Tarefa: </p><p> Escreva uma função que tenha um ano inicial e um ano final e retorne uma matriz de todos os anos em que o dia 25 de dezembro será um domingo. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>findXmasSunday</code> é uma função.
    testString: 'assert(typeof findXmasSunday === "function", "<code>findXmasSunday</code> is a function.");'
  - text: '<code>findChristmasSunday(2000, 2100)</code> deve retornar um array.'
    testString: 'assert(typeof findXmasSunday(2000, 2100) === "object", "<code>findChristmasSunday(2000, 2100)</code> should return an array.");'
  - text: '<code>findChristmasSunday(2008, 2121</code> deve retornar [1977, 1983, 1988, 1994, 2005, 2011, 2016]'
    testString: 'assert.deepEqual(findXmasSunday(1970, 2017), firstSolution, "<code>findChristmasSunday(2008, 2121</code> should return [1977, 1983, 1988, 1994, 2005, 2011, 2016]");'
  - text: '<code>findChristmasSunday(2008, 2121</code> deve retornar [2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]'
    testString: 'assert.deepEqual(findXmasSunday(2008, 2121), secondSolution, "<code>findChristmasSunday(2008, 2121</code> should return [2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findXmasSunday (start, end) {
  // Good luck!
  return true;
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
