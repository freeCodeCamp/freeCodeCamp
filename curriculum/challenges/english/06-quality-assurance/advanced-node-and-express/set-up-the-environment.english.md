---
id: 589fc830f9fc0f352b528e74
title: Set up the Environment
challengeType: 2
forumTopicId: 301566
---

## Description

<section id='description'>

The following challenges will make use of the <code>chat.pug</code> file. So, in your <code>routes.js</code> file, add a GET route pointing to <code>/chat</code> which makes use of <code>ensureAuthenticated</code>, and renders <code>chat.pug</code>, with <code>{ user: req.user }</code> passed as an argument to the response. Now, alter your existing <code>/auth/github/callback</code> route to set the <code>req.session.user_id = req.user.id</code>, and redirect to <code>/chat</code>.

Add <code>html</code> and <code>socket.io</code> as a dependency and require/instantiate them in your server defined as follows:

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

Now that the _http_ server is mounted on the _express app_, you need to listen from the _http_ server. Change the line with <code>app.listen</code> to <code>http.listen</code>.

The first thing needing to be handled is listening for a new connection from the client. The <dfn>on</dfn> keyword does just that- listen for a specific event. It requires 2 arguments: a string containing the title of the event thats emitted, and a function with which the data is passed though. In the case of our connection listener, we use <em>socket</em> to define the data in the second argument. A socket is an individual client who is connected.

To listen for connections to your server, add the following within your database connection:

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

Now for the client to connect, you just need to add the following to your <code>client.js</code> which is loaded by the page after you've authenticated:

```js
/*global io*/
let socket = io();
```

The comment suppresses the error you would normally see since 'io' is not defined in the file. We've already added a reliable CDN to the Socket.IO library on the page in chat.pug.

Now try loading up your app and authenticate and you should see in your server console 'A user has connected'!

<strong>Note:</strong><code>io()</code> works only when connecting to a socket hosted on the same url/server. For connecting to an external socket hosted elsewhere, you would use <code>io.connect('URL');</code>.

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/camperbot/aae41cf59debc1a4755c9a00ee3859d1' target='_blank'>here</a>.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>socket.io</code> should be a dependency.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'socket.io', 'Your project should list "socket.io" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: You should correctly require and instantiate <code>http</code> as <code>http</code>.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /http.*=.*require.*('|")http\1/gi, 'Your project should list "html" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: You should correctly require and instantiate <code>socket.io</code> as <code>io</code>.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /io.*=.*require.*('|")socket.io\1.*http/gi, 'You should correctly require and instantiate socket.io as io.');}, xhr => { throw new Error(xhr.statusText); })
  - text: Socket.IO should be listening for connections.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.on.*('|")connection\1.*socket/gi, 'io should listen for "connection" and socket should be the 2nd arguments variable'); }, xhr => { throw new Error(xhr.statusText); })
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
