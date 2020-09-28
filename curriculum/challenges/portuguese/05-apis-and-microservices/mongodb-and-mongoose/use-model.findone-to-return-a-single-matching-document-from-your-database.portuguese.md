---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
localeTitle: Use model.findOne () para retornar um único documento correspondente do seu banco de dados
challengeType: 2
---

## Description
<section id='description'> 
Model.findOne () se comporta como .find (), mas retorna apenas um documento (não uma matriz), mesmo se houver vários itens. É especialmente útil ao pesquisar por propriedades que você declarou como exclusivas. Encontre apenas uma pessoa que tenha uma certa comida em seus favoritos, usando Model.findOne () -&gt; Person. Use o argumento de função food como chave de busca. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Encontrar um item deve ser bem sucedido
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-by-food'', {name: ''Gary'', age: 46, favoriteFoods: [''chicken salad'']}).then(data => { assert.equal(data.name, ''Gary'', ''item.name is not what expected''); assert.deepEqual(data.favoriteFoods, [''chicken salad''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
