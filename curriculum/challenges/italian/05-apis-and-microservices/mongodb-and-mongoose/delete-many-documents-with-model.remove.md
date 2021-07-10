---
id: 587d7fb8367417b2b2512c11
title: Eliminare molti documenti con model.remove()
challengeType: 2
forumTopicId: 301538
dashedName: delete-many-documents-with-model-remove
---

# --description--

`Model.remove()` è utile per eliminare tutti i documenti corrispondenti ai criteri indicati.

# --instructions--

Modifica la funzione `removeManyPeople` per eliminare tutte le persone il cui nome è all'interno della variabile `nameToRemove`, usando `Model.remove()`. Passalo a un documento di query con il campo `name` impostato e una callback.

**Nota:** `Model.remove()` non restituisce il documento eliminato, ma un oggetto JSON contenente l'esito dell'operazione e il numero di elementi interessati. Non dimenticate di passarlo alla callback `done()`, dal momento che lo utilizzeremo nei test.

# --hints--

L'eliminazione di molti oggetti contemporaneamente dovrebbe avere successo

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/remove-many-people',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'Mary', age: 16, favoriteFoods: ['lollipop'] },
      { name: 'Mary', age: 21, favoriteFoods: ['steak'] }
    ])
  }).then(
    (data) => {
      assert.isTrue(!!data.ok, 'The mongo stats are not what expected');
      assert.equal(
        data.n,
        2,
        'The number of items affected is not what expected'
      );
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
