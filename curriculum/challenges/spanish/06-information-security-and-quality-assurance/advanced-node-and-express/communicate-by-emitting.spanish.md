---
id: 589fc831f9fc0f352b528e75
title: Communicate by Emitting
localeTitle: Comunicar emitiendo
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-socketio/'>GitHub</a> . 
<dfn>Emitir</dfn> es la forma más común de comunicación que utilizará. Cuando emite algo del servidor a &#39;io&#39;, envía el nombre y los datos de un evento a todos los sockets conectados. ¡Un buen ejemplo de este concepto sería emitir el conteo actual de usuarios conectados cada vez que un nuevo usuario se conecte! 
<hr> Comience agregando una variable para hacer un seguimiento de los usuarios justo antes de que esté escuchando las conexiones. <code>var currentUsers = 0;</code> 
Ahora, cuando alguien se conecta, debe incrementar el conteo antes de emitir el conteo, por lo que deseará agregar el incrementador dentro de la escucha de conexión. <code>++currentUsers;</code> 
Finalmente, después de incrementar el conteo, debe emitir el evento (aún dentro del oyente de conexión). El evento debe denominarse &#39;cuenta de usuarios&#39; y los datos solo deben ser los &#39;usuarios actuales&#39;. <code>io.emit(&#39;user count&#39;, currentUsers);</code> 
<hr> ¡Ahora puede implementar una manera para que su cliente escuche este evento! De manera similar a escuchar una conexión en el servidor, usará la palabra clave <em>on</em> . <pre> socket.on (&#39;cuenta de usuarios&#39;, función (datos) { 
console.log (datos); 
}); </pre> 
Ahora intente cargar su aplicación y autenticarla y debería ver en la consola del cliente &#39;1&#39; que representa el conteo actual de usuarios! Intente cargar más clientes y autenticar para ver cómo aumenta el número. 
Envía tu página cuando creas que lo has hecho bien. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: currentUsers está definido
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js").then(data => {assert.match(data, /currentUsers/gi, "You should have variable currentUsers defined");}, xhr => { throw new Error(xhr.statusText); })'
  - text: El servidor emite el conteo de usuarios actual en cada nueva conexión
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /io.emit.*("|")user count("|").*currentUsers/gi, "You should emit "user count" with data currentUsers"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Tu cliente está escuchando el evento 'cuenta de usuario'
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.on.*("|")user count("|")/gi, "Your client should be connection to server with the connection defined as socket"); }, xhr => { throw new Error(xhr.statusText); })'

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
