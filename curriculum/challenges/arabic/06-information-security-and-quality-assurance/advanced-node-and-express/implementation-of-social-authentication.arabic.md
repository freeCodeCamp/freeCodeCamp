---
id: 589a69f5f9fc0f352b528e70
title: Implementation of Social Authentication
challengeType: 2
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: الطريق / المصادقة / جيثب الصحيح
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /("|")\/auth\/github("|")[^]*get.*passport.authenticate.*github/gi, "Route auth/github should only call passport.authenticate with github"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: الطريق / المصادقة / جيثب / رد الاتصال الصحيح
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /("|")\/auth\/github\/callback("|")[^]*get.*passport.authenticate.*github.*failureRedirect:( |)("|")\/("|")/gi, "Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home"); }, xhr => { throw new Error(xhr.statusText); })'

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
