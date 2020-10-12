---
id: bd7158d8c443edefaeb5bdef
title: Timestamp Microservice
challengeType: 4
forumTopicId: 301508
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://timestamp-microservice.freecodecamp.rocks/' target='_blank'>https://timestamp-microservice.freecodecamp.rocks/</a>.
Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it URL (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Repl.it using <a href='https://repl.it/github/freeCodeCamp/boilerplate-project-timestamp' target='_blank'>this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-timestamp/'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
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
  - text: 'A request to `/api/timestamp/<valid_date>` should return a JSON object with a `unix` key that is a Unix timestamp of the input date'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.unix, 1482624000000, ''Should be a valid unix timestamp''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'A request to `/api/timestamp/<valid_date>` should return a JSON object with a `utc` key that is a string of the input date in the format: `Thu, 01 Jan 1970 00:00:00 GMT`'
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.utc, ''Sun, 25 Dec 2016 00:00:00 GMT'', ''Should be a valid UTC date string''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Your project should handle a valid Unix date, and return the correct Unix timestamp'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/1482624000000'').then(data => { assert.equal(data.unix, 1482624000000) ;  }, xhr => { throw new Error(xhr.responseText); })'
  - text: "Your project should return the JSON object, `{ error: 'Invalid Date' }`, if an invalid date is input"
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
