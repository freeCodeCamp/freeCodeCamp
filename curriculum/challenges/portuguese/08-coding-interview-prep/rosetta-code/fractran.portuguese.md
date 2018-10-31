---
title: Fractran
id: 5a7dad05be01840e1778a0d1
challengeType: 3
videoUrl: ''
localeTitle: Fractran
---

## Description
<section id="description"><div class="rosetta"><p class="rosetta__paragraph"> <span class="rosetta__text--bold"><a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/FRACTRAN" title="wp: FRACTRAN">FRACTRAN</a></span> é uma linguagem de programação esotérica Turing-completa inventada pelo matemático <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/John Horton Conway" title="wp: John Horton Conway">John Horton Conway</a> . </p><br><p class="rosetta__paragraph"> Um programa FRACTRAN é uma lista ordenada de frações positivas $ P = (f_1, f_2, \ ldots, f_m) $, junto com uma entrada de número inteiro positiva inicial $ n $. </p><br><p class="rosetta__paragraph"> O programa é executado atualizando o inteiro $ n $ da seguinte forma: </p><br><ul class="rosetta__unordered-list"><li class="rosetta__list-item--unordered"> para a primeira fração, $ f_i $, na lista para a qual $ nf_i $ é um inteiro, substitua $ n $ por $ nf_i $; </li><li class="rosetta__list-item--unordered"> repita esta regra até que nenhuma fração na lista produza um inteiro quando multiplicada por $ n $, depois pare. </li></ul><br><p class="rosetta__paragraph"> Conway deu um programa para primos em FRACTRAN: </p><br><p class="rosetta__paragraph"> <span class="rosetta__text--indented">$ 17/91 $, $ 78/85 $, $ 19/51 $, $ 23/38 $, $ 29/33 $, $ 77/29 $, $ 95/23 $, $ 77/19 $, $ 1/17 $, $ 11/13 $, $ 13/11 $, $ 15/14 $, $ 15/2 $, $ 55/1 $</span> </p><br><p class="rosetta__paragraph"> Começando com $ n = 2 $, este programa FRACTRAN mudará $ n $ para $ 15 = 2 \ times (15/2) $, depois $ 825 = 15 \ times (55/1) $, gerando a seguinte seqüência de inteiros: </p><br><p class="rosetta__paragraph"> <span class="rosetta__text--indented">$ 2 $, $ 15 $, $ 825 $, $ 725 $, $ 1925 $, $ 2275 $, $ 425 $, $ 390 $, $ 330 $, $ 290 $, $ 770 $, $ \ ldots $</span> </p><br><p class="rosetta__paragraph"> Depois de 2, esta seqüência contém os seguintes poderes de 2: </p><br><p class="rosetta__paragraph"> <span class="rosetta__text--indented">$ 2 ^ 2 = 4 $, $ 2 ^ 3 = 8 $, $ 2 ^ 5 = 32 $, $ 2 ^ 7 = 128 $, $ 2 ^ {11} = 2048 $, $ 2 ^ {13} = 8192 $, $ 2 ^ {17 } = 131072 $, $ 2 ^ {19} = 524288 $, $ \ ldots $</span> </p><br><p class="rosetta__paragraph"> quais são os principais poderes de 2. </p><br><dl class="rosetta__description-list"><dt class="rosetta__description-title"> Tarefa: </dt></dl><p class="rosetta__paragraph"> Escreva uma função que use um programa de fractran como um parâmetro de string e retorne os 10 primeiros números do programa como um array. Se o resultado não tiver 10 números, retorne os números como estão. </p></div></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fractran</code> deve ser uma função.
    testString: 'assert(typeof fractran=="function","<code>fractran</code> should be a function.");'
  - text: '<code>fractran(&quot;&quot;+tests[0]+&quot;&quot;)</code> deve retornar um array.'
    testString: 'assert(Array.isArray(fractran(tests[0])),"<code>fractran(""+tests[0]+"")</code> should return an array.");'
  - text: '<code>fractran(&quot;&quot;+tests[0]+&quot;&quot;)</code> deve retornar <code>&quot;+JSON.stringify(results[0])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[0]),results[0],"<code>fractran(""+tests[0]+"")</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
  - text: '<code>fractran(&quot;&quot;+tests[1]+&quot;&quot;)</code> deve retornar <code>&quot;+JSON.stringify(results[1])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[1]),results[1],"<code>fractran(""+tests[1]+"")</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
  - text: '<code>fractran(&quot;&quot;+tests[2]+&quot;&quot;)</code> deve retornar <code>&quot;+JSON.stringify(results[2])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[2]),results[2],"<code>fractran(""+tests[2]+"")</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
  - text: '<code>fractran(&quot;&quot;+tests[3]+&quot;&quot;)</code> deve retornar <code>&quot;+JSON.stringify(results[3])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[3]),results[3],"<code>fractran(""+tests[3]+"")</code> should return <code>"+JSON.stringify(results[3])+"</code>.");'
  - text: '<code>fractran(&quot;&quot;+tests[4]+&quot;&quot;)</code> deve retornar <code>&quot;+JSON.stringify(results[4])+&quot;</code> .'
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
