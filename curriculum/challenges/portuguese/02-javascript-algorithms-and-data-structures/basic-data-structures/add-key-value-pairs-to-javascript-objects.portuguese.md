---
id: 587d7b7c367417b2b2512b18
title: Add Key-Value Pairs to JavaScript Objects
challengeType: 1
videoUrl: ''
localeTitle: Adicionar pares de valor-chave a objetos JavaScript
---

## Description
<section id="description"> Em sua forma mais básica, os objetos são apenas coleções de <dfn>pares de valores-chave</dfn> ou, em outras palavras, partes de dados mapeados para identificadores exclusivos que chamamos de <dfn>propriedades</dfn> ou <dfn>chaves</dfn> . Vamos dar uma olhada em um exemplo muito simples: <blockquote> deixar FCC_User = { <br> nome de usuário: &#39;awesome_coder&#39;, <br> seguidores: 572, <br> pontos: 1741, <br> concluídosProjetos: 15 <br> }; </blockquote> O código acima define um objeto chamado <code>FCC_User</code> que possui quatro <dfn>propriedades</dfn> , cada uma <code>FCC_User</code> para um valor específico. Se quisermos saber o número de <code>followers</code> <code>FCC_User</code> tem, podemos acessar essa propriedade escrevendo: <blockquote> deixe userData = FCC_User.followers; <br> // userData é igual a 572 </blockquote> Isso é chamado de <dfn>notação de ponto</dfn> . Alternativamente, também podemos acessar a propriedade com colchetes, da seguinte forma: <blockquote> deixe userData = FCC_User [&#39;followers&#39;] <br> // userData é igual a 572 </blockquote> Observe que, com a <dfn>notação de colchetes</dfn> , incluímos <code>followers</code> entre aspas. Isso ocorre porque os colchetes realmente nos permitem passar uma variável para ser avaliada como um nome de propriedade (dica: tenha isso em mente para mais tarde!). Se tivéssemos passado <code>followers</code> sem as aspas, o mecanismo JavaScript teria tentado avaliá-lo como uma variável, e um <code>ReferenceError: followers is not defined</code> teria sido lançado. </section>

## Instructions
<section id="instructions"> Usando a mesma sintaxe, também podemos <em><strong>adicionar novos</strong></em> pares de valores-chave a objetos. Criamos um objeto de <code>foods</code> com três entradas. Adicione mais três entradas: <code>bananas</code> com um valor de <code>13</code> , <code>grapes</code> com um valor de <code>35</code> e <code>strawberries</code> com um valor de <code>27</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foods</code> é um objeto
    testString: 'assert(typeof foods === "object", "<code>foods</code> is an object");'
  - text: O objeto <code>foods</code> tem uma chave <code>&quot;bananas&quot;</code> com um valor de <code>13</code>
    testString: 'assert(foods.bananas === 13, "The <code>foods</code> object has a key <code>"bananas"</code> with a value of <code>13</code>");'
  - text: O objeto <code>foods</code> tem uma chave <code>&quot;grapes&quot;</code> com um valor de <code>35</code>
    testString: 'assert(foods.grapes === 35, "The <code>foods</code> object has a key <code>"grapes"</code> with a value of <code>35</code>");'
  - text: O objeto de <code>foods</code> tem uma chave <code>&quot;strawberries&quot;</code> com um valor de <code>27</code>
    testString: 'assert(foods.strawberries === 27, "The <code>foods</code> object has a key <code>"strawberries"</code> with a value of <code>27</code>");'
  - text: Os pares de valor-chave devem ser definidos usando a notação de pontos ou colchetes
    testString: 'assert(code.search(/bananas:/) === -1 && code.search(/grapes:/) === -1 && code.search(/strawberries:/) === -1, "The key-value pairs should be set using dot or bracket notation");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line

// change code above this line

console.log(foods);

```

</div>



</section>

## Solution
<section id='solution'>

```js
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
```
</section>
