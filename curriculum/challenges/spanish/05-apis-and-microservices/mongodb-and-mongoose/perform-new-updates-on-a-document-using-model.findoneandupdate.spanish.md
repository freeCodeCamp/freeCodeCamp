---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
localeTitle: Realizar nuevas actualizaciones en un documento utilizando model.findOneAndUpdate ()
challengeType: 2
---

## Description
<section id='description'> 
Las versiones recientes de mongoose tienen métodos para simplificar la actualización de documentos. Algunas características más avanzadas (es decir, ganchos pre / post, validación) se comportan de manera diferente con este enfoque, por lo que el método Classic sigue siendo útil en muchas situaciones. findByIdAndUpdate () se puede usar cuando se busca por Id. 
Encuentre a una persona por su nombre y establezca su edad en 20. Use el parámetro de función personName como clave de búsqueda. 
Sugerencia: queremos que devuelva el documento actualizado. Para hacerlo, debe pasar el documento de opciones {nuevo: verdadero} como el tercer argumento para findOneAndUpdate (). Por defecto, estos métodos devuelven el objeto no modificado. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: findOneAndUpdate un elemento debe tener éxito
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-update'', {name:''Dorian Gray'', age: 35, favoriteFoods:[''unknown'']}).then(data => { assert.equal(data.name, ''Dorian Gray'', ''item.name is not what expected''); assert.equal(data.age, 20, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''unknown''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''findOneAndUpdate does not increment version by design !!!''); }, xhr => { throw new Error(xhr.responseText); })'

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
