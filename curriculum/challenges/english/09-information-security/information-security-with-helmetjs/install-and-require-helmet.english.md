---
id: 587d8247367417b2b2512c36
title: Install and Require Helmet
challengeType: 2
forumTopicId: 301581
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a>.
Helmet helps you secure your Express apps by setting various HTTP headers.
</section>

## Instructions
<section id='instructions'>

Install Helmet version `3.21.3`, then require it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>helmet</code> version <code>3.21.3</code> should be in <code>package.json</code>'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert(packJson.dependencies.helmet === '3.21.3' ); }, xhr => { throw new Error(xhr.responseText); })

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
