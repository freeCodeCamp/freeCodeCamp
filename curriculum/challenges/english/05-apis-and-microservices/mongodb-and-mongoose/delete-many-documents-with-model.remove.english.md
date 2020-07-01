---
id: 587d7fb8367417b2b2512c11
title: Delete Many Documents with model.remove()
challengeType: 2
isHidden: false
forumTopicId: 301538
---

## Description
<section id='description'>
<code>Model.remove()</code> is useful to delete all the documents matching given criteria. 
</section>

## Instructions
<section id='instructions'>
Delete all the people whose name is “Mary”, using <code>Model.remove()</code>. Pass it to a query document with the <code>name</code> field set, and of course a callback.
<strong>Note:</strong> The <code>Model.remove()</code> doesn’t return the deleted document, but a JSON object containing the outcome of the operation, and the number of items affected. Don’t forget to pass it to the <code>done()</code> callback, since we use it in tests.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Deleting many items at once should succeed
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/remove-many-people'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''Mary'', age: 16, favoriteFoods: [''lollipop'']}, {name: ''Mary'', age: 21, favoriteFoods: [''steak'']}])}).then(data => { assert.isTrue(!!data.ok, ''The mongo stats are not what expected''); assert.equal(data.n, 2, ''The number of items affected is not what expected''); assert.equal(data.count, 0, ''the db items count is not what expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
