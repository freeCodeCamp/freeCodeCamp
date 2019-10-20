---
title: Fractran
id: 5a7dad05be01840e1778a0d1
challengeType: 3
videoUrl: ''
localeTitle: Fractran
---

## Description
<section id="description"><div class="rosetta"><p class="rosetta__paragraph"> <span class="rosetta__text--bold"><a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/FRACTRAN" title="wp: FRACTRAN">FRACTRAN</a></span> es un lenguaje de programación esotérico completo de Turing inventado por el matemático <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/John Horton Conway" title="wp: John Horton Conway">John Horton Conway</a> . </p><br><p class="rosetta__paragraph"> Un programa FRACTRAN es una lista ordenada de fracciones positivas $ P = (f_1, f_2, \ ldots, f_m) $, junto con una entrada de entero positiva inicial $ n $. </p><br><p class="rosetta__paragraph"> El programa se ejecuta actualizando el entero $ n $ de la siguiente manera: </p><br><ul class="rosetta__unordered-list"><li class="rosetta__list-item--unordered"> para la primera fracción, $ f_i $, en la lista para la cual $ nf_i $ es un número entero, reemplace $ n $ con $ nf_i $; </li><li class="rosetta__list-item--unordered"> repita esta regla hasta que ninguna fracción de la lista produzca un número entero cuando se multiplique por $ n $, luego detenga. </li></ul><br><p class="rosetta__paragraph"> Conway dio un programa para primos en FRACTRAN: </p><br><p class="rosetta__paragraph"> <span class="rosetta__text--indented">$ 17/91 $, $ 78/85 $, $ 19/51 $, $ 23/38 $, $ 29/33 $, $ 77/29 $, $ 95/23 $, $ 77/19 $, $ 1/17 $, $ 11/13 $, $ 13/11 $, $ 15/14 $, $ 15/2 $, $ 55/1 $</span> </p><br><p class="rosetta__paragraph"> Comenzando con $ n = 2 $, este programa de FRACTRAN cambiará de $ n $ a $ 15 = 2 \ times (15/2) $, luego $ 825 = 15 \ times (55/1) $, generando la siguiente secuencia de enteros: </p><br><p class="rosetta__paragraph"> <span class="rosetta__text--indented">$ 2 $, $ 15 $, $ 825 $, $ 725 $, $ 1925 $, $ 2275 $, $ 425 $, $ 390 $, $ 330 $, $ 290 $, $ 770 $, $ \ ldots $</span> </p><br><p class="rosetta__paragraph"> Después de 2, esta secuencia contiene las siguientes potencias de 2: </p><br><p class="rosetta__paragraph"> <span class="rosetta__text--indented">$ 2 ^ 2 = 4 $, $ 2 ^ 3 = 8 $, $ 2 ^ 5 = 32 $, $ 2 ^ 7 = 128 $, $ 2 ^ {11} = 2048 $, $ 2 ^ {13} = 8192 $, $ 2 ^ {17 } = 131072 $, $ 2 ^ {19} = 524288 $, $ \ ldots $</span> </p><br><p class="rosetta__paragraph"> cuales son las primeras potencias de 2. </p><br><dl class="rosetta__description-list"><dt class="rosetta__description-title"> Tarea: </dt></dl><p class="rosetta__paragraph"> Escriba una función que tome un programa de fractran como un parámetro de cadena y devuelva los primeros 10 números del programa como una matriz. Si el resultado no tiene 10 números, devuelva los números como están. </p></div></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fractran</code> debe ser una función.
    testString: 'assert(typeof fractran=="function","<code>fractran</code> should be a function.");'
  - text: '<code>fractran(&quot;&quot;+tests[0]+&quot;&quot;)</code> debe devolver una matriz.'
    testString: 'assert(Array.isArray(fractran(tests[0])),"<code>fractran(""+tests[0]+"")</code> should return an array.");'
  - text: '<code>fractran(&quot;&quot;+tests[0]+&quot;&quot;)</code> debe devolver <code>&quot;+JSON.stringify(results[0])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[0]),results[0],"<code>fractran(""+tests[0]+"")</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
  - text: '<code>fractran(&quot;&quot;+tests[1]+&quot;&quot;)</code> debe devolver <code>&quot;+JSON.stringify(results[1])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[1]),results[1],"<code>fractran(""+tests[1]+"")</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
  - text: '<code>fractran(&quot;&quot;+tests[2]+&quot;&quot;)</code> debe devolver <code>&quot;+JSON.stringify(results[2])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[2]),results[2],"<code>fractran(""+tests[2]+"")</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
  - text: '<code>fractran(&quot;&quot;+tests[3]+&quot;&quot;)</code> debe devolver <code>&quot;+JSON.stringify(results[3])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[3]),results[3],"<code>fractran(""+tests[3]+"")</code> should return <code>"+JSON.stringify(results[3])+"</code>.");'
  - text: '<code>fractran(&quot;&quot;+tests[4]+&quot;&quot;)</code> debe devolver <code>&quot;+JSON.stringify(results[4])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[4]),results[4],"<code>fractran(""+tests[4]+"")</code> should return <code>"+JSON.stringify(results[4])+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fractran (progStr) {
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
