---
id: 589fc831f9fc0f352b528e75
title: Communicate by Emitting
challengeType: 2
isHidden: false
forumTopicId: 301550
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-socketio">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-socketio/'>GitHub</a>.
<dfn>Emit</dfn> is the most common way of communicating you will use. When you emit something from the server to 'io', you send an event's name and data to all the connected sockets. A good example of this concept would be emitting the current count of connected users each time a new user connects!
<hr>Start by adding a variable to keep track of the users just before where you are currently listening for connections. <code>var currentUsers = 0;</code>
Now when someone connects you should increment the count before emitting the count so you will want to add the incrementer within the connection listener. <code>++currentUsers;</code>
Finally after incrementing the count, you should emit the event(still within the connection listener). The event should be named 'user count' and the data should just be the 'currentUsers'. <code>io.emit('user count', currentUsers);</code>
<hr>Now you can implement a way for your client to listen for this event! Similarly to listening for a connection on the server you will use the <em>on</em> keyword.

```js
socket.on('user count', function(data){
  console.log(data);
});
```

Now try loading up your app and authenticate and you should see in your client console '1' representing the current user count! Try loading more clients up and authenticating to see the number go up.
Submit your page when you think you've got it right.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: currentUsers should be defined.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /currentUsers/gi, 'You should have variable currentUsers defined');}, xhr => { throw new Error(xhr.statusText); })
  - text: Server should emit the current user count at each new connection.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.emit.*('|")user count('|").*currentUsers/gi, 'You should emit "user count" with data currentUsers'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Your client should be listening for 'user count' event.
    testString: getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|")user count('|")/gi, 'Your client should be connection to server with the connection defined as socket'); }, xhr => { throw new Error(xhr.statusText); })

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
