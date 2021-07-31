---
id: 587d7fb9367417b2b2512c12
title: Concatenare gli helper delle query per restringere i risultati di ricerca
challengeType: 2
forumTopicId: 301533
dashedName: chain-search-query-helpers-to-narrow-search-results
---

# --description--

Se non si passa la callback come ultimo argomento a `Model.find()` (o agli altri metodi di ricerca), la query non viene eseguita. È possibile memorizzare la query in una variabile per un uso successivo. Questo tipo di oggetto ti permette di costruire una query usando la sintassi di concatenazione. L'effettiva ricerca nel database viene eseguita quando alla fine concateni il metodo `.exec()`. Hai sempre bisogno di passare la tua callback a questo ultimo metodo. Ci sono molti helper di query: qui useremo i più comuni.

# --instructions--

Modifica la funzione `queryChain` per trovare persone a cui piace il cibo specificato dalla variabile denominata `foodToSearch`. Ordina per `name`, limita i risultati a due documenti e nascondi la loro età. Concatena `.find()`, `.sort()`, `.limit()`, `.select()`, e quindi `.exec()`. Passa la callback `done(err, data)` a `exec()`.

# --hints--

La concatenazione degli helper delle query dovrebbe avere successo

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
