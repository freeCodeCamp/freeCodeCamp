---
id: 587d7fb6367417b2b2512c07
title: Create a Model
localeTitle: Crear un modelo
challengeType: 2
---

## Description
<section id='description'> 
Primero que todo necesitamos un esquema. Cada esquema se asigna a una colección de MongoDB. Define la forma de los documentos dentro de esa colección. 
esquemas son bloques de construcción para los modelos. Se pueden anidar para crear modelos complejos, pero en este caso mantendremos las cosas simples. 
Un modelo le permite crear instancias de sus objetos, llamados documentos. 
Crea una persona que tenga este prototipo: 
<code>- Person Prototype -</code> 
<code>--------------------</code> 
<code>name : string [required]</code> 
<code>age : number</code> 
<code>favoriteFoods : array of strings (*)</code> 
Utilice los tipos de esquema básicos de mangosta. Si lo desea, también puede agregar 
campos más, use validadores simples como requeridos o únicos, 
y configure los valores predeterminados. Ver los <a href='http://mongoosejs.com/docs/guide.html'>documentos de mangosta</a> . 
[C] RUD Parte I - CREAR 
Nota: Glitch es un servidor real, y en servidores reales las interacciones con el db ocurren en las funciones del controlador. Estas funciones se ejecutan cuando ocurre algún evento (por ejemplo, alguien llega a un punto final en su API). Seguiremos el mismo enfoque en estos ejercicios. La función done () es una devolución de llamada que nos dice que podemos continuar después de completar una operación asíncrona, como insertar, buscar, actualizar o eliminar. Sigue la convención de Nodo y debe llamarse como hecho (nulo, datos) en caso de éxito o hecho (error) en caso de error 
Advertencia: al interactuar con servicios remotos, pueden producirse errores. 
<code>/* Example */</code> 
<code>var someFunc = function(done) {</code> 
<code>//... do something (risky) ...</code> 
<code>if(error) return done(error);</code> 
<code>done(null, result);</code> 
<code>};</code> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La creación de una instancia a partir de un esquema de mangosta debería tener éxito
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/mongoose-model'', {name: ''Mike'', age: 28, favoriteFoods: [''pizza'', ''cheese'']}).then(data => { assert.equal(data.name, ''Mike'', ''"model.name" is not what expected''); assert.equal(data.age, ''28'', ''"model.age" is not what expected''); assert.isArray(data.favoriteFoods, ''"model.favoriteFoods" is not an Array''); assert.include(data.favoriteFoods, ''pizza'', ''"model.favoriteFoods" does not include the expected items''); assert.include(data.favoriteFoods, ''cheese'', ''"model.favoriteFoods" does not include the expected items''); }, xhr => { throw new Error(xhr.responseText); })'

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
