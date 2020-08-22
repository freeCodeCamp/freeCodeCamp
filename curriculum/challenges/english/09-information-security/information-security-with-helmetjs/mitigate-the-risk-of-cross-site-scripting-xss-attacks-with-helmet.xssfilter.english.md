---
id: 587d8247367417b2b2512c39
title: Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()
challengeType: 2
isHidden: false
forumTopicId: 301583
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a>.
Cross-site scripting (XSS) is a frequent type of attack where malicious scripts are injected into vulnerable pages, with the purpose of stealing sensitive data like session cookies, or passwords.
The basic rule to lower the risk of an XSS attack is simple: “Never trust user’s input”. As a developer you should always sanitize all the input coming from the outside. This includes data coming from forms, GET query urls, and even from POST bodies. Sanitizing means that you should find and encode the characters that may be dangerous e.g. <, >.
Modern browsers can help mitigating the risk by adopting better software strategies. Often these are configurable via http headers.
The X-XSS-Protection HTTP header is a basic protection. The browser detects a potential injected script using a heuristic filter. If the header is enabled, the browser changes the script code, neutralizing it.
It still has limited support.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.xssFilter() middleware should be mounted correctly
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'xXssProtection'); assert.property(data.headers, 'x-xss-protection'); }, xhr => { throw new Error(xhr.responseText); })

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
