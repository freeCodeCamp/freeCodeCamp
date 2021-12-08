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

Para asegurarse de que los clientes tienen continuamente el recuento actualizado de los usuarios actuales, ¡debes disminuir el currentUsers en 1 cuando se produce la desconexión y luego emitir el evento 'user count' con el recuento actualizado!

**Nota:** Al igual que `'disconnect'`, todos los demás eventos que un socket puede emitir al servidor deben ser manejados dentro del oyente de conexión donde tenemos definido 'socket'.

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes revisar el proyecto completado hasta este punto [aquí](https://gist.github.com/camperbot/ab1007b76069884fb45b215d3c4496fa).

# --hints--

El servidor debe manejar la desconexión del evento de un socket.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(data, /socket.on.*('|")disconnect('|")/gi, '');
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Tu cliente debe estar escuchando el evento 'user count'.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")user count('|")/gi,
        'Your client should be connection to server with the connection defined as socket'
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
