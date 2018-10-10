---
title: Averages-Pythagorean means
id: 594d966a1467eb84194f0086
challengeType: 5
videoUrl: ''
localeTitle: Média-Pitagórica significa
---

## Description
<section id="description"><p class="rosetta__paragraph"> Calcule todas as três <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Pythagorean means" title="wp: significa pitagórico">médias pitagóricas</a> do conjunto de números inteiros de <big>1</big> a <big>10</big> (inclusive). </p><p class="rosetta__paragraph"> Mostre que <big>$ A (x_1, \ ldots, x_n) \ geq G (x_1, \ ldots, x_n) \ geq H (x_1, \ ldots, x_n) $</big> para esse conjunto de inteiros positivos. </p> O mais comum dos três meios, a <a class="rosetta__link--rosetta" href="http://rosettacode.org/wiki/Averages/Arithmetic mean" title="Médias / média aritmética">média aritmética</a> , é a soma da lista dividida pelo seu comprimento: <big>$ A (x_1, \ ldots, x_n) = \ frac {x_1 + \ cdots + x_n} {n} $</big> O <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Geometric mean" title="wp: Média geométrica">geométrico mean</a> é a raiz $ n $ th do produto da lista: <big>$ G (x_1, \ ldots, x_n) = \ sqrt [n] {x_1 \ cdots x_n} $</big> A <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Harmonic mean" title="wp: média harmônica">média harmônica</a> é $ n $ dividida pela soma de o recíproco de cada item na lista: <big>$ H (x_1, \ ldots, x_n) = \ frac {n} {\ frac {1} {x_1} + \ cdots + \ frac {1} {x_n}} $</big> <p class="rosetta__paragraph"> Suponha que a entrada seja uma matriz ordenada de todos os números incluídos. </p><p class="rosetta__paragraph"> Para a resposta, por favor, imprima um objeto no seguinte formato: </p><pre class="rosetta__pre"> {
  values: {
    Aritmética: 5.5,
    Geométrico: 4.528728688116765,
    Harmônico: 3.414171521474055
  }
  teste: &#39;é A&gt; = G&gt; = H? sim&#39;
}
</pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pythagoreanMeans</code> é uma função.
    testString: 'assert(typeof pythagoreanMeans === "function", "<code>pythagoreanMeans</code> is a function.");'
  - text: '<code>pythagoreanMeans([1, 2, ..., 10])</code> deve ser igual ao mesmo resultado acima.'
    testString: 'assert.deepEqual(pythagoreanMeans(range1), answer1, "<code>pythagoreanMeans([1, 2, ..., 10])</code> should equal the same output above.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pythagoreanMeans (rangeArr) {
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
