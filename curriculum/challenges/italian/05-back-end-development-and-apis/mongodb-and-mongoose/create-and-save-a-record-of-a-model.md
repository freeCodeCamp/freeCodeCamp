---
id: 587d7fb6367417b2b2512c09
title: Creare e salvare un record di un modello
challengeType: 2
forumTopicId: 301536
dashedName: create-and-save-a-record-of-a-model
---

# --description--

In questa sfida dovrai creare e salvare un record di un modello.

# --instructions--

All'interno della funzione `createAndSavePerson`, crea un'istanza di documento usando il costruttore del modello `Person` che hai costruito prima. Passa al costruttore un oggetto con i campi `name`, `age`e `favoriteFoods`. I loro tipi devono essere conformi a quelli di `personSchema`. Quindi, chiama il metodo `document.save()` sull'istanza di documento restituita. Passa ad essa una callback usando la convenzione di Node. Questo è un modello comune; tutti i metodi CRUD seguenti prendono una funzione di callback come questa come ultimo argomento.

```js
/* Example */

// ...
person.save(function(err, data) {
  //   ...do your stuff here...
});
```

# --hints--

Si dovrebbe creare e salvare con successo un elemento del database

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
