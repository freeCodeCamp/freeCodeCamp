---
id: 587d7fb8367417b2b2512c10
title: Delete One Document Using model.findByIdAndRemove
challengeType: 2
forumTopicId: 301539
dashedName: delete-one-document-using-model-findbyidandremove
---

# --description--

`findByIdAndRemove` and `findOneAndRemove` are like the previous update methods. They pass the removed document to the db. As usual, use the function argument `personId` as the search key.

# --instructions--

Modify the `removeById` function to delete one person by the person's `_id`. You should use one of the methods `findByIdAndRemove()` or `findOneAndRemove()`.

# --hints--

Deleting an item should succeed

```js
  const response = await fetch(code + '/_api/remove-one-person', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Jason Bourne',
      age: 36,
      favoriteFoods: ['apples']
    })
  });
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert.equal(data.name, 'Jason Bourne', 'item.name is not what expected');
  assert.equal(data.age, 36, 'item.age is not what expected');
  assert.deepEqual(
    data.favoriteFoods,
    ['apples'],
    'item.favoriteFoods is not what expected'
  );
  assert.equal(data.__v, 0);
  assert.equal(data.count, 0, 'the db items count is not what expected');
```

