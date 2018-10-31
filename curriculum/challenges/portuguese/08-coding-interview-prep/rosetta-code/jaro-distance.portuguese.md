---
title: Jaro distance
id: 5a23c84252665b21eecc7ec2
challengeType: 5
videoUrl: ''
localeTitle: Distância Jaro
---

## Description
<section id="description"> A distância Jaro é uma medida de similaridade entre duas seqüências. Quanto maior a distância Jaro para duas strings, mais similares são as strings. A pontuação é normalizada de tal forma que <b>0</b> equivale a nenhuma semelhança e <b>1</b> é uma correspondência exata. Definição A distância Jaro \ (d_j \) de duas strings dadas \ (s_1 \) e \ (s_2 \) é \ begin {align} d_j = \ begin {casos} 0 &amp; &amp; \ text {if} m = 0 \\\ \ {\ frac {1} {3}} \ left ({\ frac {m} {| s_ {1} |}} + {\ frac {m} {| s_ {2} |}} + {\ frac { mt} {m}} \ right) &amp; &amp; \ text {caso contrário} \ end {cases} \ end {align} Onde: <ul><li> \ (m \) é o número de <i>caracteres correspondentes</i> ; </li><li> \ (t \) é metade do número de <i>transposições</i> . </li></ul> Dois caracteres de \ (s_1 \) e \ (s_2 \), respectivamente, são considerados <i>correspondentes</i> somente se forem iguais e não mais que \ (\ left \ lfloor \ frac {\ max (| s_1 |, | s_2 |)} {2} \ right \ rfloor-1 \). Cada caractere de \ (s_1 \) é comparado com todos os caracteres correspondentes em \ (s_2 \). O número de caracteres correspondentes (mas de ordem de seqüência diferente) dividido por 2 define o número de <i>transposições</i> . <b>Exemplo</b> Dadas as strings \ (s_1 \) <i>DWAYNE</i> e \ (s_2 \) <i>DUANE</i> encontramos: <ul><li> \ (m = 4 \) </li><li> \ (| s_1 | = 6 \) </li><li> \ (| s_2 | = 5 \) </li><li> \ (t = 0 \) </li></ul> Encontramos uma pontuação Jaro de: \ (d_j = \ frac {1} {3} \ left (\ frac {4} {6} + \ frac {4} {5} + \ frac {4-0} {4} \ right) = 0,822 \). Escreva uma função a que use duas strings como parâmetros e retorne a distância Jaro associada. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>jaro</code> deveria ser uma função.
    testString: 'assert(typeof jaro=="function","<code>jaro</code> should be a function.");'
  - text: '<code>jaro(&quot;&quot;+tests[0][0]+&quot;&quot;,&quot;&quot;+tests[0][1]+&quot;&quot;)</code> deve retornar um número.'
    testString: 'assert(typeof jaro(tests[0][0],tests[0][1])=="number","<code>jaro()</code> should return a number.");'
  - text: '<code>jaro(&quot;&quot;+tests[0][0]+&quot;&quot;,&quot;&quot;+tests[0][1]+&quot;&quot;)</code> deve retornar <code>&quot;+results[0]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[0][0],tests[0][1]),results[0],"<code>jaro(""+tests[0][0]+"",""+tests[0][1]+"")</code> should return <code>"+results[0]+"</code>.");'
  - text: '<code>jaro(&quot;&quot;+tests[1][0]+&quot;&quot;,&quot;&quot;+tests[1][1]+&quot;&quot;)</code> deve retornar <code>&quot;+results[1]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[1][0],tests[1][1]),results[1],"<code>jaro(""+tests[1][0]+"",""+tests[1][1]+"")</code> should return <code>"+results[1]+"</code>.");'
  - text: '<code>jaro(&quot;&quot;+tests[2][0]+&quot;&quot;,&quot;&quot;+tests[2][1]+&quot;&quot;)</code> deve retornar <code>&quot;+results[2]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[2][0],tests[2][1]),results[2],"<code>jaro(""+tests[2][0]+"",""+tests[2][1]+"")</code> should return <code>"+results[2]+"</code>.");'
  - text: '<code>jaro(&quot;&quot;+tests[3][0]+&quot;&quot;,&quot;&quot;+tests[3][1]+&quot;&quot;)</code> devem retornar <code>&quot;+results[3]+&quot;</code> .'
    testString: 'assert.equal(jaro(tests[3][0],tests[3][1]),results[3],"<code>jaro(""+tests[3][0]+"",""+tests[3][1]+"")</code> should return <code>"+results[3]+"</code>.");'
  - text: '<code>jaro(&quot;&quot;+tests[4][0]+&quot;&quot;,&quot;&quot;+tests[4][1]+&quot;&quot;)</code> deve retornar <code>&quot;+results[4]+&quot;</code> .'
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
