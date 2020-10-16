---
id: bd7158d8c443edefaeb5bdff
title: Request Header Parser Microservice
challengeType: 4
forumTopicId: 301507
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://request-header-parser-microservice.freecodecamp.rocks/' target='_blank'>https://request-header-parser-microservice.freecodecamp.rocks/</a>. Working on this project will involve you writing your code using one of the following methods:

- Clone <a href='https://github.com/freeCodeCamp/boilerplate-project-headerparser/'>this GitHub repo</a> and complete your project locally.
- Use <a href='https://repl.it/github/freeCodeCamp/boilerplate-project-headerparser' target='_blank'>our repl.it starter project</a> to complete your project.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your project's source code in the `GitHub Link` field.
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
        assert(!/.*\/request-header-parser-microservice\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: 'A request to `/api/whoami` should return a JSON object with your IP address in the <code>ipaddress</code> key.'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/whoami'').then(data => assert(data.ipaddress && data.ipaddress.length > 0), xhr => { throw new Error(xhr.responseText)})'
  - text: 'A request to `/api/whoami` should return a JSON object with your preferred language in the <code>language</code> key.'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/whoami'').then(data => assert(data.language && data.language.length > 0), xhr => { throw new Error(xhr.responseText)})'
  - text: 'A request to `/api/whoami` should return a JSON object with your software in the <code>software</code> key.'
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
