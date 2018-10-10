---
id: 589fc832f9fc0f352b528e79
title: Send and Display Chat Messages
challengeType: 2
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /socket.on.*("|")chat message("|")[^]*io.emit.*("|")chat message("|").*name.*message/gi, "Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.on.*("|")chat message("|")[^]*messages.*li/gi, "You should append a list item to #messages on your client within the "chat message" event listener to display the new message"); }, xhr => { throw new Error(xhr.statusText); })'

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
