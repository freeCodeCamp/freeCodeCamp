---
id: 587d7fb4367417b2b2512bfe
title: Add a License to Your package.json
challengeType: 2
isHidden: false
forumTopicId: 301523
---

## Description
<section id='description'>
The <code>license</code> field is where you inform users of what they are allowed to do with your project.
Some common licenses for open source projects include MIT and BSD. License information is not required, and copyright laws in most countries will give you ownership of what you create by default. However, it’s always a good practice to explicitly state what users can and can’t do. Here's an example of the license field:

```json
"license": "MIT",
```

</section>

## Instructions
<section id='instructions'>
Fill the <code>license</code> field in the package.json file of your project as you find suitable.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json should have a valid "license" key
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.license, ''"license" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
