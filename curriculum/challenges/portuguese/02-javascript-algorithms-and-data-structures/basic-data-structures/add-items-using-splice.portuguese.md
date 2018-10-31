---
id: 587d78b3367417b2b2512b11
title: Add Items Using splice()
challengeType: 1
videoUrl: ''
localeTitle: Adicionar itens usando splice ()
---

## Description
<section id="description"> Lembre-se no último desafio que mencionamos que <code>splice()</code> pode levar até três parâmetros? Bem, podemos ir um passo além com <code>splice()</code> - além de remover elementos, podemos usar esse terceiro parâmetro, que representa um ou mais elementos, para <em>adicioná-</em> los também. Isso pode ser incrivelmente útil para trocar rapidamente um elemento ou um conjunto de elementos por outro. Por exemplo, digamos que você esteja armazenando um esquema de cores para um conjunto de elementos DOM em uma matriz e queira alterar dinamicamente uma cor com base em alguma ação: <blockquote> function colorChange (arr, index, newColor) { <br> arr.splice (index, 1, newColor); <br> return arr; <br> } <br><br> deixe colorScheme = [&#39;# 878787&#39;, &#39;# a08794&#39;, &#39;# bb7e8c&#39;, &#39;# c9b6be&#39;, &#39;# d1becf&#39;]; <br><br> colorScheme = colorChange (colorScheme, 2, &#39;# 332327&#39;); <br> // removemos &#39;# bb7e8c&#39; e adicionamos &#39;# 332327&#39; em seu lugar <br> // colorScheme agora é igual a [&#39;# 878787&#39;, &#39;# a08794&#39;, &#39;# 332327&#39;, &#39;# c9b6be&#39;, &#39;# d1becf&#39;] </blockquote> Essa função usa uma matriz de valores hexadecimais, um índice no qual remover um elemento e a nova cor para substituir o elemento removido. O valor de retorno é uma matriz contendo um esquema de cores recém-modificado! Embora este exemplo seja um pouco simplificado, podemos ver o valor que a <code>splice()</code> pode ter no seu potencial máximo. </section>

## Instructions
<section id="instructions"> Nós definimos uma função, <code>htmlColorNames</code> , que usa uma matriz de cores HTML como argumento. Modifique a função usando <code>splice()</code> para remover os dois primeiros elementos da matriz e adicione <code>&#39;DarkSalmon&#39;</code> e <code>&#39;BlanchedAlmond&#39;</code> em seus respectivos locais. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>htmlColorNames</code> deve retornar <code>[&quot;DarkSalmon&quot;, &quot;BlanchedAlmond&quot;, &quot;LavenderBlush&quot;, &quot;PaleTurqoise&quot;, &quot;FireBrick&quot;]</code>'
    testString: 'assert.deepEqual(htmlColorNames(["DarkGoldenRod", "WhiteSmoke", "LavenderBlush", "PaleTurqoise", "FireBrick"]), ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"], "<code>htmlColorNames</code> should return <code>["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]</code>");'
  - text: A função <code>htmlColorNames</code> deve utilizar o método <code>splice()</code>
    testString: 'assert(/.splice/.test(code), "The <code>htmlColorNames</code> function should utilize the <code>splice()</code> method");'
  - text: Você não deve usar <code>shift()</code> ou <code>unshift()</code> .
    testString: 'assert(!/shift|unshift/.test(code), "You should not use <code>shift()</code> or <code>unshift()</code>.");'
  - text: Você não deve usar a notação de colchetes de matriz.
    testString: 'assert(!/\[\d\]\s*=/.test(code), "You should not use array bracket notation.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function htmlColorNames(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
