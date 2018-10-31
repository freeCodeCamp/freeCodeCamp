---
id: 589a8eb3f9fc0f352b528e72
title: Implementation of Social Authentication III
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
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /GitHubStrategy[^]*db.collection/gi, "Strategy should use now use the database to search for the user"); assert.match(data, /GitHubStrategy[^]*socialusers/gi, "Strategy should use "socialusers" as db collection"); assert.match(data, /GitHubStrategy[^]*return cb/gi, "Strategy should return the callback function "cb""); }, xhr => { throw new Error(xhr.statusText); })'

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
