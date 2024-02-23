---
id: 587d7fb7367417b2b2512c0a
title: Creare diversi record con model.create()
challengeType: 2
forumTopicId: 301537
dashedName: create-many-records-with-model-create
---

# --description--

A volte avrai bisogno di creare molte istanze dei tuoi modelli, ad esempio quando fai il seeding (semina) di un database con i dati iniziali. `Model.create()` prende un array di oggetti come `[{name: 'John', ...}, {...}, ...]` come primo argomento, e li salva tutti nel database.

# --instructions--

Modifica la funzione `createManyPeople` per creare molte persone usando `Model.create()` con l'argomento `arrayOfPeople`.

**Nota:** Puoi riutilizzare il modello che hai istanziato nell'esercizio precedente.

# --hints--

La creazione di molti oggetti db contemporaneamente dovrebbe avere successo

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
