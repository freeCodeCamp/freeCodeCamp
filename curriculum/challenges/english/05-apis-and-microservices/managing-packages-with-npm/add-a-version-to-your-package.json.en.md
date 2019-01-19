---
id: 587d7fb4367417b2b2512bff
title: Add a Version to Your package.json
challengeType: 2
---

## Description
<section id='description'>
The version is together with name one of the required fields in a package.json. This field describes the current version of your project.
Example
<code>"version": "1.2",</code>
Instructions
Add a version to the package.json in your Glitch project.
</section>

## Instructions
<section id='instructions'>

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
// solution required
```
</section>
