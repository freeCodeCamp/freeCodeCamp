---
id: 589fc830f9fc0f352b528e74
title: Set up the Environment
challengeType: 2
isHidden: false
forumTopicId: 301566
---

## Description
<section id='description'>
For the following challenges, you will be working with a new starter project that is different from the previous one. You can find the new starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-socketio">Repl.it</a>, or clone it from <a href='https://github.com/freeCodeCamp/boilerplate-socketio/'>GitHub</a>.
Add Socket.IO as a dependency and require/instantiate it in your server defined as 'io' with the http server as an argument. <code>const io = require('socket.io')(http);</code>
The first thing needing to be handled is listening for a new connection from the client. The <dfn>on</dfn> keyword does just that- listen for a specific event. It requires 2 arguments: a string containing the title of the event thats emitted, and a function with which the data is passed though. In the case of our connection listener, we use <em>socket</em> to define the data in the second argument. A socket is an individual client who is connected.
For listening for connections on our server, add the following between the comments in your project:

```js
io.on('connection', socket => {
  console.log('A user has connected');
});
```

Now for the client to connect, you just need to add the following to your client.js which is loaded by the page after you've authenticated:

```js
/*global io*/
var socket = io();
```

The comment suppresses the error you would normally see since 'io' is not defined in the file. We've already added a reliable CDN to the Socket.IO library on the page in chat.pug.
Now try loading up your app and authenticate and you should see in your server console 'A user has connected'!
<strong>Note</strong><br><code>io()</code> works only when connecting to a socket hosted on the same url/server. For connecting to an external socket hosted elsewhere, you would use <code>io.connect('URL');</code>.
Submit your page when you think you've got it right.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Socket.IO should be a dependency.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'socket.io', 'Your project should list "socket.io" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: You should correctly require and instantiate <code>socket.io</code> as <code>io</code>.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /io.*=.*require.*('|")socket.io('|").*http/gi, 'You should correctly require and instantiate socket.io as io.');}, xhr => { throw new Error(xhr.statusText); })
  - text: Socket.IO should be listening for connections.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.on.*('|")connection('|").*socket/gi, 'io should listen for "connection" and socket should be the 2nd arguments variable'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Your client should connect to your server.
    testString: getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.*=.*io/gi, 'Your client should be connection to server with the connection defined as socket'); }, xhr => { throw new Error(xhr.statusText); })

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
