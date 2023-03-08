---
id: 587d7fb7367417b2b2512c0b
title: Verwende model.find(), um deine Datenbank zu durchsuchen
challengeType: 2
forumTopicId: 301543
dashedName: use-model-find-to-search-your-database
---

# --description--

In seiner einfachsten Form akzeptiert `Model.find()` ein Query-Dokument (ein JSON-Objekt) als erstes Argument, dann einen Callback. It returns an array of matches. Die Funktion unterstützt eine Vielzahl an Suchoptionen. Read more in the docs.

# --instructions--

Verändere die `findPeopleByName`-Funktion so, dass mithilfe von <code>Model.find -\> [Person]</code> alle Personen mit einem bestimmten Namen gefunden werden.

Verwende das Funktionsargument `personName` als Suchbegriff.

# --hints--

Die Suche nach allen Elementen, auf die bestimmte Kriterien zutreffen, sollte erfolgreich sein

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-all-by-name', {
    name: 'r@nd0mN4m3',
    age: 24,
    favoriteFoods: ['pizza']
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an Array');
      assert.equal(
        data[0].name,
        'r@nd0mN4m3',
        'item.name is not what expected'
      );
      assert.equal(data[0].__v, 0, 'The item should be not previously edited');
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
