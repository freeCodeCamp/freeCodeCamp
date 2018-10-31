---
id: 589690e6f9fc0f352b528e6e
title: Clean Up Your Project with Modules
challengeType: 2
videoUrl: ''
localeTitle: Limpie su proyecto con módulos
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . En este momento, todo lo que tienes está en tu archivo server.js. Esto puede llevar a un código difícil de administrar que no es muy ampliable. Cree 2 nuevos archivos: Routes.js y Auth.js Ambos deben comenzar con el siguiente código: <pre> module.exports = function (app, db) {
<p> } </p></pre> Ahora en la parte superior de su archivo de servidor, requiera estos archivos como por ejemplo: <code>const routes = require(&#39;./routes.js&#39;);</code> Inmediatamente después de establecer una conexión exitosa con la base de datos, cree una instancia de cada una de ellas como por ejemplo: <code>routes(app, db)</code> Finalmente, tome todas las rutas en su servidor y péguelas en sus nuevos archivos y elimínelas de su archivo de servidor. También tome makeAutAutenticate ya que creamos esa función de middleware para enrutamiento específicamente. Ahora tendrá que agregar correctamente las dependencias que se utilizan, como <code>const passport = require(&#39;passport&#39;);</code> , en la parte superior de la línea de exportación en su archivo route.js. ¡Sigue agregándolos hasta que no haya más errores y el archivo del servidor ya no tenga enrutamiento! Ahora haga lo mismo en su archivo auth.js con todas las cosas relacionadas con la autenticación, como la serialización y la configuración de la estrategia local, y elimínelas del archivo del servidor. Asegúrese de agregar las dependencias y llamar a <code>auth(app,db)</code> en el servidor en el mismo lugar. ¡Asegúrese de tener <code>auth(app, db)</code> antes de las <code>routes(app, db)</code> ya que nuestra ruta de registro depende de que se inicie el pasaporte! Enhorabuena, estás al final de esta sección de Advanced Node y Express, ¡y tienes un hermoso código para mostrarlo! Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes ver un ejemplo del proyecto completado <a href="https://glitch.com/#!/project/delicious-herring">aquí</a> . <p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Módulos presentes
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|").\/routes.js("|")/gi, "You should have required your new files"); assert.match(data, /mongo.connect[^]*routes/gi, "Your new modules should be called after your connection to the database"); }, xhr => { throw new Error(xhr.statusText); })'

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
