---
id: 589fc832f9fc0f352b528e79
title: Send and Display Chat Messages
challengeType: 2
videoUrl: ''
localeTitle: Enviar y mostrar mensajes de chat
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . ¡Es hora de que empieces a permitir que los clientes envíen un mensaje de chat al servidor para emitir a todos los clientes! ¡Ya en su archivo client.js debería ver que ya existe un bloque de manejo de código cuando se envía el formulario de mensajes! ( <code>$(&#39;form&#39;).submit(function(){ /*logic*/ });</code> ) <hr> Dentro del código que está manejando el envío del formulario, debe emitir un evento después de definir &#39;messageToSend&#39; pero antes de borrar el cuadro de texto <code>#m</code> . El evento debe llamarse &#39;mensaje de chat&#39; y los datos solo deben ser &#39;messageToSend&#39;. <code>socket.emit(&#39;chat message&#39;, messageToSend);</code> Ahora, en su servidor, debe escuchar el zócalo para el evento &quot;mensaje de chat&quot; con los datos que se denominan &quot;mensaje&quot;. Una vez que se recibe el evento, debe emitir el evento &#39;mensaje de chat&#39; a todos los sockets <code>io.emit</code> con los datos como un objeto que contiene &#39;nombre&#39; y &#39;mensaje&#39;. Ahora, nuevamente en su cliente, debe escuchar el &#39;mensaje de chat&#39; del evento y, cuando se reciba, agregue un elemento de la lista a <code>#messages</code> con el nombre de dos puntos y el mensaje. En este punto, el chat debe ser completamente funcional y ¡enviar mensajes a todos los clientes! Envía tu página cuando creas que lo has hecho bien. Si tiene errores, puede revisar el proyecto hasta este punto <a href="https://gist.github.com/JosephLivengood/3e4b7750f6cd42feaa2768458d682136">aquí para el servidor</a> y <a href="https://gist.github.com/JosephLivengood/41ba76348df3013b7870dc64861de744">aquí para el cliente</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El servidor escucha el 'mensaje de chat' y luego lo emite correctamente
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /socket.on.*("|")chat message("|")[^]*io.emit.*("|")chat message("|").*name.*message/gi, "Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: El cliente maneja y muestra correctamente los nuevos datos del evento 'mensaje de chat'
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.on.*("|")chat message("|")[^]*messages.*li/gi, "You should append a list item to #messages on your client within the "chat message" event listener to display the new message"); }, xhr => { throw new Error(xhr.statusText); })'

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
