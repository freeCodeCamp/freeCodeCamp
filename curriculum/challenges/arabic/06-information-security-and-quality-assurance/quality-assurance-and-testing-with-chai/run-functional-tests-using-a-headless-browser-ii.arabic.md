---
id: 587d8250367417b2b2512c5d
title: Run Functional Tests using a Headless Browser II
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
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[0].method, "browser.success"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[1].method, "browser.text"); assert.equal(data.assertions[1].args[0], "\"span#name\""); assert.equal(data.assertions[1].args[1], "\"Amerigo\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[2].method, "browser.text"); assert.equal(data.assertions[2].args[0], "\"span#surname\""); assert.equal(data.assertions[2].args[1], "\"Vespucci\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[3].method, "browser.element"); assert.equal(data.assertions[3].args[0], "\"span#dates\""); assert.equal(data.assertions[3].args[1], 1);}, xhr => { throw new Error(xhr.responseText); })'

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
