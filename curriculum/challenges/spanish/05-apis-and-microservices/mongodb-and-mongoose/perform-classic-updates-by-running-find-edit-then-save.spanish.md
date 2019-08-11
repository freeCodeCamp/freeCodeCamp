---
id: 587d7fb8367417b2b2512c0e
title: 'Perform Classic Updates by Running Find, Edit, then Save'
localeTitle: 'Realizar actualizaciones clásicas ejecutando Buscar, Editar y luego Guardar'
challengeType: 2
---

## Description
<section id='description'> 
En los viejos tiempos, esto era lo que tenía que hacer si quería editar un documento y poder usarlo de alguna manera, por ejemplo, enviándolo de vuelta en una respuesta del servidor. Mongoose tiene un método de actualización dedicado: Model.update (). Está vinculado al controlador mongo de bajo nivel. Puede editar de forma masiva muchos documentos que cumplen ciertos criterios, pero no envía el documento actualizado, solo un mensaje de "estado". Además, dificulta las validaciones de modelos, ya que solo llama directamente al controlador mongo. 
Encuentre una persona por _id (use cualquiera de los métodos anteriores) con el parámetro personId como clave de búsqueda. Agregue “hamburguesa” a la lista de sus alimentos favoritos (puede usar Array.push ()). Luego, dentro de la devolución de llamada de búsqueda, guarde () la Persona actualizada. 
[*] Sugerencia: Esto puede ser complicado si en tu Esquema declaraste favoriteFoods como una matriz, sin especificar el tipo (es decir, [Cadena]). En ese caso, el valor predeterminado de los alimentos predeterminados es de tipo mixto, y tiene que marcarlo manualmente como editado utilizando document.markModified ('campo editado'). (http://mongoosejs.com/docs/schematypes.html - #Mixed) 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Buscar-editar-actualizar un elemento debería tener éxito
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-edit-save'', {name:''Poldo'', age: 40, favoriteFoods:[''spaghetti'']}).then(data => { assert.equal(data.name, ''Poldo'', ''item.name is not what expected''); assert.equal(data.age, 40, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''spaghetti'', ''hamburger''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 1, ''The item should be previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
