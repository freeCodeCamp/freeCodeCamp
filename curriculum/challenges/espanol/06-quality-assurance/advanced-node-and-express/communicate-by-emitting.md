---
id: 589fc831f9fc0f352b528e75
title: Comunicarse por emisión
challengeType: 2
forumTopicId: 301550
dashedName: communicate-by-emitting
---

# --description--

<dfn>Emit</dfn> es la forma más común de comunicación que utilizarás. Cuando se emite algo desde el servidor a 'io', se envía el nombre y los datos de un evento a todos los sockets conectados. ¡Un buen ejemplo de este concepto sería emitir el recuento actual de usuarios conectados cada vez que se conecte un nuevo usuario!

Comienza añadiendo una variable para llevar la cuenta de los usuarios, justo antes de donde estás escuchando las conexiones.

```js
let currentUsers = 0;
```

Ahora, cuando alguien se conecte, deberás incrementar la cuenta antes de emitirla. Por lo tanto, querrá añadir el incrementador dentro del oyente de la conexión.

```js
++currentUsers;
```

Por último, después de incrementar el recuento, debes emitir el evento (todavía dentro del oyente de la conexión). El evento debe llamarse 'user count', y los datos deben ser simplemente los `currentUsers`.

```js
io.emit('user count', currentUsers);
```

Ahora, ¡puedes implementar una manera para que tu cliente escuche este evento! De forma similar a la escucha de una conexión en el servidor, utilizarás la palabra clave `on`.

```js
socket.on('user count', function(data) {
  console.log(data);
});
```

Ahora, ¡intenta cargar tu aplicación, autentifica, y debes ver en tu consola "1" que representa el recuento de usuarios actual! Trata de cargar más clientes y de autentificar para ver cómo sube el número.

Envía tu página cuando creas que lo has hecho bien. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#communicate-by-emitting-7" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

`currentUsers` should be defined.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /currentUsers/s,
    'You should have variable currentUsers defined'
  );
}
```

El servidor debe emitir el recuento actual de usuarios en cada nueva conexión.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.emit.*('|")user count('|").*currentUsers/s,
    'You should emit "user count" with data currentUsers'
  );
}
```

Your client should be listening for `'user count'` event.

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")user count('|")/s,
    'Your client should be connection to server with the connection defined as socket'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
