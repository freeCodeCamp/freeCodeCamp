---
id: 587d7fb8367417b2b2512c0f
title: Eseguire nuovi aggiornamenti su un documento utilizzando model.findOneAndUpdate()
challengeType: 2
forumTopicId: 301542
dashedName: perform-new-updates-on-a-document-using-model-findoneandupdate
---

# --description--

Le versioni recenti di Mongoose hanno metodi per semplificare l'aggiornamento dei documenti. Alcune caratteristiche più avanzate (cioè gli agganci pre/post validazione) si comportano in modo diverso con questo approccio, quindi il metodo classico è ancora utile in molte situazioni. `findByIdAndUpdate()` può essere usato durante la ricerca tramite id.

# --instructions--

Modifica la funzione `findAndUpdate` per trovare una persona in base al suo `Name` e impostare l'età della persona a `20`. Utilizza il parametro `personName` della funzione come chiave di ricerca.

**Nota:** Dovresti restituire il documento aggiornato. Per farlo, dovresti passare il documento di opzioni `{ new: true }` come terzo argomento a `findOneAndUpdate()`. Per impostazione predefinita, questi metodi restituiscono l'oggetto non modificato.

# --hints--

findOneAndUpdate su un elemento dovrebbe avere successo

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-one-update', {
    name: 'Dorian Gray',
    age: 35,
    favoriteFoods: ['unknown']
  }).then(
    (data) => {
      assert.equal(data.name, 'Dorian Gray', 'item.name is not what expected');
      assert.equal(data.age, 20, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['unknown'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(
        data.__v,
        0,
        'findOneAndUpdate does not increment version by design!'
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
