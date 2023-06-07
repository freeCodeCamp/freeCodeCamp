---
id: 589fc831f9fc0f352b528e77
title: Autenticación con Socket.IO
challengeType: 2
forumTopicId: 301548
dashedName: authentication-with-socket-io
---

# --description--

Actualmente, no puedes determinar quién está conectado a tu web socket. Mientras que `req.user` contiene el objeto user, eso es sólo cuando tu usuario interactúa con el servidor web, y con los web sockets no tienes la `req` (petición) y por lo tanto no hay datos del usuario. Una forma de resolver el problema de saber quién está conectado a tu socket web es analizando (parsing) y decodificando la cookie que contiene la sesión del pasaporte y luego deserializándola para obtener el objeto user. Por suerte, ¡hay un paquete en NPM sólo para esto que convierte una tarea antes compleja en algo sencillo!

`passport.socketio@~3.7.0`, `connect-mongo@~3.2.0`, y `cookie-parser@~1.4.5` ya han sido añadidas como dependencias. Requerirlas como `passportSocketIo`, `MongoStore`y `cookieParser` respectivamente. También, necesitamos inicializar un nuevo almacenamiento de memoria, desde `express-session` que previamente requerimos. Debería verse así:

```js
const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });
```

Ahora sólo tenemos que decirle a Socket.IO que lo utilice y establezca las opciones. Asegúrate de que esto se agrega antes del código de socket existente y no en el oyente de conexión existente. Para tu servidor, debe verse así:

```js
io.use(
  passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: 'express.sid',
    secret: process.env.SESSION_SECRET,
    store: store,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail
  })
);
```

Ten en cuenta que configurar la autenticación de Passport para Socket.IO es muy similar a la forma en que configuramos el middleware de `session` para la API. Esto se debe a que deben usar el mismo método de autenticación: obtener el session id de una cookie y validarlo.

Anteriormente, cuando configuramos el middleware de `session`, no establecíamos explícitamente el nombre de la cookie para la sesión (`key`). Esto se debe a que el paquete `session` estaba usando el valor predeterminado. Ahora que hemos añadido otro paquete que necesita acceso al mismo valor desde las cookies, necesitamos establecer explícitamente el valor `key` en ambos objetos de configuración.

Asegúrate de añadir la `key` con el nombre de la cookie al middleware `session` que coincida con la clave Socket.IO. Además, añade la referencia `store` a las opciones, cerca de donde establecemos `saveUninitialized: true`. Esto es necesario para decirle a Socket.IO con qué sesión relacionarse.

<hr />

Ahora, define las funciones callback de `success` y `fail`:

```js
function onAuthorizeSuccess(data, accept) {
  console.log('successful connection to socket.io');

  accept(null, true);
}

function onAuthorizeFail(data, message, error, accept) {
  if (error) throw new Error(message);
  console.log('failed connection to socket.io:', message);
  accept(null, false);
}
```

El objeto user ahora es accesible en su objeto socket como `socket.request.user`. Por ejemplo, ahora puedes añadir lo siguiente:

```js
console.log('user ' + socket.request.user.username + ' connected');
```

¡Se registrará en la consola del servidor quién se ha conectado!

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#authentication-with-socketio-9" target="_blank" rel="noopener noreferrer nofollow">consultar el proyecto realizado hasta este momento</a>.

# --hints--

`passport.socketio` debe ser una dependencia.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport.socketio',
    'Your project should list "passport.socketio" as a dependency'
  );
}
```

`cookie-parser` debe ser una dependencia.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'cookie-parser',
    'Your project should list "cookie-parser" as a dependency'
  );
}
```

passportSocketIo debe ser requerido correctamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require\((['"])passport\.socketio\1\)/gi,
    'You should correctly require and instantiate "passport.socketio"'
  );
}
```

passportSocketIo debe estar configurado correctamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io\.use\(\s*\w+\.authorize\(/,
    'You should register "passport.socketio" as socket.io middleware and provide it correct options'
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
