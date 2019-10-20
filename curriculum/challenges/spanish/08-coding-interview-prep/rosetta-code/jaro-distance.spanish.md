---
title: Jaro distance
id: 5a23c84252665b21eecc7ec2
challengeType: 5
videoUrl: ''
localeTitle: Distancia de jaro
---

## Description
<section id="description"> La distancia de Jaro es una medida de similitud entre dos cadenas. Cuanto mayor es la distancia de Jaro para dos cuerdas, más similares son las cuerdas. La puntuación se normaliza de modo que <b>0</b> equivale a ninguna similitud y <b>1</b> es una coincidencia exacta. Definición La distancia Jaro \ (d_j \) de dos cadenas dadas \ (s_1 \) y \ (s_2 \) es \ begin {align} d_j = \ begin {cases} 0 &amp; &amp; \ text {if} m = 0 \\\ \ {\ frac {1} {3}} \ left ({\ frac {m} {| s_ {1} |}} + {\ frac {m} {| s_ {2} |}} + {\ frac { mt} {m}} \ right) &amp; &amp; \ text {de lo contrario} \ end {cases} \ end {align} Donde: <ul><li> \ (m \) es el número de <i>caracteres coincidentes</i> ; </li><li> \ (t \) es la mitad del número de <i>transposiciones</i> . </li></ul> Dos caracteres de \ (s_1 \) y \ (s_2 \) respectivamente, se consideran <i>coincidentes</i> solo si son iguales y no están más lejos de \ (\ left \ lfloor \ frac {\ max (| s_1 |, | s_2 |)} {2} \ right \ rfloor-1 \). Cada carácter de \ (s_1 \) se compara con todos sus caracteres coincidentes en \ (s_2 \). El número de caracteres coincidentes (pero orden de secuencia diferente) dividido por 2 define el número de <i>transposiciones</i> . <b>Ejemplo</b> Dadas las cadenas \ (s_1 \) <i>DWAYNE</i> y \ (s_2 \) <i>DUANE</i> encontramos: <ul><li> \ (m = 4 \) </li><li> \ (| s_1 | = 6 \) </li><li> \ (| s_2 | = 5 \) </li><li> \ (t = 0 \) </li></ul> Encontramos una puntuación en Jaro de: \ (d_j = \ frac {1} {3} \ left (\ frac {4} {6} + \ frac {4} {5} + \ frac {4-0} {4} \ right) = 0.822 \). Escriba una función a que tome dos cadenas como parámetros y devuelva la distancia Jaro asociada. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>jaro</code> debería ser una función.
    testString: 'assert(typeof jaro=="function","<code>jaro</code> should be a function.");'
  - text: '<code>jaro(&quot;&quot;+tests[0][0]+&quot;&quot;,&quot;&quot;+tests[0][1]+&quot;&quot;)</code> debe devolver un número.'
    testString: 'assert(typeof jaro(tests[0][0],tests[0][1])=="number","<code>jaro()</code> should return a number.");'
  - text: '<code>jaro(&quot;&quot;+tests[0][0]+&quot;&quot;,&quot;&quot;+tests[0][1]+&quot;&quot;)</code> debe devolver <code>&quot;+results[0]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[0][0],tests[0][1]),results[0],"<code>jaro(""+tests[0][0]+"",""+tests[0][1]+"")</code> should return <code>"+results[0]+"</code>.");'
  - text: '<code>jaro(&quot;&quot;+tests[1][0]+&quot;&quot;,&quot;&quot;+tests[1][1]+&quot;&quot;)</code> debe devolver <code>&quot;+results[1]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[1][0],tests[1][1]),results[1],"<code>jaro(""+tests[1][0]+"",""+tests[1][1]+"")</code> should return <code>"+results[1]+"</code>.");'
  - text: '<code>jaro(&quot;&quot;+tests[2][0]+&quot;&quot;,&quot;&quot;+tests[2][1]+&quot;&quot;)</code> debe devolver <code>&quot;+results[2]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[2][0],tests[2][1]),results[2],"<code>jaro(""+tests[2][0]+"",""+tests[2][1]+"")</code> should return <code>"+results[2]+"</code>.");'
  - text: '<code>jaro(&quot;&quot;+tests[3][0]+&quot;&quot;,&quot;&quot;+tests[3][1]+&quot;&quot;)</code> debe devolver <code>&quot;+results[3]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[3][0],tests[3][1]),results[3],"<code>jaro(""+tests[3][0]+"",""+tests[3][1]+"")</code> should return <code>"+results[3]+"</code>.");'
  - text: '<code>jaro(&quot;&quot;+tests[4][0]+&quot;&quot;,&quot;&quot;+tests[4][1]+&quot;&quot;)</code> debe devolver <code>&quot;+results[4]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[4][0],tests[4][1]),results[4],"<code>jaro(""+tests[4][0]+"",""+tests[4][1]+"")</code> should return <code>"+results[4]+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function jaro (s, t) {
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
