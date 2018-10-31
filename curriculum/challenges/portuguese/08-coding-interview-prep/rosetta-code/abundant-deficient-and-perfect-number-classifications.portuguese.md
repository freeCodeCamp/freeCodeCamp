---
title: 'Abundant, deficient and perfect number classifications'
id: 594810f028c0303b75339acd
challengeType: 5
videoUrl: ''
localeTitle: 'Classificações numéricas abundantes, deficientes e perfeitas'
---

## Description
<section id="description"><p> Estes definem três classificações de inteiros positivos baseados em seus <a href="http://rosettacode.org/wiki/Proper divisors" title="Divisores apropriados">divisores apropriados</a> . </p><p> Seja $ P (n) $ a soma dos divisores apropriados de n onde os divisores apropriados são todos inteiros positivos n diferentes de n em si. </p><p> Se <code>P(n) &lt; n</code> então n é classificado como &quot;deficiente&quot; </p><p> Se <code>P(n) === n</code> então n é classificado como &quot;perfeito&quot; </p><p> Se <code>P(n) &gt; n</code> então n é classificado como &quot;abundante&quot; </p><p> Exemplo: </p><p> 6 tem divisores apropriados de 1, 2 e 3. </p><p> 1 + 2 + 3 = 6, então 6 é classificado como um número perfeito. </p><p> Implemente uma função que calcule quantos dos inteiros de 1 a 20.000 (inclusive) estão em cada uma das três classes. Emita o resultado como um array no seguinte formato <code>[deficient, perfect, abundant]</code> . </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getDPA</code> é uma função.
    testString: 'assert(typeof getDPA === "function", "<code>getDPA</code> is a function.");'
  - text: <code>getDPA</code> deve retornar um array.
    testString: 'assert(Array.isArray(getDPA(100)), "<code>getDPA</code> should return an array.");'
  - text: <code>getDPA</code> valor de retorno de <code>getDPA</code> deve ter um comprimento de 3.
    testString: 'assert(getDPA(100).length === 3, "<code>getDPA</code> return value should have a length of 3.");'
  - text: '<code>getDPA(20000)</code> deve ser igual a [15043, 4, 4953]'
    testString: 'assert.deepEqual(getDPA(20000), solution, "<code>getDPA(20000)</code> should equal [15043, 4, 4953]");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getDPA (num) {
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
