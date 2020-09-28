---
id: 589fc832f9fc0f352b528e78
title: Announce New Users
challengeType: 2
videoUrl: ''
localeTitle: Anunciar nuevos usuarios
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . Muchas salas de chat pueden anunciar cuando un usuario se conecta o desconecta y luego lo anuncian a todos los usuarios conectados en el chat. Al ver que ya se está emitiendo un evento al conectarse y desconectarse, sólo tendrás que modificar este evento para admitir dicha función. La forma más lógica de hacerlo es enviar 3 datos con el evento: nombre del usuario conectado / desconectado, el recuento actual de usuarios, y si ese nombre está conectado o desconectado. 
<hr> Cambia el nombre del evento a &quot;user&quot; y, a medida que los datos pasan un objeto a lo largo de los campos que contienen &quot;name&quot;, &quot;currentUsers&quot; y &quot;connected&quot; en booleano (verdadero si hay conexión, o falso para la desconexión del usuario enviado). Asegúrate de realizar el cambio en los dos puntos en los que tuvimos el evento &#39;user count&#39; y configura la desconexión para que sea falsa para el campo &#39;connected&#39; en lugar de verdadero como el evento emitido en la conexión. <code>io.emit(&#39;user&#39;, {name: socket.request.user.name, currentUsers, connected: true});</code> ¡Ahora tu cliente tendrá toda la información necesaria para mostrar correctamente el recuento actual de usuarios y avisar cuando un usuario se conecte o desconecte! Para manejar este evento en el lado del cliente, debemos escuchar al &#39;user&#39; y luego actualizar el conteo actual de usuarios usando jQuery para cambiar el texto de <code>#num-users</code> a &#39;{NUMBER} usuarios en línea&#39;, así como agregar un <code>&lt;li&gt;</code> a la lista no ordenada con id &#39;messages&#39; con &#39;{NAME} ha {unido / dejado} el chat&#39;. Una implementación de esto podría parecerse a la siguiente:
  <pre>socket.on('user', function(data){
  $('#num-users').text(data.currentUsers+' usuarios en línea');
  var message = data.name;
  if(data.connected) {
    message += ' ha unido al chat.';
  } else {
    message += ' ha salido del chat';
  }
  $('#messages').append($('&#60;li&#62;').html('&#60;b&#62;'+ message +'&#60;\/b&#62;'));
});</pre>
Envía tu página cuando creas que lo has hecho bien. </section>

## Instrucciones
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El evento "usuario" se emite con el nombre, los usuarios actuales y está conectado'
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /io.emit.*("|")user("|").*name.*currentUsers.*connected/gi, "You should have an event emitted named user sending name, currentUsers, and connected"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: El cliente maneja y muestra correctamente los nuevos datos del evento 'usuario'
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.on.*("|")user("|")[^]*num-users/gi, "You should change the text of #num-users within on your client within the "user" even listener to show the current users connected"); assert.match(data, /socket.on.*("|")user("|")[^]*messages.*li/gi, "You should append a list item to #messages on your client within the "user" event listener to annouce a user came or went"); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Semilla del Desafío
<section id='challengeSeed'>

</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
