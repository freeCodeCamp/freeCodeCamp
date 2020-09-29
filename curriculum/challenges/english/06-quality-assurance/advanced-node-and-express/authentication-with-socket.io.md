---
id: 589fc831f9fc0f352b528e77
title: Authentication with Socket.IO
challengeType: 2
forumTopicId: 301548
---

## Description

<section id='description'>

Currently, you cannot determine who is connected to your web socket. While <code>req.user</code> contains the user object, that's only when your user interacts with the web server, and with web sockets you have no <code>req</code> (request) and therefore no user data. One way to solve the problem of knowing who is connected to your web socket is by parsing and decoding the cookie that contains the passport session then deserializing it to obtain the user object. Luckily, there is a package on NPM just for this that turns a once complex task into something simple!

Add <code>passport.socketio</code>, <code>connect-mongo</code>, and <code>cookie-parser</code> as dependencies and require them as <code>passportSocketIo</code>, <code>MongoStore</code>, and <code>cookieParser</code> respectively. Also, we need to initialize a new memory store, from <code>express-session</code> which we previously required. It should look like this:

```js
const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });
```

Now we just have to tell Socket.IO to use it and set the options. Be sure this is added before the existing socket code and not in the existing connection listener. For your server, it should look like this:

```js
io.use(
  passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: 'express.sid',
    secret: process.env.SESSION_SECRET,
    store: store,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail
  })
);
```

Be sure to add the <code>key</code> and <code>store</code> to the <code>session</code> middleware mounted on the app. This is necessary to tell _SocketIO_ which session to relate to.

<hr>

Now, define the <code>success</code>, and <code>fail</code> callback functions:

```js
function onAuthorizeSuccess(data, accept) {
  console.log('successful connection to socket.io');

  accept(null, true);
}

function onAuthorizeFail(data, message, error, accept) {
  if (error) throw new Error(message);
  console.log('failed connection to socket.io:', message);
  accept(null, false);
}
```

The user object is now accessible on your socket object as <code>socket.request.user</code>. For example, now you can add the following:

```js
console.log('user ' + socket.request.user.name + ' connected');
```

It will log to the server console who has connected!

Submit your page when you think you've got it right. If you're running into errors, you can check out the project up to this point <a href='https://gist.github.com/camperbot/1414cc9433044e306dd7fd0caa1c6254' target='_blank'>here</a>.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>passport.socketio</code> should be a dependency.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport.socketio', 'Your project should list "passport.socketio" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: <code>cookie-parser</code> should be a dependency.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'cookie-parser', 'Your project should list "cookie-parser" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: passportSocketIo should be properly required.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => { assert.match(data, /require\((['"])passport\.socketio\1\)/gi, 'You should correctly require and instantiate "passport.socketio"');}, xhr => { throw new Error(xhr.statusText); })
  - text: passportSocketIo should be properly setup.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io\.use\(\s*\w+\.authorize\(/, 'You should register "passport.socketio" as socket.io middleware and provide it correct options'); }, xhr => { throw new Error(xhr.statusText); })
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
