---
id: 587d7fb4367417b2b2512bff
title: Add a Version to Your package.json
challengeType: 2
isHidden: false
forumTopicId: 301525
---

## Description
<section id='description'>
A <code>version</code> is one of the required fields of your package.json file. This field describes the current version of your project. Here's an example:

```json
"version": "1.2.0",
```

</section>

## Instructions
<section id='instructions'>
Add a <code>version</code> to the package.json file of your project.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json should have a valid "version" key
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.version, ''"version" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
