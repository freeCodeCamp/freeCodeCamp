---
id: 587d7fb7367417b2b2512c0b
title: Use model.find() to Search Your Database
localeTitle: Utilice model.find () para buscar su base de datos
challengeType: 2
---

## Description
<section id='description'> 
Encuentre a todas las personas que tienen un nombre dado, usando Model.find () -&gt; [Persona] 
En su uso más simple, Model.find () acepta un documento de consulta (un objeto JSON) como primer argumento, luego una devolución de llamada. Devuelve una serie de coincidencias. Es compatible con una amplia gama de opciones de búsqueda. Compruébalo en los documentos. Utilice la función argumento personName como clave de búsqueda. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Encontrar todos los elementos correspondientes a un criterio debe tener éxito
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-all-by-name'', {name: ''r@nd0mN4m3'', age: 24, favoriteFoods: [''pizza'']}).then(data => { assert.isArray(data, ''the response should be an Array'');  assert.equal(data[0].name, ''r@nd0mN4m3'', ''item.name is not what expected''); assert.equal(data[0].__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
