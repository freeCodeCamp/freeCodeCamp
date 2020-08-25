---
id: bd7158d8c443edefaeb5bdef
title: Timestamp Microservice
challengeType: 4
isHidden: false
isRequired: true
forumTopicId: 301508
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://timestamp-microservice.freecodecamp.repl.co/' target='_blank'>https://timestamp-microservice.freecodecamp.repl.co/</a>.
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
  - text: 'It should handle a valid date, and return the correct unix timestamp'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.unix, 1482624000000, ''Should be a valid unix timestamp''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'It should handle a valid date, and return the correct UTC string'
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.utc, ''Sun, 25 Dec 2016 00:00:00 GMT'', ''Should be a valid UTC date string''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'It should handle a valid unix date, and return the correct unix timestamp'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/1482624000000'').then(data => { assert.equal(data.unix, 1482624000000) ;  }, xhr => { throw new Error(xhr.responseText); })'
  - text: It should return the expected error message for an invalid date
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/this-is-not-a-date'').then(data => { assert.equal(data.error.toLowerCase(), ''invalid date'');}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'It should handle an empty date parameter, and return the current time in unix format'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp'').then(data => { var now = Date.now(); assert.approximately(data.unix, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'It should handle an empty date parameter, and return the current time in UTC format'
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
