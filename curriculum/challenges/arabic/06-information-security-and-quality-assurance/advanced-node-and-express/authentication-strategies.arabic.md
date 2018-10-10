---
id: 5895f70df9fc0f352b528e68
title: Authentication Strategies
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
    testString: ' getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport-local", "Your project should list "passport-local " as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")passport-local("|")/gi, "You should have required passport-local"); assert.match(data, /new LocalStrategy/gi, "You should have told passport to use a new strategy"); assert.match(data, /findOne/gi, "Your new local strategy should use the findOne query to find a username based on the inputs"); }, xhr => { throw new Error(xhr.statusText); })'

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
