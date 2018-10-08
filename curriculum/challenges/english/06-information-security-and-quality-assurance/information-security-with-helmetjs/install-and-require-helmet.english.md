---
id: 587d8247367417b2b2512c36
title: Install and Require Helmet
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a>.
Helmet helps you secure your Express apps by setting various HTTP headers. Install the package, then require it.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"helmet" dependency should be in package.json'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/package.json").then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "helmet"); }, xhr => { throw new Error(xhr.responseText); })'

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
