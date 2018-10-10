---
id: 5895f700f9fc0f352b528e63
title: Set up a Template Engine
challengeType: 2
videoUrl: ''
localeTitle: Configurar un motor de plantillas
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Un motor de plantillas le permite usar archivos de plantillas estáticas (como los escritos en <em>Pug</em> ) en su aplicación. En tiempo de ejecución, el motor de plantilla reemplaza las variables en un archivo de plantilla con valores reales que puede proporcionar su servidor y transforma la plantilla en un archivo HTML estático que luego se envía al cliente. Este enfoque facilita el diseño de una página HTML y permite la visualización de variables en la página sin necesidad de realizar una llamada a la API desde el cliente. Para configurar <em>Pug</em> para su uso en su proyecto, primero deberá agregarlo como una dependencia en su package.json. <code>&quot;pug&quot;: &quot;^0.1.0&quot;</code> Ahora, para indicar a Node / Express que use el motor de plantillas, deberá indicar a su <b>aplicación</b> Express que <b>configure</b> &#39;pug&#39; como &#39;motor de visualización&#39;. <code>app.set(&#39;view engine&#39;, &#39;pug&#39;)</code> Por último, debe cambiar su respuesta a la solicitud de la ruta del índice a <code>res.render</code> con la ruta a las vistas de <em>vista / pug / index.pug</em> . Si todo salió según lo planeado, deberías actualizar la página de inicio de tus aplicaciones y ver un pequeño mensaje que dice que estás enviando con éxito el Pug desde nuestro archivo Pug. Envía tu página cuando creas que lo has hecho bien. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Pug es una dependencia
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "pug", "Your project should list "pug" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Ver el motor es Pug
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /("|")view engine("|"),( |)("|")pug("|")/gi, "Your project should set Pug as a view engine"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Pug esta trabajando
    testString: 'getUserInput => $.get(getUserInput("url")+ "/") .then(data => { assert.match(data, /pug-success-message/gi, "Your projects home page should now be rendered by pug with the projects .pug file unaltered"); }, xhr => { throw new Error(xhr.statusText); })'

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
