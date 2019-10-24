---
id: 587d7fb7367417b2b2512c0b
title: Use model.find() to Search Your Database
challengeType: 2
forumTopicId: 301543
---

## Description
<section id='description'>
Find all the people having a given name, using <code>Model.find() -> [Person]</code>
In its simplest usage, <code>Model.find()</code> accepts a query document (a JSON object) as the first argument, then a callback. It returns an array of matches. It supports an extremely wide range of search options. Check it in the docs. Use the function argument <code>personName</code> as search key.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Find all items corresponding to a criteria should succeed
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-all-by-name'', {name: ''r@nd0mN4m3'', age: 24, favoriteFoods: [''pizza'']}).then(data => { assert.isArray(data, ''the response should be an Array'');  assert.equal(data[0].name, ''r@nd0mN4m3'', ''item.name is not what expected''); assert.equal(data[0].__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
