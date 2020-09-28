---
id: 587d7fb7367417b2b2512c0a
title: Create Many Records with model.create()
localeTitle: Crear muchos registros con model.create ()
challengeType: 2
---

## Description
<section id='description'> 
A veces necesita crear muchas instancias de sus modelos, por ejemplo, al sembrar una base de datos con datos iniciales. Model.create () toma una matriz de objetos como [{nombre: 'John', ...}, {...}, ...] como el primer argumento, y los guarda todos en la db. Cree muchas personas con Model.create (), usando la función argumentoOfPeople. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La creación de muchos elementos db a la vez debe tener éxito
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
