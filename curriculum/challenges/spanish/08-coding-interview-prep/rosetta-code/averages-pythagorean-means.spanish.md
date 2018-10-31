---
title: Averages-Pythagorean means
id: 594d966a1467eb84194f0086
challengeType: 5
videoUrl: ''
localeTitle: Promedios-medios pitagóricos
---

## Description
<section id="description"><p class="rosetta__paragraph"> Calcule los tres <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Pythagorean means" title="wp: medios pitagóricos">medios pitagóricos</a> del conjunto de enteros del <big>1</big> al <big>10</big> (inclusive). </p><p class="rosetta__paragraph"> Muestre que <big>$ A (x_1, \ ldots, x_n) \ geq G (x_1, \ ldots, x_n) \ geq H (x_1, \ ldots, x_n) $</big> para este conjunto de enteros positivos. </p> El más común de los tres medios, la <a class="rosetta__link--rosetta" href="http://rosettacode.org/wiki/Averages/Arithmetic mean" title="Medias / media aritmética">media aritmética</a> , es la suma de la lista dividida por su longitud: <big>$ A (x_1, \ ldots, x_n) = \ frac {x_1 + \ cdots + x_n} {n} $</big> La <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Geometric mean" title="wp: media geométrica">geometría media</a> es la raíz $ n $ th del producto de la lista: <big>$ G (x_1, \ ldots, x_n) = \ sqrt [n] {x_1 \ cdots x_n} $</big> La <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Harmonic mean" title="wp: media armónica">media armónica</a> es $ n $ dividida por la suma de el recíproco de cada elemento en la lista: <big>$ H (x_1, \ ldots, x_n) = \ frac {n} {\ frac {1} {x_1} + \ cdots + \ frac {1} {x_n}} $</big> <p class="rosetta__paragraph"> Suponga que la entrada es una matriz ordenada de todos los números inclusivos. </p><p class="rosetta__paragraph"> Para la respuesta, envíe un objeto en el siguiente formato: </p><pre class="rosetta__pre"> {
  valores: {
    Aritmética: 5.5,
    Geométrico: 4.528728688116765,
    Armónica: 3.414171521474055
  }
  prueba: &#39;es A&gt; = G&gt; = H? sí&#39;
}
</pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pythagoreanMeans</code> es una función.
    testString: 'assert(typeof pythagoreanMeans === "function", "<code>pythagoreanMeans</code> is a function.");'
  - text: '<code>pythagoreanMeans([1, 2, ..., 10])</code> debe ser igual a la salida anterior.'
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
