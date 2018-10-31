---
id: 587d7b7a367417b2b2512b12
title: Copy Array Items Using slice()
challengeType: 1
videoUrl: ''
localeTitle: Copiar itens de matriz usando slice ()
---

## Description
<section id="description"> O próximo método que abordaremos é <code>slice()</code> . <code>slice()</code> , em vez de modificar uma matriz, copia ou <em>extrai</em> um determinado número de elementos para uma nova matriz, deixando a matriz em que é chamada intocada. <code>slice()</code> usa apenas dois parâmetros - o primeiro é o índice no qual iniciar a extração e o segundo é o índice no qual interromper a extração (a extração ocorrerá até, mas não incluindo o elemento nesse índice). Considere isto: <blockquote> let weatherConditions = [&#39;chuva&#39;, &#39;neve&#39;, &#39;granizo&#39;, &#39;granizo&#39;, &#39;claro&#39;]; <br><br> deixe todaysWeather = weatherConditions.slice (1, 3); <br> // todaysWeather é igual a [&#39;snow&#39;, &#39;sleet&#39;]; <br> // weatherConditions ainda é igual a [&#39;rain&#39;, &#39;snow&#39;, &#39;sleet&#39;, &#39;hail&#39;, &#39;clear&#39;] <br></blockquote> Na verdade, criamos uma nova matriz extraindo elementos de uma matriz existente. </section>

## Instructions
<section id="instructions"> Definimos uma função, <code>forecast</code> , que usa um array como argumento. Modifique a função usando <code>slice()</code> para extrair informações da matriz de argumentos e retornar uma nova matriz que contenha os elementos <code>&#39;warm&#39;</code> e <code>&#39;sunny&#39;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>forecast</code> deve retornar <code>[&quot;warm&quot;, &quot;sunny&quot;]</code>'
    testString: 'assert.deepEqual(forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]), ["warm", "sunny"], "<code>forecast</code> should return <code>["warm", "sunny"]");'
  - text: A função de <code>forecast</code> deve utilizar o método <code>slice()</code>
    testString: 'assert(/\.slice\(/.test(code), "The <code>forecast</code> function should utilize the <code>slice()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function forecast(arr) {
  // change code below this line

  return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
