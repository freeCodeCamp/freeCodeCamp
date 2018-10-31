---
id: 587d7b7e367417b2b2512b20
title: Use an Array to Store a Collection of Data
challengeType: 1
videoUrl: ''
localeTitle: Use uma matriz para armazenar uma coleção de dados
---

## Description
<section id="description"> O abaixo é um exemplo da implementação mais simples de uma estrutura de dados de matriz. Isso é conhecido como um <dfn>array unidimensional</dfn> , o que significa que ele tem apenas um nível, ou que não possui outros arrays aninhados nele. Observe que contém <dfn>booleanos</dfn> , <dfn>cadeias de caracteres</dfn> e <dfn>números</dfn> , entre outros tipos de dados JavaScript válidos: <blockquote> let simpleArray = [&#39;um&#39;, 2, &#39;três&#39;, verdadeiro, falso, indefinido, nulo]; <br> console.log (simpleArray.length); <br> // logs 7 </blockquote> Todas as matrizes têm uma propriedade length, que, como mostrado acima, pode ser facilmente acessada com a sintaxe <code>Array.length</code> . Uma implementação mais complexa de um array pode ser vista abaixo. Isso é conhecido como uma <dfn>matriz multidimensional</dfn> ou uma matriz que contém outras matrizes. Observe que essa matriz também contém <dfn>objetos</dfn> JavaScript, que examinaremos de perto na próxima seção, mas, por enquanto, tudo o que você precisa saber é que as matrizes também são capazes de armazenar objetos complexos. <blockquote> deixe complexArray = [ <br> [ <br> { <br> Um 1, <br> dois: 2 <br> } <br> { <br> três: 3 <br> quatro: 4 <br> } <br> ] <br> [ <br> { <br> a: &quot;a&quot;, <br> b: &quot;b&quot; <br> } <br> { <br> c: &quot;c&quot;, <br> d: &quot;d&quot; <br> } <br> ] <br> ]; </blockquote></section>

## Instructions
<section id="instructions"> Nós definimos uma variável chamada <code>yourArray</code> . Complete a instrução atribuindo uma matriz de pelo menos 5 elementos de comprimento à variável <code>yourArray</code> . Sua matriz deve conter pelo menos uma <dfn>string</dfn> , um <dfn>número</dfn> e um <dfn>booleano</dfn> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: yourArray é um array
    testString: 'assert.strictEqual(Array.isArray(yourArray), true, "yourArray is an array");'
  - text: <code>yourArray</code> tem pelo menos 5 elementos
    testString: 'assert.isAtLeast(yourArray.length, 5, "<code>yourArray</code> is at least 5 elements long");'
  - text: <code>yourArray</code> contém pelo menos um <code>boolean</code>
    testString: 'assert(yourArray.filter( el => typeof el === "boolean").length >= 1, "<code>yourArray</code> contains at least one <code>boolean</code>");'
  - text: <code>yourArray</code> contém pelo menos um <code>number</code>
    testString: 'assert(yourArray.filter( el => typeof el === "number").length >= 1, "<code>yourArray</code> contains at least one <code>number</code>");'
  - text: <code>yourArray</code> contém pelo menos uma <code>string</code>
    testString: 'assert(yourArray.filter( el => typeof el === "string").length >= 1, "<code>yourArray</code> contains at least one <code>string</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let yourArray; // change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
