---
id: 589fc831f9fc0f352b528e77
title: Authentication with Socket.IO
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
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport.socketio", "Your project should list "passport.socketio" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js").then(data => { assert.match(data, /require\(([""])passport\.socketio\1\)/gi, "You should correctly require and instantiate "passport.socketio"");}, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /io\.use\(.+\.authorize\(/gi, "You should register "passport.socketio" as socket.io middleware and provide it correct options"); }, xhr => { throw new Error(xhr.statusText); })'

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
