---
id: 587d7fb4367417b2b2512c00
title: Expand Your Project with External Packages from npm
challengeType: 2
---

## Description
<section id='description'>
One of the biggest reasons to use a package manager is their powerful dependency management. Instead of manually having to make sure that you get all dependencies whenever you set up a project on a new computer, npm automatically installs everything for you. But how can npm know exactly what your project needs? Meet the dependencies-section of your package.json.
In the dependencies-section, packages your project require are stored using the following format:
<code>"dependencies": {</code>
<code>  "package-name": "version",</code>
<code>  "express": "4.14.0"</code>
<code>}</code>
Instructions
Add version 2.14.0 of the package moment to the dependencies-field of your package.json
Moment is a handy library for working with time and dates.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: '"dependencies" should include "moment"'
  testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
- text: '"moment" version should be "2.14.0"'
  testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.match(packJson.dependencies.moment, /^[\^\~]?2\.14\.0/, ''Wrong version of "moment" installed. It should be 2.14.0''); }, xhr => { throw new Error(xhr.responseText); })'

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
