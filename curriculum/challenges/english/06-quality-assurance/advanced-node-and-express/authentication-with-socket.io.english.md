---
id: 589fc831f9fc0f352b528e77
title: Authentication with Socket.IO
challengeType: 2
isHidden: false
forumTopicId: 301548
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-socketio">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-socketio/'>GitHub</a>.
Currently, you cannot determine who is connected to your web socket. While 'req.user' contains the user object, that's only when your user interacts with the web server and with web sockets you have no req (request) and therefore no user data. One way to solve the problem of knowing who is connected to your web socket is by parsing and decoding the cookie that contains the passport session then deserializing it to obtain the user object. Luckily, there is a package on NPM just for this that turns a once complex task into something simple!
<hr>Add 'passport.socketio' as a dependency and require it as 'passportSocketIo'.
Now we just have to tell Socket.IO to use it and set the options. Be sure this is added before the existing socket code and not in the existing connection listener. For your server it should look as follows:

```js
io.use(passportSocketIo.authorize({
  cookieParser: cookieParser,
  key:          'express.sid',
  secret:       process.env.SESSION_SECRET,
  store:        sessionStore
}));
```

You can also optionally pass 'success' and 'fail' with a function that will be called after the authentication process completes when a client tries to connect.
The user object is now accessible on your socket object as <code>socket.request.user</code>. For example, now you can add the following: <code>console.log('user ' + socket.request.user.name + ' connected');</code> and it will log to the server console who has connected!
Submit your page when you think you've got it right. If you're running into errors, you can check out the project up to this point <a href='https://gist.github.com/JosephLivengood/a9e69ff91337500d5171e29324e1ff35'>here</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: passportSocketIo should be a dependency.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport.socketio', 'Your project should list "passport.socketio" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
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
