---
id: 587d8247367417b2b2512c38
title: Mitigate the Risk of Clickjacking with helmet.frameguard()
challengeType: 2
forumTopicId: 301582
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a>.
Your page could be put in a <code>&lt;frame&gt;</code> or <code>&lt;iframe&gt;</code> without your consent. This can result in clickjacking attacks, among other things. Clickjacking is a technique of tricking a user into interacting with a page different from what the user thinks it is. This can be obtained executing your page in a malicious context, by mean of iframing. In that context a hacker can put a hidden layer over your page. Hidden buttons can be used to run bad scripts. This middleware sets the X-Frame-Options header. It restricts who can put your site in a frame. It has three modes: DENY, SAMEORIGIN, and ALLOW-FROM.
We don’t need our app to be framed.
</section>

## Instructions
<section id='instructions'>
Use <code>helmet.frameguard()</code> passing with the configuration object <code>{action: 'deny'}</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.frameguard() middleware should be mounted correctly
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'frameguard', 'helmet.frameguard() middleware is not mounted correctly'); }, xhr => { throw new Error(xhr.responseText); })
  - text: helmet.frameguard() 'action' should be set to 'DENY'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.property(data.headers, 'x-frame-options'); assert.equal(data.headers['x-frame-options'], 'DENY');}, xhr => { throw new Error(xhr.responseText); })

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
