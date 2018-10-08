---
id: 587d8249367417b2b2512c3e
title: Disable Client-Side Caching with helmet.noCache()
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a>.
If you are releasing an update for your website, and you want the users to always download the newer version, you can (try to) disable caching on client’s browser. It can be useful in development too. Caching has performance benefits, which you will lose, so only use this option when there is a real need.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.noCache() middleware should be mounted correctly
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "nocache"); assert.equal(data.headers["cache-control"], "no-store, no-cache, must-revalidate, proxy-revalidate"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
