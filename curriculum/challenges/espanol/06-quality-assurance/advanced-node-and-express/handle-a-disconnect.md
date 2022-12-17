---
id: 589fc831f9fc0f352b528e76
title: Maneja una desconexión
challengeType: 2
forumTopicId: 301552
dashedName: handle-a-disconnect
---

# --description--

Puedes observar que hasta ahora sólo has aumentado el recuento de usuarios. Manejar la desconexión de un usuario es tan fácil como manejar la conexión inicial, excepto que tienes que escucharlo en cada socket en lugar de en todo el servidor.

Para ello, añade otro oyente (listener) dentro del oyente existente `'connect'` que escuche `'disconnect'` en el socket sin que pasen datos. Puedes probar esta funcionalidad simplemente registrando que un usuario se ha desconectado en la consola.

```js
socket.on('disconnect', () => {
  /*anything you want to do on disconnect*/
});
```

To make sure clients continuously have the updated count of current users, you should decrease `currentUsers` by 1 when the disconnect happens then emit the `'user count'` event with the updated count.

**Nota:** Al igual que `'disconnect'`, todos los demás eventos que un socket puede emitir al servidor deben ser manejados dentro del oyente de conexión donde tenemos definido 'socket'.

Envía tu página cuando creas que lo has hecho bien. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#handle-a-disconnect-8" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

El servidor debe manejar la desconexión del evento de un socket.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /socket.on.*('|")disconnect('|")/s, '');
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
