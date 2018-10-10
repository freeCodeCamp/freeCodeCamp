---
id: 589fc832f9fc0f352b528e78
title: Announce New Users
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
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /io.emit.*("|")user("|").*name.*currentUsers.*connected/gi, "You should have an event emitted named user sending name, currentUsers, and connected"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.on.*("|")user("|")[^]*num-users/gi, "You should change the text of #num-users within on your client within the "user" even listener to show the current users connected"); assert.match(data, /socket.on.*("|")user("|")[^]*messages.*li/gi, "You should append a list item to #messages on your client within the "user" event listener to annouce a user came or went"); }, xhr => { throw new Error(xhr.statusText); })'

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
