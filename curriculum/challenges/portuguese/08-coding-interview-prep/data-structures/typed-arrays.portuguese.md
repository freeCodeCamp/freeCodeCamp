---
id: 587d8253367417b2b2512c6a
title: Typed Arrays
challengeType: 1
videoUrl: ''
localeTitle: Matrizes digitadas
---

## Description
<section id="description"> Arrays são objetos JavaScript que podem conter muitos elementos diferentes. <code>var complexArr = [1, 5, &quot;2&quot;, &quot;Word&quot;, {&quot;name&quot;: &quot;James&quot;}];</code> Basicamente, o que acontece em segundo plano é que o seu navegador irá fornecer automaticamente a quantidade certa de espaço de memória para esse array. Ele também será alterado conforme necessário, se você adicionar ou remover dados. No entanto, no mundo de alto desempenho e diferentes tipos de elementos, às vezes você precisa ser mais específico sobre a quantidade de memória que é dada a um array. <dfn>Matrizes digitadas</dfn> são a resposta para esse problema. Agora você pode dizer quanta memória deseja dar a um array. Abaixo está uma visão geral básica dos diferentes tipos de matrizes disponíveis e o tamanho em bytes para cada elemento nessa matriz. <table class="table table-striped"><tbody><tr><th> Tipo </th><th> Cada tamanho de elemento em bytes </th></tr><tr><td> <code>Int8Array</code> </td> <td> 1 </td></tr><tr><td> <code>Uint8Array</code> </td> <td> 1 </td></tr><tr><td> <code>Uint8ClampedArray</code> </td> <td> 1 </td></tr><tr><td> <code>Int16Array</code> </td> <td> 2 </td></tr><tr><td> <code>Uint16Array</code> </td> <td> 2 </td></tr><tr><td> <code>Int32Array</code> </td> <td> 4 </td></tr><tr><td> <code>Uint32Array</code> </td> <td> 4 </td></tr><tr><td> <code>Float32Array</code> </td> <td> 4 </td></tr><tr><td> <code>Float64Array</code> </td> <td> 8 </td></tr></tbody></table> Existem duas maneiras de criar esses tipos de matrizes. Uma maneira é criá-lo diretamente. Abaixo está como criar um <code>Int16Array</code> 3 comprimentos. <blockquote> var i8 = novo Int16Array (3); <br> console.log (i8); <br> // Retorna [0, 0, 0] </blockquote> Você também pode criar um <dfn>buffer</dfn> para atribuir quantos dados (em bytes) você deseja que o array ocupe. <strong>Nota</strong> <br> Para criar matrizes tipadas usando buffers, você precisa atribuir o número de bytes para ser um múltiplo dos bytes listados acima. <blockquote> // Cria o mesmo array Int16Array de forma diferente <br> var byteSize = 6; // Precisa ser múltiplo de 2 <br> var buffer = new ArrayBuffer (byteSize); <br> var i8View = new Int16Array (buffer); <br> buffer.byteLength; // Retorna 6 <br> i8View.byteLength; // Retorna 6 <br> console.log (i8View); // Retorna [0, 0, 0] </blockquote> <dfn>Os buffers</dfn> são objetos de finalidade geral que apenas transportam dados. Você não pode acessá-los normalmente. Para acessá-los, você precisa primeiro criar uma <dfn>visão</dfn> . <blockquote> i8View [0] = 42; <br> console.log (i8View); // Retorna [42, 0, 0] </blockquote> <strong>Nota</strong> <br> Matrizes tipadas não possuem alguns dos métodos que os arrays tradicionais têm como <code>.pop()</code> ou <code>.push()</code> . Matrizes digitadas também falham em <code>Array.isArray()</code> que verifica se algo é uma matriz. Embora mais simples, isso pode ser uma vantagem para mecanismos JavaScript menos sofisticados implementá-los. </section>

## Instructions
<section id="instructions"> Primeiro, crie um <code>buffer</code> com 64 bytes. Em seguida, crie uma matriz digitada <code>Int32Array</code> com uma exibição chamada <code>i32View</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu <code>buffer</code> deve ter 64 bytes de tamanho.
    testString: 'assert(buffer.byteLength === 64, "Your <code>buffer</code> should be 64 bytes large.");'
  - text: Sua visão do <code>i32View</code> do seu buffer deve ter 64 bytes de tamanho.
    testString: 'assert(i32View.byteLength === 64, "Your <code>i32View</code> view of your buffer should be 64 bytes large.");'
  - text: Sua visão do <code>i32View</code> do seu buffer deve ter 16 elementos de comprimento.
    testString: 'assert(i32View.length === 16, "Your <code>i32View</code> view of your buffer should be 16 elements long.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var buffer;
var i32View;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
