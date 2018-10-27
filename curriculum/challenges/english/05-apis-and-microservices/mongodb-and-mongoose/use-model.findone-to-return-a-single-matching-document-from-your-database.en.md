---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
challengeType: 2
---

## Description
<section id='description'>
Model.findOne() behaves like .find(), but it returns only one document (not an array), even if there are multiple items. It is especially useful when searching by properties that you have declared as unique. Find just one person which has a certain food in her favorites, using Model.findOne() -> Person. Use the function argument food as search key.
</section>

## Instructions
<section id='instructions'>

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
// solution required
```
</section>
