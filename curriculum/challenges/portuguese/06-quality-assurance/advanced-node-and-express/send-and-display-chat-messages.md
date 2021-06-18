---
id: 589fc832f9fc0f352b528e79
title: Send and Display Chat Messages
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

It's time you start allowing clients to send a chat message to the server to emit to all the clients! In your `client.js` file, you should see there is already a block of code handling when the message form is submitted.

```js
$('form').submit(function() {
  /*logic*/
});
```

Within the form submit code, you should emit an event after you define `messageToSend` but before you clear the text box `#m`. The event should be named `'chat message'` and the data should just be `messageToSend`.

```js
socket.emit('chat message', messageToSend);
```

Now, on your server, you should be listening to the socket for the event `'chat message'` with the data being named `message`. Once the event is received, it should emit the event `'chat message'` to all sockets `io.emit` with the data being an object containing `name` and `message`.

In `client.js`, you should now listen for event `'chat message'` and, when received, append a list item to `#messages` with the name, a colon, and the message!

At this point, the chat should be fully functional and sending messages across all clients!

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point [here](https://gist.github.com/camperbot/d7af9864375207e254f73262976d2016).

# --hints--

Server should listen for `'chat message'` and then emit it properly.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*name.*message/gis,
        'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Client should properly handle and display the new data from event `'chat message'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*messages.*li/gis,
        'You should append a list item to #messages on your client within the "chat message" event listener to display the new message'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
