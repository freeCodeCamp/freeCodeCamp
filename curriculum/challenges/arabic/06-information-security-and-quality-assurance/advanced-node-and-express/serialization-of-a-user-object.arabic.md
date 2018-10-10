---
id: 5895f70cf9fc0f352b528e66
title: Serialization of a User Object
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
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.serializeUser/gi, "You should have created your passport.serializeUser function"); assert.match(data, /null, user._id/gi, "There should be a callback in your serializeUser with (null, user._id)"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.deserializeUser/gi, "You should have created your passport.deserializeUser function"); assert.match(data, /null,( |)null/gi, "There should be a callback in your deserializeUser with (null, null) for now"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "mongodb", "Your project should list "mongodb" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")mongodb("|")/gi, "You should have required mongodb"); assert.match(data, /new ObjectID.*id/gi, "Even though the block is commented out, you should use new ObjectID(id) for when we add the database"); }, xhr => { throw new Error(xhr.statusText); })'

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
