---
title: Farey sequence
id: 59c3ec9f15068017c96eb8a3
challengeType: 5
videoUrl: ''
localeTitle: Seqüência Farey
---

## Description
<section id="description"><p> Escreva uma função que retorne a seqüência Farey de ordem n. A função deve ter um parâmetro que seja n. Deve retornar a seqüência como um array. Leia o seguinte para mais detalhes: </p><p> A <a href="https://en.wikipedia.org/wiki/Farey sequence" title="wp: seqüência de Farey">sequência Farey</a> F <sub>n</sub> de ordem n é a sequência de frações completamente reduzidas entre 0 e 1 que, quando em termos mais baixos, têm denominadores menores ou iguais a n, organizadas em ordem crescente de tamanho. </p><p> A seqüência Farey às vezes é incorretamente chamada de série Farey. </p><p> Cada seqüência de Farey: </p><p> :: * começa com o valor 0, denotado pela fração $ \ frac {0} {1} $ </p><p> :: * termina com o valor 1, denotado pela fração $ \ frac {1} {1} $. </p><p> As sequências Farey das ordens 1 a 5 são: </p><p> $ {\ bf \ it {F}} _ 1 = \ frac {0} {1}, \ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 2 = \ frac {0} {1}, \ frac {1} {2}, \ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 3 = \ frac {0} {1}, \ frac {1} {3}, \ frac {1} {2}, \ frac {2} {3}, \ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 4 = \ frac {0} {1}, \ frac {1} {4}, \ frac {1} {3}, \ frac {1} {2}, \ frac {2} {3}, \ frac {3} {4}, \ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 5 = \ frac {0} {1}, \ frac {1} {5}, \ frac {1} {4}, \ frac {1} {3}, \ frac {2} {5}, \ frac {1} {2}, \ frac {3} {5}, \ frac {2} {3}, \ frac {3} {4}, \ frac {4} {5 }, \ frac {1} {1} $ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>farey</code> é uma função.
    testString: 'assert(typeof farey === "function", "<code>farey</code> is a function.");'
  - text: <code>farey(3)</code> deve retornar um array
    testString: 'assert(Array.isArray(farey(3)), "<code>farey(3)</code> should return an array");'
  - text: '<code>farey(3)</code> deve retornar <code>[&quot;1/3&quot;,&quot;1/2&quot;,&quot;2/3&quot;]</code>'
    testString: 'assert.deepEqual(farey(3), ["1/3","1/2","2/3"], "<code>farey(3)</code> should return <code>["1/3","1/2","2/3"]</code>");'
  - text: '<code>farey(4)</code> deve retornar <code>[&quot;1/4&quot;,&quot;1/3&quot;,&quot;1/2&quot;,&quot;2/4&quot;,&quot;2/3&quot;,&quot;3/4&quot;]</code>'
    testString: 'assert.deepEqual(farey(4), ["1/4","1/3","1/2","2/4","2/3","3/4"], "<code>farey(4)</code> should return <code>["1/4","1/3","1/2","2/4","2/3","3/4"]</code>");'
  - text: '<code>farey(5)</code> deve devolver <code>[&quot;1/5&quot;,&quot;1/4&quot;,&quot;1/3&quot;,&quot;2/5&quot;,&quot;1/2&quot;,&quot;2/4&quot;,&quot;3/5&quot;,&quot;2/3&quot;,&quot;3/4&quot;,&quot;4/5&quot;]</code>'
    testString: 'assert.deepEqual(farey(5), ["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"], "<code>farey(5)</code> should return <code>["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function farey (n) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
