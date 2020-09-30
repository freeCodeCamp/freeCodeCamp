---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
challengeType: 2
forumTopicId: 301545
---

## Description
<section id='description'>
<code>Model.findOne()</code> behaves like <code>.find()</code>, but it returns only one document (not an array), even if there are multiple items. It is especially useful when searching by properties that you have declared as unique. 
</section>

## Instructions
<section id='instructions'>
Find just one person which has a certain food in the person&apos;s favorites, using <code>Model.findOne() -> Person</code>. Use the function argument food as search key.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Find one item should succeed
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-by-food'', {name: ''Gary'', age: 46, favoriteFoods: [''chicken salad'']}).then(data => { assert.equal(data.name, ''Gary'', ''item.name is not what expected''); assert.deepEqual(data.favoriteFoods, [''chicken salad''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
