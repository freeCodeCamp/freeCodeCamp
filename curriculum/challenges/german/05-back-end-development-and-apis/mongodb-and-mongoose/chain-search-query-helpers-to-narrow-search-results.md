---
id: 587d7fb9367417b2b2512c12
title: Chain Search Query Helpers to Narrow Search Results
challengeType: 2
forumTopicId: 301533
dashedName: chain-search-query-helpers-to-narrow-search-results
---

# --description--

Wenn du den Callback nicht als letztes Argument an `Model.find()` (oder an die anderen Suchmethoden) übergibst, wird die Abfrage nicht ausgeführt. Du kannst die Abfrage zur späteren Verwendung in einer Variablen speichern. Diese Art von Objekt ermöglicht es dir, eine Abfrage mit Hilfe einer Verkettungssyntax zu erstellen. Die eigentliche Datenbanksuche wird ausgeführt, wenn du schließlich die Methode `.exec()` verkettest. An diese letzte Methode musst du immer deinen Callback übermitteln. There are many query helpers, here we'll use the most commonly used.

# --instructions--

Modify the `queryChain` function to find people who like the food specified by the variable named `foodToSearch`. Sortiere sie nach `name`, beschränke die Ergebnisse auf zwei Dokumente und blende ihr Alter aus. Chain `.find()`, `.sort()`, `.limit()`, `.select()`, and then `.exec()`. Übergebe den `done(err, data)`-Callback an `exec()`.

# --hints--

Chaining query helpers should succeed

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/query-tools',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'Pablo', age: 26, favoriteFoods: ['burrito', 'hot-dog'] },
      { name: 'Bob', age: 23, favoriteFoods: ['pizza', 'nachos'] },
      { name: 'Ashley', age: 32, favoriteFoods: ['steak', 'burrito'] },
      { name: 'Mario', age: 51, favoriteFoods: ['burrito', 'prosciutto'] }
    ])
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an Array');
      assert.equal(
        data.length,
        2,
        'the data array length is not what expected'
      );
      assert.notProperty(
        data[0],
        'age',
        'The returned first item has too many properties'
      );
      assert.equal(
        data[0].name,
        'Ashley',
        'The returned first item name is not what expected'
      );
      assert.notProperty(
        data[1],
        'age',
        'The returned second item has too many properties'
      );
      assert.equal(
        data[1].name,
        'Mario',
        'The returned second item name is not what expected'
      );
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
