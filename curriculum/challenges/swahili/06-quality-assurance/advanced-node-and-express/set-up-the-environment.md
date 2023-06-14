---
id: 589fc830f9fc0f352b528e74
title: Set up the Environment
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

The following challenges will make use of the `chat.pug` file. So, in your `routes.js` file, add a GET route pointing to `/chat` which makes use of `ensureAuthenticated`, and renders `chat.pug`, with `{ user: req.user }` passed as an argument to the response. Now, alter your existing `/auth/github/callback` route to set the `req.session.user_id = req.user.id`, and redirect to `/chat`.

`socket.io@~2.3.0` has already been added as a dependency, so require/instantiate it in your server as follows with `http` (comes built-in with Nodejs):

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

Now that the *http* server is mounted on the *express app*, you need to listen from the *http* server. Change the line with `app.listen` to `http.listen`.

The first thing needing to be handled is listening for a new connection from the client. The <dfn>on</dfn> keyword does just that- listen for a specific event. It requires 2 arguments: a string containing the title of the event that's emitted, and a function with which the data is passed through. In the case of our connection listener, use `socket` to define the data in the second argument. A socket is an individual client who is connected.

To listen for connections to your server, add the following within your database connection:

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

Now for the client to connect, you just need to add the following to your `client.js` which is loaded by the page after you've authenticated:

```js
/*global io*/
let socket = io();
```

The comment suppresses the error you would normally see since 'io' is not defined in the file. You have already added a reliable CDN to the Socket.IO library on the page in `chat.pug`.

Now try loading up your app and authenticate and you should see in your server console `A user has connected`.

**Note:**`io()` works only when connecting to a socket hosted on the same url/server. For connecting to an external socket hosted elsewhere, you would use `io.connect('URL');`.

Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-the-environment-6" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

`socket.io` should be a dependency.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'socket.io',
    'Your project should list "socket.io" as a dependency'
  );
}
```

You should correctly require and instantiate `http` as `http`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /http.*=.*require.*('|")http\1/s,
    'Your project should list "http" as a dependency'
  );
}
```

You should correctly require and instantiate `socket.io` as `io`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.*=.*require.*('|")socket.io\1.*http/s,
    'You should correctly require and instantiate socket.io as io.'
  );
}
```

Socket.IO should be listening for connections.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.on.*('|")connection\1.*socket/s,
    'io should listen for "connection" and socket should be the 2nd arguments variable'
  );
}
```

Your client should connect to your server.

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.*=.*io/s,
    'Your client should be connection to server with the connection defined as socket'
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
