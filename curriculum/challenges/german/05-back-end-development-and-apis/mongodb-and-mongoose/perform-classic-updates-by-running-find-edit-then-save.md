---
id: 587d7fb8367417b2b2512c0e
title: 'Führe klassische Updates durch, indem du Suchen, Bearbeiten und dann Speichern ausführst'
challengeType: 2
forumTopicId: 301541
dashedName: perform-classic-updates-by-running-find-edit-then-save
---

# --description--

In the good old days, this was what you needed to do if you wanted to edit a document, and be able to use it somehow (e.g. sending it back in a server response). Mongoose hat eine eigene Aktualisierungsmethode: `Model.update()`. Sie ist an den Low-Level-Mongo-Treiber gebunden. Sie kann viele Dokumente, die bestimmten Kriterien entsprechen, auf einmal bearbeiten – allerdings sendet sie nicht das aktualisierte Dokument zurück, sondern nur eine „Statusmeldung“. Außerdem erschwert sie Modell-Validierungen, da sie direkt den Mongo-Treiber aufruft.

# --instructions--

Ändere die `findEditThenSave`-Funktion so, dass sie eine Person anhand derer `_id` findet (verwende eine der oben erwähnten Methoden), mit dem Parameter `personId` als Suchschlüssel. Füge `"hamburger"` der `favoriteFoods`-Liste der Person hinzu (du kannst `Array.push()` verwenden). Speichere die `Person` anschließend mithilfe von `save()` innerhalb des Find-Callbacks.

**Hinweis:** Das kann etwas knifflig sein, wenn du in deinem Schema `favoriteFoods` als Array angegeben hast, ohne den Typ zu spezifizieren (bspw. `[String]`). In dem Fall ist der Datentyp von `favoriteFoods` standardmäßig „Mixed“. Du wirst ihn manuell mithilfe von `document.markModified('edited-field')` als editiert markieren müssen. Mehr dazu in unserem <a href="https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/" target="_blank" rel="noopener noreferrer nofollow">Mongoose-Artikel</a>.

# --hints--

Find-edit-update an item should succeed

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-edit-save', {
    name: 'Poldo',
    age: 40,
    favoriteFoods: ['spaghetti']
  }).then(
    (data) => {
      assert.equal(data.name, 'Poldo', 'item.name is not what is expected');
      assert.equal(data.age, 40, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['spaghetti', 'hamburger'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 1, 'The item should be previously edited');
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
