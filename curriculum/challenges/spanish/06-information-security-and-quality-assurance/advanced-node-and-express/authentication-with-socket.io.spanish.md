---
id: 589fc831f9fc0f352b528e77
title: Authentication with Socket.IO
challengeType: 2
videoUrl: ''
localeTitle: Autenticación con Socket.IO
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . Actualmente, no puede determinar quién está conectado a su socket web. Mientras que &#39;req.user&#39; almacena el objeto de usuario, eso es solo cuando su usuario interactúa con el servidor web y con los sockets web, no tiene ninguna solicitud (solicitud) y, por lo tanto, no tiene datos de usuario. Una forma de resolver el problema de saber quién está conectado a su socket web es analizando y decodificando la cookie que contiene la sesión de pasaporte y luego deserializándola para obtener el objeto de usuario. Afortunadamente, hay un paquete en NPM solo para esto que convierte una tarea compleja en algo simple. <hr> Agregue &#39;passport.socketio&#39; como una dependencia y solicítelo como &#39;passportSocketIo&#39;. Ahora solo tenemos que decirle a Socket.IO que lo use y establezca las opciones. Asegúrese de que esto se agregue antes del código de socket existente y no en el escucha de conexión existente. Para su servidor debe verse como sigue: <pre> io.use (passportSocketIo.authorize ({
  cookieParser: cookieParser,
  clave: &#39;express.sid&#39;,
  secreto: process.env.SESSION_SECRET,
  tienda: sessionStore
})); </pre> Opcionalmente, también puede pasar &quot;éxito&quot; y &quot;fallar&quot; con una función a la que se llamará después de que se complete el proceso de autenticación cuando un cliente intente conectarse. Ahora se puede acceder al objeto de usuario en su objeto de socket como <code>socket.request.user</code> . Por ejemplo, ahora puede agregar lo siguiente: <code>console.log(&#39;user &#39; + socket.request.user.name + &#39; connected&#39;);</code> y se registrará en la consola del servidor que se ha conectado! Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes revisar el proyecto hasta este punto <a href="https://gist.github.com/JosephLivengood/a9e69ff91337500d5171e29324e1ff35">aquí</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: passportSocketIo es una dependencia
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport.socketio", "Your project should list "passport.socketio" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: passportSocketIo se requiere correctamente
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js").then(data => { assert.match(data, /require\(([""])passport\.socketio\1\)/gi, "You should correctly require and instantiate "passport.socketio"");}, xhr => { throw new Error(xhr.statusText); })'
  - text: passportSocketIo está correctamente configurado
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /io\.use\(.+\.authorize\(/gi, "You should register "passport.socketio" as socket.io middleware and provide it correct options"); }, xhr => { throw new Error(xhr.statusText); })'

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
