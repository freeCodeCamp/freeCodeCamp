---
id: 587d8248367417b2b2512c3c
title: Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
challengeType: 2
forumTopicId: 301573
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a>.
HTTP Strict Transport Security (HSTS) is a web security policy which helps to protect websites against protocol downgrade attacks and cookie hijacking. If your website can be accessed via HTTPS you can ask user’s browsers to avoid using insecure HTTP. By setting the header Strict-Transport-Security, you tell the browsers to use HTTPS for the future requests in a specified amount of time. This will work for the requests coming after the initial request.
</section>

## Instructions
<section id='instructions'>
Configure <code>helmet.hsts()</code> to use HTTPS for the next 90 days. Pass the config object <code>{maxAge: timeInSeconds, force: true}</code>. Repl.it already has hsts enabled. To override its settings you need to set the field "force" to true in the config object. We will intercept and restore the Repl.it header, after inspecting it for testing.
Note: Configuring HTTPS on a custom website requires the acquisition of a domain, and a SSL/TSL Certificate.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.hsts() middleware should be mounted correctly
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'hsts'); assert.property(data.headers, 'strict-transport-security'); }, xhr => { throw new Error(xhr.responseText); })
  - text: maxAge should be equal to 7776000 s (90 days)
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.match(data.headers['strict-transport-security'], /^max-age=7776000;?/); }, xhr => { throw new Error(xhr.responseText); })

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
