---
title: Amicable pairs
id: 5949b579404977fbaefcd737
challengeType: 5
videoUrl: ''
localeTitle: Pares amigáveis
---

## Description
<section id="description"> Dois inteiros $ N $ e $ M $ são considerados <a href="https://en.wikipedia.org/wiki/Amicable numbers" title="wp: números amigáveis">pares amigáveis</a> se $ N \ neq M $ e a soma dos <a href="http://rosettacode.org/wiki/Proper divisors" title="Divisores apropriados">divisores apropriados</a> de $ N $ ($ \ mathrm {sum} (\ mathrm {propDivs} (N)) $) $ = M $ assim como $ \ mathrm {sum} (\ mathrm {propDivs} (M)) = N $. Exemplo: 1184 e 1210 são um par amigável, com divisores apropriados: 1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 e 1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605, respectivamente. Tarefa: Calcule e mostre aqui os pares Amicáveis ​​abaixo de 20.000 (são oito). Tarefas relacionadas <a href="http://rosettacode.org/wiki/Proper divisors" title="Divisores apropriados">Divisores adequados Classificação</a> <a href="http://rosettacode.org/wiki/Abundant, deficient and perfect number classifications" title="Classificações numéricas abundantes, deficientes e perfeitas">abundante, deficiente e perfeita dos números Classificações da</a> <a href="http://rosettacode.org/wiki/Aliquot sequence classifications" title="Classificações de sequências de alíquotas">sequência das frações</a> e sua classificação amigável. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>amicablePairsUpTo</code> é uma função.
    testString: 'assert(typeof amicablePairsUpTo === "function", "<code>amicablePairsUpTo</code> is a function.");'
  - text: '<code>amicablePairsUpTo(300)</code> deve retornar <code>[[220,284]]</code> .'
    testString: 'assert.deepEqual(amicablePairsUpTo(300), answer300, "<code>amicablePairsUpTo(300)</code> should return <code>[[220,284]]</code>.");'
  - text: '<code>amicablePairsUpTo(3000)</code> deve retornar <code>[[220,284],[1184,1210],[2620,2924]]</code> .'
    testString: 'assert.deepEqual(amicablePairsUpTo(3000), answer3000, "<code>amicablePairsUpTo(3000)</code> should return <code>[[220,284],[1184,1210],[2620,2924]]</code>.");'
  - text: '<code>amicablePairsUpTo(20000)</code> deve retornar <code>[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]</code> .'
    testString: 'assert.deepEqual(amicablePairsUpTo(20000), answer20000, "<code>amicablePairsUpTo(20000)</code> should return <code>[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function amicablePairsUpTo (maxNum) {
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
