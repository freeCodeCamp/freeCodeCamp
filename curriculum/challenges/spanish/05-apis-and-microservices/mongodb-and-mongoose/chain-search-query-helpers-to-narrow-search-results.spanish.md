---
id: 587d7fb9367417b2b2512c12
title: Chain Search Query Helpers to Narrow Search Results
localeTitle: Encadene a los ayudantes de consulta para reducir los resultados de búsqueda
challengeType: 2
---

## Description
<section id='description'> 
Si no pasa la devolución de llamada como último argumento a Model.find () (o a los otros métodos de búsqueda), la consulta no se ejecuta. Puede almacenar la consulta en una variable para su uso posterior. Este tipo de objeto le permite crear una consulta utilizando la sintaxis de encadenamiento. La búsqueda real de db se ejecuta cuando finalmente encadena el método .exec (). Pase su devolución de llamada a este último método. Hay muchos ayudantes de consulta, aquí usaremos los más "famosos". 
Encuentra gente que le gusta "burrito". Ordénelos por nombre, limite los resultados a dos documentos y oculte su edad. Encadene .find (), .sort (), .limit (), .select (), y luego .exec (). Pase la devolución de llamada done (err, data) a exec (). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Los ayudantes de encadenamiento de consultas deben tener éxito
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/query-tools'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''Pablo'', age: 26, favoriteFoods: [''burrito'', ''hot-dog'']}, {name: ''Bob'', age: 23, favoriteFoods: [''pizza'', ''nachos'']}, {name: ''Ashley'', age: 32, favoriteFoods: [''steak'', ''burrito'']}, {name: ''Mario'', age: 51, favoriteFoods: [''burrito'', ''prosciutto'']} ]) }).then(data => { assert.isArray(data, ''the response should be an Array''); assert.equal(data.length, 2, ''the data array length is not what expected''); assert.notProperty(data[0], ''age'', ''The returned first item has too many properties''); assert.equal(data[0].name, ''Ashley'', ''The returned first item name is not what expected''); assert.notProperty(data[1], ''age'', ''The returned second item has too many properties''); assert.equal(data[1].name, ''Mario'', ''The returned second item name is not what expected'');}, xhr => { throw new Error(xhr.responseText); })'

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
