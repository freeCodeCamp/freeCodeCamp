---
id: 587d8247367417b2b2512c36
title: Install and Require Helmet
challengeType: 2
isHidden: false
forumTopicId: 301581
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a>.
Helmet helps you secure your Express apps by setting various HTTP headers.
</section>

## Instructions
<section id='instructions'>
Install the Helmet package, then require it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"helmet" dependency should be in package.json'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'helmet'); }, xhr => { throw new Error(xhr.responseText); })

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
