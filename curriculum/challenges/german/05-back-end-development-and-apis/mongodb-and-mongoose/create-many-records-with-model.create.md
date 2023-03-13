---
id: 587d7fb7367417b2b2512c0a
title: Create Many Records with model.create()
challengeType: 2
forumTopicId: 301537
dashedName: create-many-records-with-model-create
---

# --description--

Manchmal ist es notwendig, viele Instanzen deiner Modelle zu erstellen, z.B. wenn du eine Datenbank mit Anfangsdaten versorgst. `Model.create()` akzeptiert ein Array mit Objekten wie `[{name: 'John', ...}, {...}, ...]` als erstes Argument und speichert diese dann alle in der Datenbank.

# --instructions--

Verändere die `createManyPeople`-Funktion so, dass mehrere Personen – mit `Model.create()` und `arrayOfPeople` als Argument – erstellt werden.

**Hinweis:** Du kannst das Modell, das du in der vorherigen Übung instanziiert hast, wiederverwenden.

# --hints--

Das gleichzeitige Anlegen vieler Datenbankeinträge sollte funktionieren

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/create-many-people',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'John', age: 24, favoriteFoods: ['pizza', 'salad'] },
      { name: 'Mary', age: 21, favoriteFoods: ['onions', 'chicken'] }
    ])
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an array');
      assert.equal(
        data.length,
        2,
        'the response does not contain the expected number of items'
      );
      assert.equal(data[0].name, 'John', 'The first item is not correct');
      assert.equal(
        data[0].__v,
        0,
        'The first item should be not previously edited'
      );
      assert.equal(data[1].name, 'Mary', 'The second item is not correct');
      assert.equal(
        data[1].__v,
        0,
        'The second item should be not previously edited'
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
