---
id: 589fc832f9fc0f352b528e79
title: Envía y muestra mensajes de chat
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

¡Es hora de que empieces a permitir que los clientes envíen un mensaje de chat al servidor para emitir a todos los clientes! En tu archivo `client.js`, debes ver que ya hay un bloque de gestión de código cuando se envía el formulario de mensaje.

```js
$('form').submit(function() {
  /*logic*/
});
```

Dentro del código de envío del formulario, debes emitir un evento después de definir `messageToSend` pero antes de borrar el cuadro de texto `#m`. El evento debe llamarse `'chat message'` y los datos deben ser `messageToSend`.

```js
socket.emit('chat message', messageToSend);
```

Ahora, en tu servidor, debes estar escuchando el socket para el evento `'chat message'` con los datos que se llaman `message`. Una vez que el evento sea recibido, debe emitir el evento `'chat message'` a todos los sockets `io.emit` siendo los datos un objeto que contiene `name` y `message`.

En `client.js`, ahora debes escuchar el evento `'chat message'` y, una vez recibido, ¡Añade un elemento de lista a `#messages` con el nombre, los dos y el mensaje!

En este punto, ¡el chat debe ser totalmente funcional y enviar mensajes a todos los clientes!

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes consultar el <a href="https://gist.github.com/camperbot/d7af9864375207e254f73262976d2016" target="_blank" rel="noopener noreferrer nofollow">proyecto completado hasta este momento</a>.

# --hints--

El servidor debe escuchar `'chat message'` y luego emitirlo correctamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*name.*message/gis,
        'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

El cliente debe gestionar y mostrar correctamente los nuevos datos del evento `'chat message'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*messages.*li/gis,
        'You should append a list item to #messages on your client within the "chat message" event listener to display the new message'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
