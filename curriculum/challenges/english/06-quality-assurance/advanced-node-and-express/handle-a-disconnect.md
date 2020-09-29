---
id: 589fc831f9fc0f352b528e76
title: Handle a Disconnect
challengeType: 2
forumTopicId: 301552
---

## Description

<section id='description'>

You may notice that up to now you have only been increasing the user count. Handling a user disconnecting is just as easy as handling the initial connect, except you have to listen for it on each socket instead of on the whole server.

To do this, add another listener inside the existing <code>'connect'</code> listener that listens for <code>'disconnect'</code> on the socket with no data passed through. You can test this functionality by just logging that a user has disconnected to the console.

```js
socket.on('disconnect', () => {
  /*anything you want to do on disconnect*/
});
```

To make sure clients continuously have the updated count of current users, you should decrease the currentUsers by 1 when the disconnect happens then emit the 'user count' event with the updated count!

<strong>Note:</strong> Just like <code>'disconnect'</code>, all other events that a socket can emit to the server should be handled within the connecting listener where we have 'socket' defined.

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/camperbot/ab1007b76069884fb45b215d3c4496fa' target='_blank'>here</a>.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: Server should handle the event disconnect from a socket.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /socket.on.*('|")disconnect('|")/gi, ''); }, xhr => { throw new Error(xhr.statusText); })
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
