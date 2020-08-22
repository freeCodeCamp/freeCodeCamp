---
id: bd7158d8c443edefaeb5bdff
title: Request Header Parser Microservice
challengeType: 4
isHidden: false
isRequired: true
forumTopicId: 301507
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://head-parser--freecodecamp.repl.co/' target='_blank'>https://head-parser--freecodecamp.repl.co/</a>.
Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it URL (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Repl.it using <a href='https://repl.it/github/freeCodeCamp/boilerplate-project-headerparser' target='_blank'>this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-headerparser/'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Your IP address should be returned in the <code>ipaddress</code> key.'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/whoami'').then(data => assert(data.ipaddress && data.ipaddress.length > 0), xhr => { throw new Error(xhr.responseText)})'
  - text: 'Your preferred language should be returned in the <code>language</code> key.'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/whoami'').then(data => assert(data.language && data.language.length > 0), xhr => { throw new Error(xhr.responseText)})'
  - text: 'Your software should be returned in the <code>software</code> key.'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/whoami'').then(data => assert(data.software && data.software.length > 0), xhr => { throw new Error(xhr.responseText)})'
    
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
