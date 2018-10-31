---
title: Taxicab numbers
id: 594ecc0d9a8cf816e3340187
challengeType: 5
videoUrl: ''
localeTitle: Números de Taxicab
---

## Description
<section id="description"> Um <a href="https://en.wikipedia.org/wiki/Hardy–Ramanujan number" title="wp: Hardy – Ramanujan number">número de táxi</a> (a definição que está sendo usada aqui) é um inteiro positivo que pode ser expresso como a soma de dois cubos positivos em mais de uma maneira. O primeiro número de táxi é 1729, que é: 1 <sup>3</sup> + 12 <sup>3</sup> e 9 <sup>3</sup> + 10 <sup>3</sup> . Números de táxi também são conhecidos como: * números de táxi * números de táxi-táxi * números de táxi * números Hardy-Ramanujan Tarefa: Escreva uma função que retorna os números mais baixos N táxis. Para cada um dos números de táxi, mostre o número e seus cubos constituintes. Veja também: [http://oeis.org/A001235 A001235 números de táxis] na Enciclopédia On-Line de Seqüências Inteiras. <a href="http://mathworld.wolfram.com/Hardy-RamanujanNumber.html">Número Hardy-Ramanujan</a> no MathWorld. <a href="http://mathworld.wolfram.com/TaxicabNumber.html">Número do táxi</a> no MathWorld. <a href="https://en.wikipedia.org/wiki/Taxicab_number">número do táxi</a> na Wikipedia. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>taxicabNumbers</code> é uma função.
    testString: 'assert(typeof taxicabNumbers === "function", "<code>taxicabNumbers </code> is a function.");'
  - text: <code>taxicabNumbers</code> deve retornar um array.
    testString: 'assert(typeof taxicabNumbers(2) === "object", "<code>taxicabNumbers </code> should return an array.");'
  - text: <code>taxicabNumbers</code> deve retornar uma matriz de números.
    testString: 'assert(typeof taxicabNumbers(100)[0] === "number", "<code>taxicabNumbers </code> should return an array of numbers.");'
  - text: '<code>taxicabNumbers(4)</code> deve devolver [1729, 4104, 13832, 20683].'
    testString: 'assert.deepEqual(taxicabNumbers(4), res4, "<code>taxicabNumbers(4) </code> must return [1729, 4104, 13832, 20683].");'
  - text: 'taxicabNumbers (25) deve retornar [1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656, 110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264. , 327763, 373464, 402597]'
    testString: 'assert.deepEqual(taxicabNumbers(25), res25, "taxicabNumbers(25) should return [1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656, 110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264, 327763, 373464, 402597]");'
  - text: 'taxicabNumbers (39) números resultantes de 20 - 29 devem ser [314496,320264,327763,373464,402597,439101,443889,513000,513856].'
    testString: 'assert.deepEqual(taxicabNumbers(39).slice(20, 29), res39From20To29, "taxicabNumbers(39) resulting numbers from 20 - 29 should be [314496,320264,327763,373464,402597,439101,443889,513000,513856].");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function taxicabNumbers (n) {
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
