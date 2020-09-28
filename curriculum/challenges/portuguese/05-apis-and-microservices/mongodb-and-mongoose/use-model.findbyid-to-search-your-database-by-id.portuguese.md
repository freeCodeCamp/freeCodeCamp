---
id: 587d7fb7367417b2b2512c0d
title: Use model.findById() to Search Your Database By _id
localeTitle: Use model.findById () para pesquisar seu banco de dados por _id
challengeType: 2
---

## Description
<section id='description'> 
Ao salvar um documento, o mongodb adiciona automaticamente o campo _id e o configura para uma chave alfanumérica exclusiva. Pesquisar por _id é uma operação extremamente frequente, então o mangusto fornece um método dedicado para isso. Encontre a pessoa (somente !!) tendo um determinado _id, usando Model.findById () -&gt; Person. Use o argumento da função personId como chave de busca. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Encontrar um item por Id deve ter sucesso
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/find-by-id'').then(data => { assert.equal(data.name, ''test'', ''item.name is not what expected''); assert.equal(data.age, 0, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''none''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
