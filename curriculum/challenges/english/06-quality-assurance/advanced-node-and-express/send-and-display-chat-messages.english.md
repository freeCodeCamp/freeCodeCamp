---
id: 589fc832f9fc0f352b528e79
title: Send and Display Chat Messages
challengeType: 2
isHidden: false
forumTopicId: 301562
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-socketio">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-socketio/'>GitHub</a>.
It's time you start allowing clients to send a chat message to the server to emit to all the clients! Already in your client.js file you should see there is already a block of code handling when the message form is submitted. (<code>$('form').submit(function(){ /*logic*/ });</code>)
<hr>Within the form submit code, you should emit an event after you define 'messageToSend' but before you clear the text box <code>#m</code>. The event should be named 'chat message' and the data should just be 'messageToSend'. <code>socket.emit('chat message', messageToSend);</code>
Now on your server you should be listening to the socket for the event 'chat message' with the data being named 'message'. Once the event is received it should then emit the event 'chat message' to all sockets <code>io.emit</code> with the data being an object containing 'name' and 'message'.
On your client now again, you should now listen for event 'chat message' and when received, append a list item to <code>#messages</code> with the name a colon and the message!
At this point the chat should be fully functional and sending messages across all clients! Submit your page when you think you've got it right. If you're running into errors, you can check out the project up to this point <a href='https://gist.github.com/JosephLivengood/3e4b7750f6cd42feaa2768458d682136'>here for the server</a> and <a href='https://gist.github.com/JosephLivengood/41ba76348df3013b7870dc64861de744'>here for the client</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Server should listen for 'chat message' and then emit it properly.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*name.*message/gi, 'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Client should properly handle and display the new data from event 'chat message'.
    testString: "getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|\")chat message('|\")[^]*messages.*li/gi, 'You should append a list item to #messages on your client within the \"chat message\" event listener to display the new message'); }, xhr => { throw new Error(xhr.statusText); })"

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
