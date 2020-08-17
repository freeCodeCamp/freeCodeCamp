---
id: 589fc832f9fc0f352b528e78
title: Announce New Users
challengeType: 2
isHidden: false
forumTopicId: 301546
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-socketio">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-socketio/'>GitHub</a>.
Many chat rooms are able to announce when a user connects or disconnects and then display that to all of the connected users in the chat. Seeing as though you already are emitting an event on connect and disconnect, you will just have to modify this event to support such feature. The most logical way of doing so is sending 3 pieces of data with the event: name of the user connected/disconnected, the current user count, and if that name connected or disconnected.
<hr>Change the event name to 'user' and as the data pass an object along containing fields 'name', 'currentUsers', and boolean 'connected' (to be true if connection, or false for disconnection of the user sent). Be sure to make the change to both points we had the 'user count' event and set the disconnect one to sent false for field 'connected' instead of true like the event emitted on connect. <code>io.emit('user', {name: socket.request.user.name, currentUsers, connected: true});</code>
Now your client will have all the necessary information to correctly display the current user count and announce when a user connects or disconnects! To handle this event on the client side we should listen for 'user' and then update the current user count by using jQuery to change the text of <code>#num-users</code> to '{NUMBER} users online', as well as append a <code>&#60;li&#62;</code> to the unordered list with id 'messages' with '{NAME} has {joined/left} the chat.'.
An implementation of this could look like the following:<br>

```js
socket.on('user', function(data){
  $('#num-users').text(data.currentUsers+' users online');
  var message = data.name;
  if(data.connected) {
    message += ' has joined the chat.';
  } else {
    message += ' has left the chat.';
  }
  $('#messages').append($('<li>').html('<b>'+ message +'<\/b>'));
});
```

Submit your page when you think you've got it right.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Event 'user' should be emitted with name, currentUsers, and connected.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.emit.*('|")user('|").*name.*currentUsers.*connected/gi, 'You should have an event emitted named user sending name, currentUsers, and connected'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Client should properly handle and display the new data from event 'user'.
    testString: "getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|\")user('|\")[^]*num-users/gi, 'You should change the text of #num-users within on your client within the \"user\" even listener to show the current users connected'); assert.match(data, /socket.on.*('|\")user('|\")[^]*messages.*li/gi, 'You should append a list item to #messages on your client within the \"user\" event listener to announce a user came or went'); }, xhr => { throw new Error(xhr.statusText); })"

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
