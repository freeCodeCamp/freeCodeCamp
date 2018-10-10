---
title: Fibonacci n-step number sequences
id: 598eef80ba501f1268170e1e
challengeType: 5
videoUrl: ''
localeTitle: Sequências de números n-step de Fibonacci
---

## Description
<section id="description"><p> Escreva uma função para gerar seqüências de números n-step de Fibonacci e sequências de Lucas. O primeiro parâmetro será n. O segundo parâmetro será o número de elementos a serem retornados. O terceiro parâmetro irá especificar se a sequência de Fibonacci ou a sequência de Lucas serão emitidas. Se o parâmetro for &quot;f&quot;, retorne a seqüência de Fibonacci e, se for &quot;l&quot;, retorne a sequência de Lucas. As seqüências devem ser retornadas como uma matriz. Mais detalhes são fornecidos abaixo: </p><p> Estas séries numéricas são uma expansão da <a href="http://rosettacode.org/wiki/Fibonacci sequence" title="Seqüência de Fibonacci">sequência de Fibonacci</a> comum <a href="http://rosettacode.org/wiki/Fibonacci sequence" title="Seqüência de Fibonacci">,</a> onde: </p> Para $ n = 2 $ temos a sequência de Fibonacci; com valores iniciais $ [1, 1] $ e $ F_k ^ 2 = F_ {k-1} ^ 2 + F_ {k-2} ^ 2 $ Para $ n = 3 $ temos a sequência de tribonacci; com valores iniciais $ [1, 1, 2] $ e $ F_k ^ 3 = F_ {k-1} ^ 3 + F_ {k-2} ^ 3 + F_ {k-3} ^ 3 $ Para $ n = 4 $ temos a sequência tetranacci; com valores iniciais $ [1, 1, 2, 4] $ e $ F_k ^ 4 = F_ {k-1} ^ 4 + F_ {k-2} ^ 4 + F_ {k-3} ^ 4 + F_ {k -4} ^ 4 $ ... Para o geral $ n&gt; 2 $, temos a sequência Fibonacci $ n $ -step - $ F_k ^ n $; com valores iniciais dos primeiros valores de $ n $ da $ (n-1) $ &#39;th Fibonacci $ n $ -step-sequência $ F_k ^ {n-1} $; e o valor de $ k $ th desta seqüência $ n $ &#39;sendo $ F_k ^ n = \ sum_ {i = 1} ^ {(n)} {F_ {ki} ^ {(n)}} $ <p> Para valores pequenos de $ n $, <a href="https://en.wikipedia.org/wiki/Number prefix#Greek_series" title="wp: prefixo do número # Greek_series">os prefixos numéricos gregos</a> às vezes são usados ​​para nomear individualmente cada série. </p><p> {| style = &quot;text-align: left;&quot; border = &quot;4&quot; cellpadding = &quot;2&quot; cellspacing = &quot;2&quot; </p><p> | + Sequências de Fibonacci $ n $ -step </p><p> | - style = &quot;background-color: rgb (255, 204, 255);&quot; </p><p> ! $ n $ !! Nome da série !! Valores </p><p> | - </p><p> | 2 || fibonacci || 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ... </p><p> | - </p><p> | 3 || tribonacci || 1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ... </p><p> | - </p><p> | 4 || tetranacci || 1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ... </p><p> | - </p><p> | 5 || pentanacci || 1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ... </p><p> | - </p><p> | 6 || hexanacci || 1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ... </p><p> | - </p><p> | 7 || heptanacci || 1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ... </p><p> | - </p><p> | 8 || octonacci || 1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ... </p><p> | - </p><p> | 9 || nonanacci || 1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ... </p><p> | - </p><p> | 10 || decanacci || 1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ... </p><p> |} </p><p> Seqüências aliadas podem ser geradas onde os valores iniciais são alterados: </p><p> A <a href="https://en.wikipedia.org/wiki/Lucas number" title="wp: número de Lucas">série Lucas</a> soma os dois valores anteriores, como a série de fibonacci por $ n = 2 $, mas usa $ [2, 1] $ como seus valores iniciais. </p><p><!-- Lucas numbers, Lucas number, Lucas series     [added to make searches easier.] --></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fib_luc</code> é uma função.
    testString: 'assert(typeof fib_luc === "function", "<code>fib_luc</code> is a function.");'
  - text: '<code>fib_luc(2,10,&quot;f&quot;)</code> deve retornar <code>[1,1,2,3,5,8,13,21,34,55]</code> .'
    testString: 'assert.deepEqual(fib_luc(2,10,"f"),ans[0],"<code>fib_luc(2,10,"f")</code> should return <code>[1,1,2,3,5,8,13,21,34,55]</code>.");'
  - text: '<code>fib_luc(3,15,&quot;f&quot;)</code> deve retornar <code>[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]</code> .'
    testString: 'assert.deepEqual(fib_luc(3,15,"f"),ans[1],"<code>fib_luc(3,15,"f")</code> should return <code>[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]</code>.");'
  - text: '<code>fib_luc(4,15,&quot;f&quot;)</code> deve retornar <code>[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]</code> .'
    testString: 'assert.deepEqual(fib_luc(4,15,"f"),ans[2],"<code>fib_luc(4,15,"f")</code> should return <code>[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]</code>.");'
  - text: '<code>fib_luc(2,10,&quot;l&quot;)</code> deve retornar <code>[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]</code> .'
    testString: 'assert.deepEqual(fib_luc(2,10,"l"),ans[3],"<code>fib_luc(2,10,"l")</code> should return <code>[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]</code>.");'
  - text: '<code>fib_luc(3,15,&quot;l&quot;)</code> deve retornar <code>[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]</code> .'
    testString: 'assert.deepEqual(fib_luc(3,15,"l"),ans[4],"<code>fib_luc(3,15,"l")</code> should return <code>[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]</code>.");'
  - text: '<code>fib_luc(4,15,&quot;l&quot;)</code> deve retornar <code>[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]</code> .'
    testString: 'assert.deepEqual(fib_luc(4,15,"l"),ans[5],"<code>fib_luc(4,15,"l")</code> should return <code>[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]</code>.");'
  - text: '<code>fib_luc(5,15,&quot;l&quot;)</code> deve retornar <code>[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]</code> .'
    testString: 'assert.deepEqual(fib_luc(5,15,"l"),ans[6],"<code>fib_luc(5,15,"l")</code> should return <code>[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fib_luc (n, len, w) {
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
