---
id: 587d7fb7367417b2b2512c0a
title: Create Many Records with model.create()
challengeType: 2
forumTopicId: 301537
---

## Description
<section id='description'>
Sometimes you need to create many instances of your models, e.g. when seeding a database with initial data. <code>Model.create()</code> takes an array of objects like <code>[{name: 'John', ...}, {...}, ...]</code> as the first argument, and saves them all in the db.
</section>

## Instructions
<section id='instructions'>
Modify the <code>createManyPeople</code> function to create many people using <code>Model.create()</code> with the argument <code>arrayOfPeople</code>.
<strong>Note: </strong> You can reuse the model you instantiated in the previous exercise.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Creating many db items at once should succeed
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/create-many-people'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''John'', age: 24, favoriteFoods: [''pizza'', ''salad'']}, {name: ''Mary'', age: 21, favoriteFoods: [''onions'', ''chicken'']}])}).then(data => { assert.isArray(data, ''the response should be an array''); assert.equal(data.length, 2, ''the response does not contain the expected number of items''); assert.equal(data[0].name, ''John'', ''The first item is not correct''); assert.equal(data[0].__v, 0, ''The first item should be not previously edited''); assert.equal(data[1].name, ''Mary'', ''The second item is not correct''); assert.equal(data[1].__v, 0, ''The second item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
