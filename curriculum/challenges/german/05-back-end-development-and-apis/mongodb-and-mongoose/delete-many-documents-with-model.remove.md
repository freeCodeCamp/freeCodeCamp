---
id: 587d7fb8367417b2b2512c11
title: Delete Many Documents with model.remove()
challengeType: 2
forumTopicId: 301538
dashedName: delete-many-documents-with-model-remove
---

# --description--

`Model.remove()` eignet sich zur Löschung von Dokumenten anhand bestimmter Kriterien.

# --instructions--

Ändere die `removeManyPeople`-Funktion so, dass sie mithilfe von `Model.remove()` alle Personen löscht, deren Namen in der Variable `nameToRemove` enthalten sind. Pass it to a query document with the `name` field set, and a callback.

**Hinweis:** Das `Model.remove()` gibt nicht das gelöschte Dokument zurück, sondern ein JSON-Objekt, das das Ergebnis des Vorgangs und die Anzahl der betroffenen Elemente enthält. Vergiss nicht, ihn an den `done()`-Callback zu übergeben, da wir ihn in Tests verwenden.

# --hints--

Deleting many items at once should succeed

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/remove-many-people',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'Mary', age: 16, favoriteFoods: ['lollipop'] },
      { name: 'Mary', age: 21, favoriteFoods: ['steak'] }
    ])
  }).then(
    (data) => {
      assert.isTrue(!!data.ok, 'The mongo stats are not what expected');
      assert.equal(
        data.n,
        2,
        'The number of items affected is not what expected'
      );
      assert.equal(data.count, 0, 'the db items count is not what expected');
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
