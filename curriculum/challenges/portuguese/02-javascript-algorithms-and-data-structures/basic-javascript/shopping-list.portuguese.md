---
id: 56533eb9ac21ba0edf2244bc
title: Shopping List
challengeType: 1
videoUrl: ''
localeTitle: Lista de compras
---

## Description
<section id="description"> Crie uma lista de compras na variável <code>myList</code> . A lista deve ser um array multidimensional contendo vários sub-arrays. O primeiro elemento em cada sub-array deve conter uma string com o nome do item. O segundo elemento deve ser um número representando a quantidade, ou seja, <code>[&quot;Chocolate Bar&quot;, 15]</code> Deve haver pelo menos 5 sub-arrays na lista. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myList</code> deve ser um array
    testString: 'assert(isArray, "<code>myList</code> should be an array");'
  - text: Os primeiros elementos em cada um dos seus sub-arrays devem ser todos strings
    testString: 'assert(hasString, "The first elements in each of your sub-arrays must all be strings");'
  - text: Os segundos elementos em cada um dos seus sub-arrays devem ser todos números
    testString: 'assert(hasNumber, "The second elements in each of your sub-arrays must all be numbers");'
  - text: Você deve ter pelo menos 5 itens em sua lista
    testString: 'assert(count > 4, "You must have at least 5 items in your list");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myList = [];

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
