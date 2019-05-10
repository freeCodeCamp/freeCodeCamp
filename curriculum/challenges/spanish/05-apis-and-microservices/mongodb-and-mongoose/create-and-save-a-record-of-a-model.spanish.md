---
id: 587d7fb6367417b2b2512c09
title: Create and Save a Record of a Model
localeTitle: Crear y guardar un registro de un modelo
challengeType: 2
---

## Description
<section id='description'> 
Crea una instancia de documento utilizando el constructor de persona que creaste antes. Pase al constructor un objeto que tenga los campos nombre, edad y favoriteFoods. Sus tipos deben ser conformes a los del esquema de persona. Luego llame al método document.save () en la instancia del documento devuelto. Pasar a él una devolución de llamada utilizando la convención de nodo. Este es un patrón común, todos los siguientes métodos de CRUD toman una función de devolución de llamada como el último argumento. 
<code>/* Example */</code> 
<code>// ...</code> 
<code>person.save(function(err, data) {</code> 
<code>// ...do your stuff here...</code> 
<code>});</code> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Crear y guardar un elemento db debería tener éxito
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/create-and-save-person'').then(data => { assert.isString(data.name, ''"item.name" should be a String''); assert.isNumber(data.age, ''28'', ''"item.age" should be a Number''); assert.isArray(data.favoriteFoods, ''"item.favoriteFoods" should be an Array''); assert.equal(data.__v, 0, ''The db item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
