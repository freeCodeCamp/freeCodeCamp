---
id: 587d7fb8367417b2b2512c10
title: Delete One Document Using model.findByIdAndRemove
localeTitle: Excluir um documento usando model.findByIdAndRemove
challengeType: 2
---

## Description
<section id='description'> 
Excluir uma pessoa por ela _id. Você deve usar um dos métodos findByIdAndRemove () ou findOneAndRemove (). Eles são como os métodos de atualização anteriores. Eles passam o documento removido para o cb. Como de costume, use o argumento da função personId como chave de busca. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A exclusão de um item deve ser bem-sucedida
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/remove-one-person'', {name:''Jason Bourne'', age: 36, favoriteFoods:[''apples'']}).then(data => { assert.equal(data.name, ''Jason Bourne'', ''item.name is not what expected''); assert.equal(data.age, 36, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''apples''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0); assert.equal(data.count, 0, ''the db items count is not what expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
