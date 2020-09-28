---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
challengeType: 2
forumTopicId: 301542
---

## Description
<section id='description'>
Recent versions of mongoose have methods to simplify documents updating. Some more advanced features (i.e. pre/post hooks, validation) behave differently with this approach, so the Classic method is still useful in many situations. <code>findByIdAndUpdate()</code> can be used when searching by Id.
</section>

## Instructions
<section id='instructions'>
Find a person by <code>Name</code> and set the person&apos;s age to 20. Use the function parameter <code>personName</code> as search key.
<strong>Note:</strong> You should return the updated document. To do that you need to pass the options document <code>{ new: true }</code> as the 3rd argument to <code>findOneAndUpdate()</code>. By default these methods return the unmodified object.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: findOneAndUpdate an item should succeed
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-update'', {name:''Dorian Gray'', age: 35, favoriteFoods:[''unknown'']}).then(data => { assert.equal(data.name, ''Dorian Gray'', ''item.name is not what expected''); assert.equal(data.age, 20, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''unknown''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''findOneAndUpdate does not increment version by design !!!''); }, xhr => { throw new Error(xhr.responseText); })'

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
