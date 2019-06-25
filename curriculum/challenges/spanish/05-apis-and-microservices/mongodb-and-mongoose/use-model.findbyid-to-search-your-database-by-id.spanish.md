---
id: 587d7fb7367417b2b2512c0d
title: Use model.findById() to Search Your Database By _id
localeTitle: Use model.findById () para buscar en su base de datos por _id
challengeType: 2
---

## Description
<section id='description'> 
Al guardar un documento, mongodb agrega automáticamente el campo _id y lo configura en una clave alfanumérica única. La búsqueda por _id es una operación extremadamente frecuente, por lo que la mangosta proporciona un método dedicado para ello. Encuentre la (solo !!) persona que tiene un _id dado, usando Model.findById () -&gt; Person. Utilice el argumento de función personId como clave de búsqueda. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Encontrar un artículo por ID debe tener éxito
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
