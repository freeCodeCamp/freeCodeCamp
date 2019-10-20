---
title: Fibonacci n-step number sequences
id: 598eef80ba501f1268170e1e
challengeType: 5
videoUrl: ''
localeTitle: Secuencias numéricas de Fibonacci
---

## Description
<section id="description"><p> Escribe una función para generar secuencias numéricas de Fibonacci n-step y secuencias de Lucas. El primer parámetro será n. El segundo parámetro será el número de elementos a devolver. El tercer parámetro especificará si se debe generar la secuencia de Fibonacci o la secuencia de Lucas. Si el parámetro es &quot;f&quot;, devuelva la secuencia de Fibonacci y si es &quot;l&quot;, devuelva la secuencia de Lucas. Las secuencias deben devolverse como una matriz. Se dan más detalles a continuación : </p><p> Estas series de números son una expansión de la <a href="http://rosettacode.org/wiki/Fibonacci sequence" title="secuencia Fibonacci">secuencia de Fibonacci</a> ordinaria donde: </p> Por $ n = 2 $ tenemos la secuencia de Fibonacci; con valores iniciales $ [1, 1] $ y $ F_k ^ 2 = F_ {k-1} ^ 2 + F_ {k-2} ^ 2 $ Para $ n = 3 $ tenemos la secuencia de tribonacci; con valores iniciales $ [1, 1, 2] $ y $ F_k ^ 3 = F_ {k-1} ^ 3 + F_ {k-2} ^ 3 + F_ {k-3} ^ 3 $ Para $ n = 4 $ tenemos la secuencia tetranacci; con valores iniciales $ [1, 1, 2, 4] $ y $ F_k ^ 4 = F_ {k-1} ^ 4 + F_ {k-2} ^ 4 + F_ {k-3} ^ 4 + F_ {k -4} ^ 4 $ ... Para general $ n&gt; 2 $ tenemos la secuencia de pasos de Fibonacci $ n $ - $ F_k ^ n $; con valores iniciales de los primeros $ n $ valores de $ (n-1) $ &#39;th Fibonacci $ n $ -step secuencia $ F_k ^ {n-1} $; y el valor $ k $ &#39;th de esta secuencia $ n $&#39; th es $ F_k ^ n = \ sum_ {i = 1} ^ {(n)} {F_ {ki} ^ {(n)}} $ <p> Para valores pequeños de $ n $, <a href="https://en.wikipedia.org/wiki/Number prefix#Greek_series" title="wp: Número de prefijo # serie_griega">los prefijos numéricos griegos a</a> veces se usan para nombrar individualmente cada serie. </p><p> {| style = &quot;text-align: left;&quot; border = &quot;4&quot; cellpadding = &quot;2&quot; cellspacing = &quot;2&quot; </p><p> | + Fibonacci $ n $ -step secuencias </p><p> | - style = &quot;background-color: rgb (255, 204, 255);&quot; </p><p> ! $ n $ !! Nombre de serie !! Valores </p><p> | - </p><p> | 2 || fibonacci || 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ... </p><p> | - </p><p> | 3 || tribonacci || 1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ... </p><p> | - </p><p> | 4 || tetranacci || 1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ... </p><p> | - </p><p> | 5 || pentanacci || 1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ... </p><p> | - </p><p> | 6 || hexanacci || 1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ... </p><p> | - </p><p> | 7 || heptanacci || 1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ... </p><p> | - </p><p> | 8 || octonacci || 1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ... </p><p> | - </p><p> | 9 || nonanacci || 1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ... </p><p> | - </p><p> | 10 || decanacci || 1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ... </p><p> |} </p><p> Se pueden generar secuencias aliadas donde se cambian los valores iniciales: </p><p> La <a href="https://en.wikipedia.org/wiki/Lucas number" title="wp: número de Lucas">serie de Lucas</a> suma los dos valores anteriores como la serie de fibonacci por $ n = 2 $, pero usa $ [2, 1] $ como sus valores iniciales. </p><p><!-- Lucas numbers, Lucas number, Lucas series     [added to make searches easier.] --></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fib_luc</code> es una función.
    testString: 'assert(typeof fib_luc === "function", "<code>fib_luc</code> is a function.");'
  - text: '<code>fib_luc(2,10,&quot;f&quot;)</code> debe devolver <code>[1,1,2,3,5,8,13,21,34,55]</code> .'
    testString: 'assert.deepEqual(fib_luc(2,10,"f"),ans[0],"<code>fib_luc(2,10,"f")</code> should return <code>[1,1,2,3,5,8,13,21,34,55]</code>.");'
  - text: '<code>fib_luc(3,15,&quot;f&quot;)</code> debe devolver <code>[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]</code> .'
    testString: 'assert.deepEqual(fib_luc(3,15,"f"),ans[1],"<code>fib_luc(3,15,"f")</code> should return <code>[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]</code>.");'
  - text: '<code>fib_luc(4,15,&quot;f&quot;)</code> debe devolver <code>[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]</code> .'
    testString: 'assert.deepEqual(fib_luc(4,15,"f"),ans[2],"<code>fib_luc(4,15,"f")</code> should return <code>[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]</code>.");'
  - text: '<code>fib_luc(2,10,&quot;l&quot;)</code> debe devolver <code>[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]</code> .'
    testString: 'assert.deepEqual(fib_luc(2,10,"l"),ans[3],"<code>fib_luc(2,10,"l")</code> should return <code>[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]</code>.");'
  - text: '<code>fib_luc(3,15,&quot;l&quot;)</code> debe devolver <code>[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]</code> .'
    testString: 'assert.deepEqual(fib_luc(3,15,"l"),ans[4],"<code>fib_luc(3,15,"l")</code> should return <code>[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]</code>.");'
  - text: '<code>fib_luc(4,15,&quot;l&quot;)</code> debe devolver <code>[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]</code> .'
    testString: 'assert.deepEqual(fib_luc(4,15,"l"),ans[5],"<code>fib_luc(4,15,"l")</code> should return <code>[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]</code>.");'
  - text: '<code>fib_luc(5,15,&quot;l&quot;)</code> debe devolver <code>[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]</code> .'
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
