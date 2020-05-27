---
id: 587d7fb4367417b2b2512c00
title: Expand Your Project with External Packages from npm
challengeType: 2
isHidden: false
forumTopicId: 301527
---

## Description
<section id='description'>
One of the biggest reasons to use a package manager, is their powerful dependency management. Instead of manually having to make sure that you get all dependencies whenever you set up a project on a new computer, npm automatically installs everything for you. But how can npm know exactly what your project needs? Meet the <code>dependencies</code> section of your package.json file.
In this section, packages your project requires are stored using the following format:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

</section>

## Instructions
<section id='instructions'>
Add version "2.14.0" of the "moment" package to the <code>dependencies</code> field of your package.json file.
<strong>Note:</strong> Moment is a handy library for working with time and dates.
</section>

## Tests
<section id='tests'>

```yml
tests:
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
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
