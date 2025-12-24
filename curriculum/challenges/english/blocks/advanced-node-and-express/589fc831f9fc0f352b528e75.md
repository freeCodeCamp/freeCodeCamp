---
id: 589fc831f9fc0f352b528e75
title: Communicate by Emitting
challengeType: 2
forumTopicId: 301550
dashedName: communicate-by-emitting
---

# --description--

<dfn>Emit</dfn> is the most common way of communicating you will use. When you emit something from the server to 'io', you send an event's name and data to all the connected sockets. A good example of this concept would be emitting the current count of connected users each time a new user connects!

Start by adding a variable to keep track of the users, just before where you are currently listening for connections.

```js
let currentUsers = 0;
```

Now, when someone connects, you should increment the count before emitting the count. So, you will want to add the incrementer within the connection listener.

```js
++currentUsers;
```

Finally, after incrementing the count, you should emit the event (still within the connection listener). The event should be named 'user count', and the data should just be the `currentUsers`.

```js
io.emit('user count', currentUsers);
```

Now, you can implement a way for your client to listen for this event! Similar to listening for a connection on the server, you will use the `on` keyword.

```js
socket.on('user count', function(data) {
  console.log(data);
});
```

Now, try loading up your app, authenticate, and you should see in your client console '1' representing the current user count! Try loading more clients up, and authenticating to see the number go up.

Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#communicate-by-emitting-7" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

`currentUsers` should be defined.

```js
  const url = new URL("/_api/server.js", code);
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /currentUsers/s,
    'You should have variable currentUsers defined'
  );
```

Server should emit the current user count at each new connection.

```js
  const url = new URL("/_api/server.js", code);
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.emit.*('|")user count('|").*currentUsers/s,
    'You should emit "user count" with data currentUsers'
  );
```

Your client should be listening for `'user count'` event.

```js
  const url = new URL("/public/client.js", code);
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")user count('|")/s,
    'Your client should be connection to server with the connection defined as socket'
  );
```

