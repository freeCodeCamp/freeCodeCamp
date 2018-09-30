---
id: 587d7fb5367417b2b2512c03
title: Use the Caret-Character to Use the Latest Minor Version of a Dependency
challengeType: 2
---

## Description
<section id='description'>
Similar to how the tilde (~) we learned about in the last challenge allow npm to install the latest PATCH for a dependency, the caret (^) allows npm to install future updates as well. The difference is that the caret will allow both MINOR updates and PATCHes.
At the moment, your current version of moment should be ~2.10.2 which allows npm to install to the latest 2.10.x-version. If we instead were to use the caret (^) as our version prefix, npm would instead be allowed to update to any 2.x.x-version.
Example
<code>"some-package-name": "^1.3.8" allows updates to any 1.x.x version.</code>
Instructions
Use the caret-character (^) to prefix the version of moment in your dependencies and allow npm to update it to any new MINOR release.
Note that the version numbers themselves not should be changed.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: '"dependencies" should include "moment"'
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/package.json").then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "moment", ""dependencies" does not include "moment""); }, xhr => { throw new Error(xhr.responseText); })'
- text: '"moment" version should match "^2.x.x"'
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/package.json").then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\^2\./, "Wrong version of "moment". It should be ^2.10.2"); }, xhr => { throw new Error(xhr.responseText); })'

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
