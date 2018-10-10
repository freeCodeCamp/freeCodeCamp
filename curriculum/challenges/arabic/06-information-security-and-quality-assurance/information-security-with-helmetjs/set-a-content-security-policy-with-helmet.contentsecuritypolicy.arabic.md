---
id: 587d8249367417b2b2512c3f
title: Set a Content Security Policy with helmet.contentSecurityPolicy()
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "csp"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { var cspHeader = Object.keys(data.headers).filter(function(k){ return k === "content-security-policy" || k === "x-webkit-csp" || k === "x-content-security-policy" })[0]; assert.equal(data.headers[cspHeader], "default-src "self"; script-src "self" trusted-cdn.com"); }, xhr => { throw new Error(xhr.responseText); })'

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
