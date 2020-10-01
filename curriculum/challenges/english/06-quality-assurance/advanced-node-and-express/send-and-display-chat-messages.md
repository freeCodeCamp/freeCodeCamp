---
id: 589fc832f9fc0f352b528e79
title: Send and Display Chat Messages
challengeType: 2
forumTopicId: 301562
---

## Description

<section id='description'>

It's time you start allowing clients to send a chat message to the server to emit to all the clients! In your <code>client.js</code> file, you should see there is already a block of code handling when the message form is submitted.

```js
$('form').submit(function() {
  /*logic*/
});
```

Within the form submit code, you should emit an event after you define <code>messageToSend</code> but before you clear the text box <code>#m</code>. The event should be named <code>'chat message'</code> and the data should just be <code>messageToSend</code>.

```js
socket.emit('chat message', messageToSend);
```

Now, on your server, you should be listening to the socket for the event <code>'chat message'</code> with the data being named <code>message</code>. Once the event is received, it should emit the event <code>'chat message'</code> to all sockets <code>io.emit</code> with the data being an object containing <code>name</code> and <code>message</code>.

In <code>client.js</code>, you should now listen for event <code>'chat message'</code> and, when received, append a list item to <code>#messages</code> with the name, a colon, and the message!

At this point, the chat should be fully functional and sending messages across all clients!

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/camperbot/d7af9864375207e254f73262976d2016' target='_blank'>here</a>.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: Server should listen for <code>'chat message'</code> and then emit it properly.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*name.*message/gis, 'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Client should properly handle and display the new data from event <code>'chat message'</code>.
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/public/client.js'') .then(data => { assert.match(data, /socket.on.*(''|")chat message(''|")[^]*messages.*li/gis, ''You should append a list item to #messages on your client within the "chat message" event listener to display the new message''); }, xhr => { throw new Error(xhr.statusText); })'
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
