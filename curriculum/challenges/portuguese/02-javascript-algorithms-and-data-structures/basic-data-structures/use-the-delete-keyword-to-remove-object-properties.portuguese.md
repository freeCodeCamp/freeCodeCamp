---
id: 587d7b7c367417b2b2512b1b
title: Use the delete Keyword to Remove Object Properties
challengeType: 1
videoUrl: ''
localeTitle: Use a palavra-chave delete para remover propriedades do objeto
---

## Descrição
<section id="description"> Agora você sabe quais são os objetos e seus recursos e vantagens básicas. Em resumo, eles são armazenamentos de valor-chave que fornecem uma maneira flexível e intuitiva de estruturar dados <strong><em>e</em></strong> fornecem um tempo de pesquisa muito rápido. Durante o restante desses desafios, descreveremos várias operações comuns que você pode executar em objetos, para que você possa se sentir confortável ao aplicar essas estruturas de dados úteis em seus programas. Nos desafios anteriores, adicionamos e modificamos os pares de valores-chave de um objeto. Aqui, veremos como podemos <em>remover</em> um par de valores-chave de um objeto. Vamos revisitar nosso exemplo de objeto de <code>foods</code> uma última vez. Se quiséssemos remover a chave <code>apples</code> , poderíamos removê-la usando a palavra-chave <code>delete</code> seguinte forma: <blockquote> delete foods.apples; </blockquote></section>

## Instruções
<section id="instructions"> Use a palavra-chave delete para remover as chaves <code>oranges</code> , <code>plums</code> e <code>strawberries</code> do objeto <code>foods</code> . </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: 'Os <code>foods</code> objeto só tem três chaves: <code>apples</code> , <code>grapes</code> e <code>bananas</code>'
    testString: 'assert(!foods.hasOwnProperty("oranges") && !foods.hasOwnProperty("plums") && !foods.hasOwnProperty("strawberries") && Object.keys(foods).length === 3, "The <code>foods</code> object only has three keys: <code>apples</code>, <code>grapes</code>, and <code>bananas</code>");'
  - text: 'As chaves <code>oranges</code> , <code>plums</code> e <code>strawberries</code> são removidas usando a <code>delete</code>'
    testString: 'assert(code.search(/oranges:/) !== -1 && code.search(/plums:/) !== -1 && code.search(/strawberries:/) !== -1, "The <code>oranges</code>, <code>plums</code>, and <code>strawberries</code> keys are removed using <code>delete</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line

// change code above this line

console.log(foods);

```

</div>



</section>

## Solução
<section id='solution'>

```js
// solution required
```
</section>
