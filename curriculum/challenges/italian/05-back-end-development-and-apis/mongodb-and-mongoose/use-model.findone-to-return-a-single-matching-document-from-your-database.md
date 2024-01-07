---
id: 587d7fb7367417b2b2512c0c
title: Usare model.findOne() per restituire un singolo documento corrispondente dal tuo database
challengeType: 2
forumTopicId: 301545
dashedName: use-model-findone-to-return-a-single-matching-document-from-your-database
---

# --description--

`Model.findOne()` si comporta come `Model.find()`, ma restituisce un solo documento (non un array), anche se ci sono più elementi. È particolarmente utile durante la ricerca per proprietà che hai dichiarato come unique (univoche).

# --instructions--

Modifica la funzione `findOneByFood` per trovare solo una persona che abbia un certo cibo nei preferiti della persona, usando `Model.findOne() -> Person`. Usa l'argomento `food` della funzione come chiave di ricerca.

# --hints--

La ricerca di un elemento dovrebbe avere successo

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-one-by-food', {
    name: 'Gary',
    age: 46,
    favoriteFoods: ['chicken salad']
  }).then(
    (data) => {
      assert.equal(data.name, 'Gary', 'item.name is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['chicken salad'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 0, 'The item should be not previously edited');
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
