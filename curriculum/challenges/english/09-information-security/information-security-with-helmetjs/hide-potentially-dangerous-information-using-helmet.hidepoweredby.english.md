---
id: 587d8247367417b2b2512c37
title: Hide Potentially Dangerous Information Using helmet.hidePoweredBy()
challengeType: 2
forumTopicId: 301580
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a>.
Hackers can exploit known vulnerabilities in Express/Node if they see that your site is powered by Express. X-Powered-By: Express is sent in every request coming from Express by default. The <code>helmet.hidePoweredBy()</code> middleware will remove the X-Powered-By header. You can also explicitly set the header to something else, to throw people off. e.g. <code>app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.hidePoweredBy() middleware should be mounted correctly
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'hidePoweredBy'); assert.notEqual(data.headers['x-powered-by'], 'Express')}, xhr => { throw new Error(xhr.responseText); })

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
