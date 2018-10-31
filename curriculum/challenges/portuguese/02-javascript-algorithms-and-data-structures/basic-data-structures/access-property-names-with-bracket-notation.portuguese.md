---
id: 587d7b7c367417b2b2512b1a
title: Access Property Names with Bracket Notation
challengeType: 1
videoUrl: ''
localeTitle: Acessar nomes de propriedades com notação de suporte
---

## Description
<section id="description"> No primeiro desafio de objeto, mencionamos o uso da notação de colchetes como uma forma de acessar valores de propriedade usando a avaliação de uma variável. Por exemplo, imagine que nosso objeto de <code>foods</code> esteja sendo usado em um programa para uma caixa registradora de supermercado. Temos alguma função que define o <code>selectedFood</code> e queremos verificar o nosso objeto de <code>foods</code> para a presença desse alimento. Isso pode parecer com: <blockquote> let selectedFood = getCurrentFood (scannedItem); <br> let inventory = foods [selectedFood]; </blockquote> Esse código avaliará o valor armazenado na variável <code>selectedFood</code> e retornará o valor dessa chave no objeto <code>foods</code> , ou <code>undefined</code> se não estiver presente. A notação de colchetes é muito útil porque às vezes as propriedades do objeto não são conhecidas antes do tempo de execução ou precisamos acessá-las de uma maneira mais dinâmica. </section>

## Instructions
<section id="instructions"> Nós definimos uma função, <code>checkInventory</code> , que recebe um item varrido como argumento. Retorna o valor atual da chave <code>scannedItem</code> no objeto <code>foods</code> . Você pode assumir que apenas chaves válidas serão fornecidas como um argumento para verificar <code>checkInventory</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkInventory</code> é uma função
    testString: 'assert.strictEqual(typeof checkInventory, "function", "<code>checkInventory</code> is a function");'
  - text: 'Os <code>foods</code> objeto devem ter apenas os seguintes pares de valores-chave: <code>apples: 25</code> , <code>oranges: 32</code> , <code>plums: 28</code> , <code>bananas: 13</code> , <code>grapes: 35</code> , <code>strawberries: 27</code>'
    testString: 'assert.deepEqual(foods, {apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27}, "The <code>foods</code> object should have only the following key-value pairs: <code>apples: 25</code>, <code>oranges: 32</code>, <code>plums: 28</code>, <code>bananas: 13</code>, <code>grapes: 35</code>, <code>strawberries: 27</code>");'
  - text: <code>checkInventory(&quot;apples&quot;)</code> deve retornar <code>25</code>
    testString: 'assert.strictEqual(checkInventory("apples"), 25, "<code>checkInventory("apples")</code> should return <code>25</code>");'
  - text: <code>checkInventory(&quot;bananas&quot;)</code> deve retornar <code>13</code>
    testString: 'assert.strictEqual(checkInventory("bananas"), 13, "<code>checkInventory("bananas")</code> should return <code>13</code>");'
  - text: <code>checkInventory(&quot;strawberries&quot;)</code> deve retornar <code>27</code>
    testString: 'assert.strictEqual(checkInventory("strawberries"), 27, "<code>checkInventory("strawberries")</code> should return <code>27</code>");'

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
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line

}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
