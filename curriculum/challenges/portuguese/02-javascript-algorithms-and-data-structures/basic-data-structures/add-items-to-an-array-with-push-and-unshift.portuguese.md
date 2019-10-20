---
id: 587d78b2367417b2b2512b0e
title: Add Items to an Array with push() and unshift()
challengeType: 1
videoUrl: ''
localeTitle: Adicionar itens a uma matriz com push () e unshift ()
---

## Description
<section id="description"> O comprimento de um array, como os tipos de dados que ele pode conter, não é fixo. Os arrays podem ser definidos com um comprimento de qualquer número de elementos, e os elementos podem ser adicionados ou removidos ao longo do tempo; em outras palavras, matrizes são <dfn>mutáveis</dfn> . Neste desafio, veremos dois métodos com os quais podemos modificar programaticamente um array: <code>Array.push()</code> e <code>Array.unshift()</code> . Ambos os métodos usam um ou mais elementos como parâmetros e adicionam esses elementos à matriz na qual o método está sendo chamado; o método <code>push()</code> adiciona elementos ao final de um array, e <code>unshift()</code> adiciona elementos ao começo. Considere o seguinte: <blockquote> deixe vinte e três = &#39;XXIII&#39;; <br> let romanNumerals = [&#39;XXI&#39;, &#39;XXII&#39;]; <br><br> romanNumerals.unshift (&#39;XIX&#39;, &#39;XX&#39;); <br> // agora é igual a [&#39;XIX&#39;, &#39;XX&#39;, &#39;XXI&#39;, &#39;XXII&#39;] <br><br> romanNumerals.push (vinte e três); <br> // agora é igual a [&#39;XIX&#39;, &#39;XX&#39;, &#39;XXI&#39;, &#39;XXII&#39;, &#39;XXIII&#39;] Note que também podemos passar variáveis, o que nos permite uma flexibilidade ainda maior em modificar dinamicamente os dados da nossa matriz. </blockquote></section>

## Instructions
<section id="instructions"> Nós definimos uma função, <code>mixedNumbers</code> , que estamos passando um array como argumento. Modifique a função usando <code>push()</code> e <code>unshift()</code> para adicionar <code>&#39;I&#39;, 2, &#39;three&#39;</code> ao início da matriz e <code>7, &#39;VIII&#39;, 9</code> até o final, para que a matriz retornada contenha representações dos números 1-9 em ordem. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>mixedNumbers([&quot;IV&quot;, 5, &quot;six&quot;])</code> deve retornar agora <code>[&quot;I&quot;, 2, &quot;three&quot;, &quot;IV&quot;, 5, &quot;six&quot;, 7, &quot;VIII&quot;, 9]</code>'
    testString: 'assert.deepEqual(mixedNumbers(["IV", 5, "six"]), ["I", 2, "three", "IV", 5, "six", 7, "VIII", 9], "<code>mixedNumbers(["IV", 5, "six"])</code> should now return <code>["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]</code>");'
  - text: A função <code>mixedNumbers</code> deve utilizar o método <code>push()</code>
    testString: 'assert.notStrictEqual(mixedNumbers.toString().search(/\.push\(/), -1, "The <code>mixedNumbers</code> function should utilize the <code>push()</code> method");'
  - text: A função <code>mixedNumbers</code> deve utilizar o método <code>unshift()</code>
    testString: 'assert.notStrictEqual(mixedNumbers.toString().search(/\.unshift\(/), -1, "The <code>mixedNumbers</code> function should utilize the <code>unshift()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mixedNumbers(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
