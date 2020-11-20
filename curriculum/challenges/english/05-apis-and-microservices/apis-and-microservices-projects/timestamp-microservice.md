---
id: bd7158d8c443edefaeb5bdef
title: Timestamp Microservice
challengeType: 4
forumTopicId: 301508
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://timestamp-microservice.freecodecamp.rocks/' target='_blank'>https://timestamp-microservice.freecodecamp.rocks/</a>. Working on this project will involve you writing your code using one of the following methods:

- Clone <a href='https://github.com/freeCodeCamp/boilerplate-project-timestamp/'>this GitHub repo</a> and complete your project locally.
- Use <a href='https://repl.it/github/freeCodeCamp/boilerplate-project-timestamp' target='_blank'>our repl.it starter project</a> to complete your project.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your projects source code in the `GitHub Link` field.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should provide your own project, not the example URL.
    testString: |
      getUserInput => {
        assert(!/.*\/timestamp-microservice\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: 'A request to `/api/timestamp/:date?` with a valid date should return a JSON object with a `unix` key that is a Unix timestamp of the input date in milliseconds'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.unix, 1482624000000, ''Should be a valid unix timestamp''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'A request to `/api/timestamp/:date?` with a valid date should return a JSON object with a `utc` key that is a string of the input date in the format: `Thu, 01 Jan 1970 00:00:00 GMT`'
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.utc, ''Sun, 25 Dec 2016 00:00:00 GMT'', ''Should be a valid UTC date string''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'A request to `/api/timestamp/1451001600000` should return `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }` '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/1451001600000'').then(data => { assert(data.unix === 1451001600000 && data.utc === "Fri, 25 Dec 2015 00:00:00 GMT"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Your project can handle dates that can be successfully parsed by `new Date(date_string)`'
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/api/timestamp/05 October 2011'').then(data => { assert(data.unix === 1317772800000 && data.utc === "Wed, 05 Oct 2011 00:00:00 GMT" ) }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'If the input date string is invalid, the api returns an object having the structure `{ error : "Invalid Date" }`'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/this-is-not-a-date'').then(data => { assert.equal(data.error.toLowerCase(), ''invalid date'');}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'An empty date parameter should return the current time in a JSON object with a `unix` key'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp'').then(data => { var now = Date.now(); assert.approximately(data.unix, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'An empty date parameter should return the current time in a JSON object with a `utc` key'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp'').then(data => { var now = Date.now(); var serverTime = (new Date(data.utc)).getTime(); assert.approximately(serverTime, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })'

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
