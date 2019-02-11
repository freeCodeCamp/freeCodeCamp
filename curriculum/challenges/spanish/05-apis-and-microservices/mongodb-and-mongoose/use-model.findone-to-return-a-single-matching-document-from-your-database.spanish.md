---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
localeTitle: Use model.findOne () para devolver un solo documento coincidente de su base de datos
challengeType: 2
---

## Description
<section id='description'> 
Model.findOne () se comporta como .find (), pero solo devuelve un documento (no una matriz), incluso si hay varios elementos. Es especialmente útil cuando busca por propiedades que ha declarado como únicas. Encuentre solo una persona que tenga cierta comida en sus favoritos, usando Model.findOne () -&gt; Person. Utilice la función de argumento de alimentos como clave de búsqueda. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Encontrar un elemento debe tener éxito
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
