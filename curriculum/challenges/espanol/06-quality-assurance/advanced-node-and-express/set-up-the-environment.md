---
id: 589fc830f9fc0f352b528e74
title: Configura el entorno
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

Los siguientes desafíos harán uso del archivo `chat.pug`. Así que, en tu archivo `routes.js`, añade una ruta GET que apunte a `/chat` que hace uso de `ensureAuthenticated`, y procesa `chat.pug`, con `{ user: req.user }` pasado como argumento a la respuesta. Ahora, modifique la ruta `/auth/github/callback` existente para establecerla `req.session.user_id = req.user.id`, y redirigirla a `/chat`.

`socket.io@~2.3.0` ya ha sido añadido como dependencia, así que require/instantiate en tu servidor de la siguiente manera con `http` (viene integrado con Nodejs):

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

Ahora que el servidor *http* está montado en la *aplicación expresa*, necesitas escuchar desde el servidor *http*. Cambia la línea con `app.listen` a `http.listen`.

Lo primero que hay que manejar es escuchar por una nueva conexión del cliente. La palabra clave <dfn>on</dfn> hace eso: escucha un evento específico. Requiere dos argumentos: un string con el nombre del evento emitido, y una función a través de la cual son pasados los datos. In the case of our connection listener, use `socket` to define the data in the second argument. Un socket es un cliente individual que está conectado.

Para escuchar las conexiones a tu servidor, añade lo siguiente dentro de la conexión de tu base de datos:

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

Ahora para que el cliente se conecte, sólo tiene que añadir lo siguiente a su `client.js` que es cargado por la página, después de haberte autenticado:

```js
/*global io*/
let socket = io();
```

El comentario suprime el error que normalmente verías, ya que 'io' no está definido en el archivo. You have already added a reliable CDN to the Socket.IO library on the page in `chat.pug`.

Now try loading up your app and authenticate and you should see in your server console `A user has connected`.

**Nota:**`io()` funciona sólo cuando se conecta a un socket alojado en la misma url/servidor. Para conectar a un socket externo alojado en otro lugar, debes usar `io.connect('URL');`.

Envía tu página cuando creas que está correcto. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-the-environment-6" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

`socket.io` debe ser una dependencia.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'socket.io',
    'Your project should list "socket.io" as a dependency'
  );
}
```

Debes requerir correctamente e instanciar `http` como `http`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /http.*=.*require.*('|")http\1/s,
    'Your project should list "http" as a dependency'
  );
}
```

Debes requerir correctamente e instanciar `socket.io` como `io`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.*=.*require.*('|")socket.io\1.*http/s,
    'You should correctly require and instantiate socket.io as io.'
  );
}
```

Socket.IO debe estar escuchando las conexiones.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.on.*('|")connection\1.*socket/s,
    'io should listen for "connection" and socket should be the 2nd arguments variable'
  );
}
```

Tu cliente debe conectarse a tu servidor.

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.*=.*io/s,
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
