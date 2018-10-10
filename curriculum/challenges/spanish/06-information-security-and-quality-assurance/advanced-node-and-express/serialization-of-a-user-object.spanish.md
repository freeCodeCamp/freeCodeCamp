---
id: 5895f70cf9fc0f352b528e66
title: Serialization of a User Object
challengeType: 2
videoUrl: ''
localeTitle: Serialización de un objeto de usuario
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Serialización y deserialización son conceptos importantes en lo que respecta a la autenticación. Serializar un objeto significa convertir su contenido en una <em>clave</em> pequeña que esencialmente se puede deserializar en el objeto original. Esto es lo que nos permite saber quiénes se comunicaron con el servidor sin tener que enviar los datos de autenticación como el nombre de usuario y la contraseña en cada solicitud de una nueva página. Para configurar esto correctamente, necesitamos tener una función de serialización y una función de deserialización. En el pasaporte, los creamos con <code>passport.serializeUser( OURFUNCTION )</code> y <code>passport.deserializeUser( OURFUNCTION )</code> Se llama a serializeUser con 2 argumentos, el objeto de usuario completo y una devolución de llamada utilizada por el pasaporte. Devuelto en la devolución de llamada debe ser una clave única para identificar a ese usuario; la más fácil de usar es que los usuarios _id en el objeto, ya que debe ser único, tal como lo generó MongoDb. De manera similar, se llama a deserializeUser con esa clave y también con una función de devolución de llamada para el pasaporte, pero esta vez tenemos que tomar esa clave y devolver el objeto completo de los usuarios a la devolución de llamada. Para realizar una búsqueda de búsqueda de un _id Mongo, tendrá que crear <code>const ObjectID = require(&#39;mongodb&#39;).ObjectID;</code> y luego, para usarlo, se llama <code>new ObjectID(THE_ID)</code> . Asegúrese de agregar MongoDB como una dependencia. Puedes ver esto en los siguientes ejemplos: <pre> passport.serializeUser ((usuario, hecho) =&gt; {
   hecho (nulo, usuario.id);
 }); </pre><br><pre> passport.deserializeUser ((id, done) =&gt; {
        db.collection (&#39;usuarios&#39;). findOne (
            {_id: nuevo ObjectID (id)},
            (err, doc) =&gt; {
                hecho (nulo, doc);
            }
        );
    }); </pre> NOTA: este deserializeUser generará un error hasta que configuremos la base de datos en el siguiente paso, así que comente el bloque completo y simplemente llame al final <code>done(null, null)</code> en la función deserializeUser. Envía tu página cuando creas que lo has hecho bien. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Serializar la función de usuario correcta
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.serializeUser/gi, "You should have created your passport.serializeUser function"); assert.match(data, /null, user._id/gi, "There should be a callback in your serializeUser with (null, user._id)"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Deserializar la función de usuario correcta
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.deserializeUser/gi, "You should have created your passport.deserializeUser function"); assert.match(data, /null,( |)null/gi, "There should be a callback in your deserializeUser with (null, null) for now"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: MongoDB es una dependencia
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "mongodb", "Your project should list "mongodb" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Mongodb correctamente requerido incluyendo el ObjectId
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")mongodb("|")/gi, "You should have required mongodb"); assert.match(data, /new ObjectID.*id/gi, "Even though the block is commented out, you should use new ObjectID(id) for when we add the database"); }, xhr => { throw new Error(xhr.statusText); })'

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
