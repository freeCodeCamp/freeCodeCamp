---
id: 587d7fb6367417b2b2512c09
title: Erstellen und Speichern eines Datensatzes für ein Modell
challengeType: 2
forumTopicId: 301536
dashedName: create-and-save-a-record-of-a-model
---

# --description--

In dieser Aufgabe musst du einen Datensatz für ein Modell erstellen und speichern.

# --instructions--

Erstelle eine Dokumentinstanz innerhalb der `createAndSavePerson`-Funktion, unter Verwendung des Modell-Konstruktors `Person`, den du zuvor erstellt hast. Übergebe dem Konstruktor ein Objekt mit den Feldern `name`, `age`, und `favoriteFoods`. Deren Typen müssen mit denen in `personSchema` übereinstimmen. Rufe anschließend die Methode `document.save()` in der zurückgegebenen Dokumentinstanz auf. Übergib dieser einen Callback unter Verwendung der Node-Konvention. Das ist ein gängiges Muster; alle folgenden CRUD-Methoden akzeptieren eine Callback-Funktion wie diese als letztes Argument.

```js
/* Example */

// ...
person.save(function(err, data) {
  //   ...do your stuff here...
});
```

# --hints--

Creating and saving a db item should succeed

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/create-and-save-person').then(
    (data) => {
      assert.isString(data.name, '"item.name" should be a String');
      assert.isNumber(data.age, '28', '"item.age" should be a Number');
      assert.isArray(
        data.favoriteFoods,
        '"item.favoriteFoods" should be an Array'
      );
      assert.equal(data.__v, 0, 'The db item should be not previously edited');
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
