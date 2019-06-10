---
id: 589fc831f9fc0f352b528e76
title: Handle a Disconnect
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-socketio/'>GitHub</a>.
You may notice that up to now you have only been increasing the user count. Handling a user disconnecting is just as easy as handling the initial connect except the difference is you have to listen for it on each socket versus on the whole server.
<hr>To do this, add in to your existing connect listener a listener that listens for 'disconnect' on the socket with no data passed through. You can test this functionality by just logging to the console a user has disconnected. <code>socket.on('disconnect', () => { /*anything you want to do on disconnect*/ });</code>
To make sure clients continuously have the updated count of current users, you should decrease the currentUsers by 1 when the disconnect happens then emit the 'user count' event with the updated count!
<strong>Note</strong><br>Just like 'disconnect', all other events that a socket can emit to the server should be handled within the connecting listener where we have 'socket' defined.
Submit your page when you think you've got it right.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Server handles the event disconnect from a socket
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /socket.on.*('|")disconnect('|")/gi, ''); }, xhr => { throw new Error(xhr.statusText); })
  - text: Your client is listening for 'user count' event
    testString: getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|")user count('|")/gi, 'Your client should be connection to server with the connection defined as socket'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
