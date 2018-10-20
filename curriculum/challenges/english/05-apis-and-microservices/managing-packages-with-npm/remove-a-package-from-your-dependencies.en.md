---
id: 587d7fb5367417b2b2512c04
title: Remove a Package from Your Dependencies
challengeType: 2
---

## Description
<section id='description'>
Now you’ve tested a few ways you can manage dependencies of your project by using the package.json's dependencies-section. You’ve included external packages by adding them to the file and even told npm what types of versions you want by using special characters as the tilde (~) or the caret (^).
But what if you want to remove an external package that you no longer need? You might already have guessed it - Just remove the corresponding "key": value-pair for that from your dependencies.
This same method applies to removing other fields in your package.json as well
Instructions
Remove the package moment from your dependencies.
Make sure you have the right amount of commas after removing it.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: '"dependencies" should not include "moment"'
  testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.notProperty(packJson.dependencies, ''moment'', ''"dependencies" still includes "moment"''); }, xhr => { throw new Error(xhr.responseText); })'

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
