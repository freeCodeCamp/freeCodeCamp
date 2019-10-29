---
id: 587d7fb8367417b2b2512c11
title: Delete Many Documents with model.remove()
localeTitle: Eliminar muchos documentos con model.remove ()
challengeType: 2
---

## Description
<section id='description'> 
Model.remove () es útil para eliminar todos los documentos que coincidan con los criterios dados. Elimine a todas las personas cuyo nombre es "Mary", usando Model.remove (). Pasarlo a un documento de consulta con el conjunto de campos "nombre" y, por supuesto, una devolución de llamada. 
Nota: Model.remove () no devuelve el documento eliminado, sino un objeto JSON que contiene el resultado de la operación y el número de elementos afectados. No olvide pasarlo a la devolución de llamada done (), ya que lo usamos en las pruebas. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Eliminar muchos elementos a la vez debería tener éxito
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/remove-many-people'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''Mary'', age: 16, favoriteFoods: [''lollipop'']}, {name: ''Mary'', age: 21, favoriteFoods: [''steak'']}])}).then(data => { assert.isTrue(!!data.ok, ''The mongo stats are not what expected''); assert.equal(data.n, 2, ''The number of items affected is not what expected''); assert.equal(data.count, 0, ''the db items count is not what expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
