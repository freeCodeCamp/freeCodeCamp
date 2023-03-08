---
id: 587d7fb7367417b2b2512c0c
title: Verwende model.findOne(), um ein einzelnes übereinstimmendes Dokument aus deiner Datenbank zurückzugeben
challengeType: 2
forumTopicId: 301545
dashedName: use-model-findone-to-return-a-single-matching-document-from-your-database
---

# --description--

`Model.findOne()` behaves like `Model.find()`, but it returns only one document (not an array), even if there are multiple items. It is especially useful when searching by properties that you have declared as unique.

# --instructions--

Modifiziere die `findOneByFood`-Funktion, um nur eine Person zu finden, die ein bestimmtes Essen zu ihren persönlichen Favoriten zählt, indem du `Model.findOne() -> Person` verwendest. Verwende das Funktionsargument `food` als Suchbegriff.

# --hints--

Die Suche nach einem Element sollte erfolgreich sein

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-one-by-food', {
    name: 'Gary',
    age: 46,
    favoriteFoods: ['chicken salad']
  }).then(
    (data) => {
      assert.equal(data.name, 'Gary', 'item.name is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['chicken salad'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 0, 'The item should be not previously edited');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
