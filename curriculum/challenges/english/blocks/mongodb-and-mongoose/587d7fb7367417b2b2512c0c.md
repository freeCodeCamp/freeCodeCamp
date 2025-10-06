---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
challengeType: 2
forumTopicId: 301545
dashedName: use-model-findone-to-return-a-single-matching-document-from-your-database
---

# --description--

`Model.findOne()` behaves like `Model.find()`, but it returns only one document (not an array), even if there are multiple items. It is especially useful when searching by properties that you have declared as unique.

# --instructions--

Modify the `findOneByFood` function to find just one person which has a certain food in the person's favorites, using `Model.findOne() -> Person`. Use the function argument `food` as search key.

# --hints--

Find one item should succeed

```js
  const response = await fetch(code + '/_api/find-one-by-food', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Gary',
      age: 46,
      favoriteFoods: ['chicken salad']
    })
  });
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert.equal(data.name, 'Gary', 'item.name is not what expected');
  assert.deepEqual(
    data.favoriteFoods,
    ['chicken salad'],
    'item.favoriteFoods is not what expected'
  );
  assert.equal(data.__v, 0, 'The item should be not previously edited');
```

