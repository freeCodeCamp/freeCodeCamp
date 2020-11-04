---
id: 587d7fb7367417b2b2512c0d
title: Use model.findById() to Search Your Database By _id
challengeType: 2
forumTopicId: 301544
---

## Description

<section id='description'>

When saving a document, MongoDB automatically adds the field `_id`, and set it to a unique alphanumeric key. Searching by `_id` is an extremely frequent operation, so Mongoose provides a dedicated method for it.

</section>

## Instructions

<section id='instructions'>

Modify the `findPersonById` to find the only person having a given `_id`, using `Model.findById() -> Person`. Use the function argument `personId` as the search key.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: Find an item by Id should succeed
    testString: |
      getUserInput => $.get(getUserInput('url') + '/_api/find-by-id').then(data => {
        assert.equal(data.name, 'test', 'item.name is not what expected');
        assert.equal(data.age, 0, 'item.age is not what expected');
        assert.deepEqual(data.favoriteFoods, ['none'], 'item.favoriteFoods is not what expected');
        assert.equal(data.__v, 0, 'The item should be not previously edited');
        }, xhr => { throw new Error(xhr.responseText); })
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
