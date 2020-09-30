---
id: 587d7fb5367417b2b2512c04
title: Remove a Package from Your Dependencies
challengeType: 2
forumTopicId: 301530
---

## Description
<section id='description'>
You have now tested a few ways you can manage dependencies of your project by using the package.json's dependencies section. You have also included external packages by adding them to the file and even told npm what types of versions you want, by using special characters such as the tilde or the caret.
But what if you want to remove an external package that you no longer need? You might already have guessed it, just remove the corresponding key-value pair for that package from your dependencies.
This same method applies to removing other fields in your package.json as well
</section>

## Instructions
<section id='instructions'>
Remove the moment package from your dependencies.
<strong>Note:</strong> Make sure you have the right amount of commas after removing it.
</section>

## Tests
<section id='tests'>

```yml
tests:
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
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
