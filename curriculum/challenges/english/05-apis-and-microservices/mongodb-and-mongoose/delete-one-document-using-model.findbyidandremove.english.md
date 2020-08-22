---
id: 587d7fb8367417b2b2512c10
title: Delete One Document Using model.findByIdAndRemove
challengeType: 2
isHidden: false
forumTopicId: 301539
---

## Description
<section id='description'>
Delete one person by the person's <code>_id</code>. You should use one of the methods <code>findByIdAndRemove()</code> or <code>findOneAndRemove()</code>. They are like the previous update methods. They pass the removed document to the db. As usual, use the function argument <code>personId</code> as the search key.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Deleting an item should succeed
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/remove-one-person'', {name:''Jason Bourne'', age: 36, favoriteFoods:[''apples'']}).then(data => { assert.equal(data.name, ''Jason Bourne'', ''item.name is not what expected''); assert.equal(data.age, 36, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''apples''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0); assert.equal(data.count, 0, ''the db items count is not what expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
