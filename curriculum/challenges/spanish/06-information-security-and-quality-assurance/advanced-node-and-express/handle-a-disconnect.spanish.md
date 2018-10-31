---
id: 589fc831f9fc0f352b528e76
title: Handle a Disconnect
challengeType: 2
videoUrl: ''
localeTitle: Manejar una desconexión
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . Puede notar que hasta ahora solo ha aumentado el número de usuarios. Controlar la desconexión de un usuario es tan fácil como manejar la conexión inicial, excepto que la diferencia es que debe escucharla en cada socket en lugar de en todo el servidor. <hr> Para hacer esto, agregue a su escucha de conexión existente una escucha que escuche la &quot;desconexión&quot; en el zócalo sin que se pasen datos. Puede probar esta funcionalidad simplemente iniciando sesión en la consola que un usuario ha desconectado. <code>socket.on(&#39;disconnect&#39;, () =&gt; { /*anything you want to do on disconnect*/ });</code> Para asegurarse de que los clientes tengan continuamente el recuento actualizado de usuarios actuales, debe disminuir los usuarios actuales en 1 cuando se produzca la desconexión y luego emitir el evento &quot;recuento de usuarios&quot; con el recuento actualizado. <strong>Nota</strong> <br> Al igual que &#39;desconectar&#39;, todos los demás eventos que un socket puede emitir al servidor deben manejarse dentro del oyente de conexión donde tenemos definido el &#39;socket&#39;. Envía tu página cuando creas que lo has hecho bien. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El servidor maneja el evento desconectándose de un socket
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /socket.on.*("|")disconnect("|")/gi, ""); }, xhr => { throw new Error(xhr.statusText); })'
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
