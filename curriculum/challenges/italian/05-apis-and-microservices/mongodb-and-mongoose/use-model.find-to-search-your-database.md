---
id: 587d7fb7367417b2b2512c0b
title: Usare model.find() per fare ricerche nel database
challengeType: 2
forumTopicId: 301543
dashedName: use-model-find-to-search-your-database
---

# --description--

Nel suo uso più semplice, `Model.find()` accetta un documento di query (un oggetto JSON) come primo argomento, quindi una callback. Restituisce un array di corrispondenze. Supporta una gamma estremamente ampia di opzioni di ricerca. Per approfondimenti leggi la documentazione.

# --instructions--

Modifica la funzione `findPeopleByName` per trovare tutte le persone che hanno un dato nome, usando <code>Model.find() -\> [Person]</code>

Usa l'argomento `personName` della funzione come chiave di ricerca.

# --hints--

La ricerca di tutti gli elementi corrispondenti a un criterio dovrebbe avere successo

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
