---
id: 589fc832f9fc0f352b528e78
title: Announce New Users
challengeType: 2
forumTopicId: 301546
---

## Description

<section id='description'>

Many chat rooms are able to announce when a user connects or disconnects and then display that to all of the connected users in the chat. Seeing as though you already are emitting an event on connect and disconnect, you will just have to modify this event to support such a feature. The most logical way of doing so is sending 3 pieces of data with the event: the name of the user who connected/disconnected, the current user count, and if that name connected or disconnected.

Change the event name to `'user'`, and pass an object along containing the fields 'name', 'currentUsers', and 'connected' (to be `true` in case of connection, or `false` for disconnection of the user sent). Be sure to change both 'user count' events and set the disconnect one to send `false` for the field 'connected' instead of `true` like the event emitted on connect.

```js
io.emit('user', {
  name: socket.request.user.name,
  currentUsers,
  connected: true
});
```

Now your client will have all the necessary information to correctly display the current user count and announce when a user connects or disconnects! To handle this event on the client side we should listen for `'user'`, then update the current user count by using jQuery to change the text of `#num-users` to `'{NUMBER} users online'`, as well as append a `<li>` to the unordered list with id `messages` with `'{NAME} has {joined/left} the chat.'`.

An implementation of this could look like the following:

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.name +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point [here](https://gist.github.com/camperbot/bf95a0f74b756cf0771cd62c087b8286).

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: Event <code>'user'</code> should be emitted with name, currentUsers, and connected.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => { assert.match(data, /io.emit.*('|")user\1.*name.*currentUsers.*connected/gis, 'You should have an event emitted named user sending name, currentUsers, and connected'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Client should properly handle and display the new data from event <code>'user'</code>.
    testString: getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|")user\1[^]*num-users/gi, 'You should change the text of "#num-users" within on your client within the "user" event listener to show the current users connected'); assert.match(data, /socket.on.*('|")user\1[^]*messages.*li/gi, 'You should append a list item to "#messages" on your client within the "user" event listener to announce a user came or went'); }, xhr => { throw new Error(xhr.statusText); })
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
