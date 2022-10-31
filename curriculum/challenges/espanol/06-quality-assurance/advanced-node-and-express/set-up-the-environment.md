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

Lo primero que hay que manejar es escuchar por una nueva conexión del cliente. La palabra clave <dfn>on</dfn> hace eso: escucha un evento específico. Requiere dos argumentos: un string con el nombre del evento emitido, y una función a través de la cual son pasados los datos. En el caso de nuestro detector de conexión, usamos *socket* para definir los datos en el segundo argumento. Un socket es un cliente individual que está conectado.

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

El comentario suprime el error que normalmente verías, ya que 'io' no está definido en el archivo. Ya hemos añadido un CDN confiable a la biblioteca Socket.IO en la página de chat.pug.

Ahora intenta cargar tu aplicación asimismo autenticarte y deberías ver en la consola de tu servidor 'Un usuario se ha conectado'!

**Nota:**`io()` funciona sólo cuando se conecta a un socket alojado en la misma url/servidor. Para conectar a un socket externo alojado en otro lugar, debes usar `io.connect('URL');`.

Envía tu página cuando creas que está correcto. Si te estás encontrando errores, puedes <a href="https://gist.github.com/camperbot/aae41cf59debc1a4755c9a00ee3859d1" target="_blank" rel="noopener noreferrer nofollow">mirar el proyecto completado hasta este punto</a>.

# --hints--

`socket.io` debe ser una dependencia.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'socket.io',
        'Your project should list "socket.io" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Debes requerir correctamente e instanciar `http` como `http`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /http.*=.*require.*('|")http\1/gi,
        'Your project should list "http" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Debes requerir correctamente e instanciar `socket.io` como `io`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.*=.*require.*('|")socket.io\1.*http/gi,
        'You should correctly require and instantiate socket.io as io.'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Socket.IO debe estar escuchando las conexiones.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.on.*('|")connection\1.*socket/gi,
        'io should listen for "connection" and socket should be the 2nd arguments variable'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Tu cliente debe conectarse a tu servidor.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.*=.*io/gi,
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
