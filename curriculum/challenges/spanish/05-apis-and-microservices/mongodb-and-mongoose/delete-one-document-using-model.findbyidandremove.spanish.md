---
id: 587d7fb8367417b2b2512c10
title: Delete One Document Using model.findByIdAndRemove
localeTitle: Eliminar un documento utilizando model.findByIdAndRemove
challengeType: 2
---

## Description
<section id='description'> 
Eliminar una persona por su _id. Debe usar uno de los métodos findByIdAndRemove () o findOneAndRemove (). Son como los métodos de actualización anteriores. Pasan el documento eliminado a la cb. Como de costumbre, use la función argumento personId como clave de búsqueda. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Eliminar un elemento debe tener éxito
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
