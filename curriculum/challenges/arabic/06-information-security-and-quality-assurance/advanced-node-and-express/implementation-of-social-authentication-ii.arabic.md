---
id: 589a69f5f9fc0f352b528e71
title: Implementation of Social Authentication II
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
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport-github", "Your project should list "passport-github" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")passport-github("|")/gi, "You should have required passport-github"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.use.*new GitHubStrategy/gi, "Passport should use a new GitHubStrategy"); assert.match(data, /callbackURL:( |)("|").*("|")/gi, "You should have a callbackURL"); assert.match(data, /process.env.GITHUB_CLIENT_SECRET/g, "You should use process.env.GITHUB_CLIENT_SECRET"); assert.match(data, /process.env.GITHUB_CLIENT_ID/g, "You should use process.env.GITHUB_CLIENT_ID"); }, xhr => { throw new Error(xhr.statusText); })'

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
