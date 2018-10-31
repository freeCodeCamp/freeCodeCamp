---
id: 5a661e0f1068aca922b3ef17
title: Access an Array's Contents Using Bracket Notation
challengeType: 1
videoUrl: ''
localeTitle: Acessar o conteúdo de uma matriz usando a notação de suporte
---

## Description
<section id="description"> O recurso fundamental de qualquer estrutura de dados é, obviamente, a capacidade de não apenas armazenar dados, mas de recuperar esses dados no comando. Então, agora que aprendemos a criar uma matriz, vamos começar a pensar em como podemos acessar as informações dessa matriz. Quando definimos um array simples como mostrado abaixo, existem 3 itens: <blockquote> vamos ourArray = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]; </blockquote> Em uma matriz, cada item da matriz possui um <dfn>índice</dfn> . Esse índice dobra como a posição desse item na matriz e como você faz referência a ele. No entanto, é importante notar, que as matrizes JavaScript são <dfn>zero-indexada,</dfn> o que significa que o primeiro elemento de uma matriz é, na verdade, na posição de <em><strong>ordem zero,</strong></em> não o primeiro. Para recuperar um elemento de uma matriz, podemos colocar um índice entre colchetes e anexá-lo ao final de uma matriz, ou mais comumente, a uma variável que faz referência a um objeto de matriz. Isso é conhecido como <dfn>notação de colchetes</dfn> . Por exemplo, se quisermos recuperar o <code>&quot;a&quot;</code> de <code>ourArray</code> e atribuí-lo a uma variável, podemos fazê-lo com o seguinte código: <blockquote> vamos ourVariable = ourArray [0]; <br> // ourVariable é igual a &quot;a&quot; </blockquote> Além de acessar o valor associado a um índice, você também pode <em>definir</em> um índice para um valor usando a mesma notação: <blockquote> ourArray [1] = &quot;não mais b&quot;; <br> // ourArray agora é igual a [&quot;a&quot;, &quot;not b anymore&quot;, &quot;c&quot;]; </blockquote> Usando a notação de colchetes, agora redefinimos o item no índice 1 de <code>&quot;b&quot;</code> para <code>&quot;not b anymore&quot;</code> . </section>

## Instructions
<section id="instructions"> Para completar este desafio, defina a 2ª posição (índice <code>1</code> ) de <code>myArray</code> para o que você quiser, além de <code>&quot;b&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray[0]</code> é igual a <code>&quot;a&quot;</code>'
    testString: 'assert.strictEqual(myArray[0], "a", "<code>myArray[0]</code> is equal to <code>"a"</code>");'
  - text: '<code>myArray[1]</code> não está mais definido como <code>&quot;b&quot;</code>'
    testString: 'assert.notStrictEqual(myArray[1], "b", "<code>myArray[1]</code> is no longer set to <code>"b"</code>");'
  - text: '<code>myArray[2]</code> é igual a <code>&quot;c&quot;</code>'
    testString: 'assert.strictEqual(myArray[2], "c", "<code>myArray[2]</code> is equal to <code>"c"</code>");'
  - text: '<code>myArray[3]</code> é igual a <code>&quot;d&quot;</code>'
    testString: 'assert.strictEqual(myArray[3], "d", "<code>myArray[3]</code> is equal to <code>"d"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = ["a", "b", "c", "d"];
// change code below this line

//change code above this line
console.log(myArray);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
