---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
challengeType: 2
forumTopicId: 301542
dashedName: perform-new-updates-on-a-document-using-model-findoneandupdate
---

# --description--

Neuere Versionen von Mongoose verfügen über Methoden zur Vereinfachung der Aktualisierung von Dokumenten. Einige fortgeschrittene Funktionen (z. B. Pre/Post-Hooks, Validierung) verhalten sich bei diesem Ansatz anders, so dass die klassische Methode in vielen Situationen immer noch nützlich ist. `findByIdAndUpdate()` can be used when searching by id.

# --instructions--

Ändere die `findAndUpdate`-Funktion, um eine Person durch `Name` zu finden und setze das Alter der Person auf `20`. Verwende den Funktionsparameter `personName` als Suchbegriff.

**Note:** You should return the updated document. Dazu musst du das Options-Dokument `{ new: true }` als das 3. Argument an `findOneAndUpdate()` übergeben. Standardmäßig geben diese Methoden das unveränderte Objekt zurück.

# --hints--

findOneAndUpdate an item should succeed

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-one-update', {
    name: 'Dorian Gray',
    age: 35,
    favoriteFoods: ['unknown']
  }).then(
    (data) => {
      assert.equal(data.name, 'Dorian Gray', 'item.name is not what expected');
      assert.equal(data.age, 20, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['unknown'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(
        data.__v,
        0,
        'findOneAndUpdate does not increment version by design!'
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
