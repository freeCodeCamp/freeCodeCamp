---
id: 5895f70cf9fc0f352b528e67
title: Implement the Serialization of a Passport User
localeTitle: Implementar la serialización de un usuario de pasaporte
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a> . 
En este momento no estamos cargando un objeto de usuarios en realidad ya que no hemos configurado nuestra base de datos. Esto se puede hacer de muchas maneras diferentes, pero para nuestro proyecto nos conectaremos a la base de datos una vez que iniciemos el servidor y mantengamos una conexión persistente durante todo el ciclo de vida de la aplicación. 
Para hacer esto, agregue MongoDB como una dependencia y solicítelo en su servidor. ( <code>const mongo = require(&#39;mongodb&#39;).MongoClient;</code> ) 
Ahora queremos conectarnos a nuestra base de datos y luego comenzar a escuchar las solicitudes. El propósito de esto es no permitir solicitudes antes de que nuestra base de datos esté conectada o si hay un error en la base de datos. Para lograrlo, querrá abarcar su serialización y su escucha de aplicaciones en lo siguiente: 
<pre> mongo.connect (process.env.DATABASE, (err, db) =&gt; { 
if (err) { 
console.log (&#39;Error de la base de datos:&#39; + err); 
} else { 
console.log (&#39;Base de datos exitosa connection &#39;); 

// serialización y app.listen 

}}); </pre> 
Ahora puede descomentar el bloqueo en deserializeUser y eliminar el <code>done(null, null)</code> . Asegúrese de establecer <em>DATABASE</em> en su archivo .env a la cadena de conexión de su base de datos (por ejemplo: <code>DATABASE=mongodb://admin:pass@mlab.com:12345/my-project</code> ). Puede configurar una base de datos gratuita en <a href='https://mlab.com/welcome/'>mLab</a> . Enhorabuena, ¡has terminado de configurar la serialización! 
Envía tu página cuando creas que lo has hecho bien. Si está teniendo errores, puede consultar el proyecto completado hasta este punto <a href='https://gist.github.com/JosephLivengood/e192e809a1d27cb80dc2c6d3467b7477'>aquí</a> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Conexión de base de datos está presente
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /mongo.connect/gi, "You should have created a connection to your database"); assert.match(data, /mongo.connect[^]*app.listen[^]*}[^]*}/gi, "You should have your app.listen nested at within your database connection at the bottom"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 'La deserialización ahora está usando correctamente la base de datos y <code class = "notranslate"> hecho (nulo, nulo) </code> se borra'
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.notMatch(data, /null,( |)null/gi, "The callback in deserializeUser of (null, null) should be completely removed for the db block uncommented out"); }, xhr => { throw new Error(xhr.statusText); })'

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
