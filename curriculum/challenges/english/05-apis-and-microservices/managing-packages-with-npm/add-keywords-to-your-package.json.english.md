---
id: 587d7fb4367417b2b2512bfd
title: Add Keywords to Your package.json
challengeType: 2
isHidden: false
forumTopicId: 301526
---

## Description
<section id='description'>
The <code>keywords</code> field is where you can describe your project using related keywords. Here's an example:

```json
"keywords": [ "descriptive", "related", "words" ],
```

As you can see, this field is structured as an array of double-quoted strings.
</section>

## Instructions
<section id='instructions'>
Add an array of suitable strings to the <code>keywords</code> field in the package.json file of your project.
One of the keywords should be "freecodecamp".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json should have a valid "keywords" key
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.keywords, ''"keywords" is missing''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '"keywords" field should be an Array'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.isArray(packJson.keywords, ''"keywords" is not an array''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '"keywords" should include "freecodecamp"'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);     assert.include(packJson.keywords, ''freecodecamp'', ''"keywords" does not include "freecodecamp"''); },  xhr => { throw new Error(xhr.responseText); })'

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
