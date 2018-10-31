---
id: 589fc830f9fc0f352b528e74
title: Set up the Environment
challengeType: 2
videoUrl: ''
localeTitle: Configurar el medio ambiente
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . Agregue Socket.IO como una dependencia y requiera / cree una instancia en su servidor definido como &#39;io&#39; con el servidor http como argumento. <code>const io = require(&#39;socket.io&#39;)(http);</code> Lo primero que debe manejarse es escuchar una nueva conexión del cliente. La palabra clave <dfn>on</dfn> hace exactamente eso: escucha un evento específico. Requiere 2 argumentos: una cadena que contiene el título del evento emitido y una función con la que se pasan los datos. En el caso de nuestro oyente de conexión, usamos <em>socket</em> para definir los datos en el segundo argumento. Un socket es un cliente individual que está conectado. Para escuchar las conexiones en nuestro servidor, agregue lo siguiente entre los comentarios en su proyecto: <pre> io.on (&#39;conexión&#39;, socket =&gt; {
  console.log (&#39;Un usuario se ha conectado&#39;);
}); </pre> Ahora para que el cliente se conecte, solo necesita agregar lo siguiente a su client.js que se carga en la página después de que se haya autenticado: <pre> / * io global * /
var socket = io (); </pre> El comentario suprime el error que normalmente vería, ya que &#39;io&#39; no está definido en el archivo. Ya hemos agregado un CDN confiable a la biblioteca Socket.IO en la página en chat.pug. ¡Ahora intente cargar su aplicación y autenticar y debería ver en la consola de su servidor &#39;Un usuario se ha conectado&#39;! <strong>Nota</strong> <br> <code>io()</code> funciona solo cuando se conecta a un socket alojado en la misma url / servidor. Para conectarse a un socket externo alojado en otro lugar, usaría <code>io.connect(&#39;URL&#39;);</code> . Envía tu página cuando creas que lo has hecho bien. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Socket.IO es una dependencia
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "socket.io", "Your project should list "socket.io" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Socket.IO ha sido correctamente requerido e instanciado
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js").then(data => {assert.match(data, /io.*=.*require.*("|")socket.io("|").*http/gi, "You should correctly require and instantiate socket.io as io.");}, xhr => { throw new Error(xhr.statusText); })'
  - text: Socket.IO debería estar escuchando las conexiones
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /io.on.*("|")connection("|").*socket/gi, "io should listen for "connection" and socket should be the 2nd arguments variable"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Tu cliente debe conectarse a tu servidor
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.*=.*io/gi, "Your client should be connection to server with the connection defined as socket"); }, xhr => { throw new Error(xhr.statusText); })'

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
