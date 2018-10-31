---
id: 5895f70cf9fc0f352b528e65
title: Set up Passport
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
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport", "Your project should list "passport" as a dependency"); assert.property(packJson.dependencies, "express-session", "Your project should list "express-session" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")passport("|")/gi, "You should have required passport"); assert.match(data, /require.*("|")express-session("|")/gi, "You should have required express-session"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.initialize/gi, "Your express app should use "passport.initialize()""); assert.match(data, /passport.session/gi, "Your express app should use "passport.session()""); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /secret:( |)process.env.SESSION_SECRET/gi, "Your express app should have express-session set up with your secret as process.env.SESSION_SECRET"); }, xhr => { throw new Error(xhr.statusText); })'

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
