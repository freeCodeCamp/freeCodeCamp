---
id: 587d7fb7367417b2b2512c0a
title: Create Many Records with model.create()
localeTitle: Crie muitos registros com model.create ()
challengeType: 2
---

## Description
<section id='description'> 
Às vezes, você precisa criar muitas instâncias de seus modelos, por exemplo, ao criar um banco de dados com dados iniciais. Model.create () pega uma matriz de objetos como [{name: 'John', ...}, {...}, ...] como o primeiro argumento e salva todos eles no banco de dados. Crie muitas pessoas com Model.create (), usando o argumento da função arrayOfPeople. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Criar muitos itens de banco de dados de uma só vez deve ser bem-sucedido
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/create-many-people'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''John'', age: 24, favoriteFoods: [''pizza'', ''salad'']}, {name: ''Mary'', age: 21, favoriteFoods: [''onions'', ''chicken'']}])}).then(data => { assert.isArray(data, ''the response should be an array''); assert.equal(data.length, 2, ''the response does not contain the expected number of items''); assert.equal(data[0].name, ''John'', ''The first item is not correct''); assert.equal(data[0].__v, 0, ''The first item should be not previously edited''); assert.equal(data[1].name, ''Mary'', ''The second item is not correct''); assert.equal(data[1].__v, 0, ''The second item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
