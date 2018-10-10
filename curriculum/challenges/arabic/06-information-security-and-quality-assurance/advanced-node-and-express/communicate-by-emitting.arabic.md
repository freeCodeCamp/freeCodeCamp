---
id: 589fc831f9fc0f352b528e75
title: Communicate by Emitting
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
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js").then(data => {assert.match(data, /currentUsers/gi, "You should have variable currentUsers defined");}, xhr => { throw new Error(xhr.statusText); })'
  - text: يرسل الخادم عدد المستخدمين الحاليين عند كل اتصال جديد
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /io.emit.*("|")user count("|").*currentUsers/gi, "You should emit "user count" with data currentUsers"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.on.*("|")user count("|")/gi, "Your client should be connection to server with the connection defined as socket"); }, xhr => { throw new Error(xhr.statusText); })'

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
