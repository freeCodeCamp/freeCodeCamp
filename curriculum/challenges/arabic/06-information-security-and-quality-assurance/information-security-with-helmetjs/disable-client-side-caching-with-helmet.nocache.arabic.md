---
id: 587d8249367417b2b2512c3e
title: Disable Client-Side Caching with helmet.noCache()
challengeType: 2
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
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
