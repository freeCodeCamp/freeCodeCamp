---
id: 587d7fb8367417b2b2512c10
title: Eliminare un documento usando model.findByIdAndRemove
challengeType: 2
forumTopicId: 301539
dashedName: delete-one-document-using-model-findbyidandremove
---

# --description--

`findByIdAndRemove` e `findOneAndRemove` sono come i metodi di aggiornamento precedenti. Passano il documento rimosso al database. Come al solito, usa l'argomento `personId` della funzione come chiave di ricerca.

# --instructions--

Modifica la funzione `removeById` in modo che elimini una persona in base al suo `_id`. È necessario utilizzare i metodi `findByIdAndRemove()` o `findOneAndRemove()`.

# --hints--

L'eliminazione di un elemento dovrebbe avere successo

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/remove-one-person', {
    name: 'Jason Bourne',
    age: 36,
    favoriteFoods: ['apples']
  }).then(
    (data) => {
      assert.equal(data.name, 'Jason Bourne', 'item.name is not what expected');
      assert.equal(data.age, 36, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['apples'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 0);
      assert.equal(data.count, 0, 'the db items count is not what expected');
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
