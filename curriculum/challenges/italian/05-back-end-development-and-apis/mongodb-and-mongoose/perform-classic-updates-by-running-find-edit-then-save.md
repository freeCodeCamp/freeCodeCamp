---
id: 587d7fb8367417b2b2512c0e
title: 'Eseguire classici aggiornamenti eseguendo Find, Edit e Save'
challengeType: 2
forumTopicId: 301541
dashedName: perform-classic-updates-by-running-find-edit-then-save
---

# --description--

Nei bei tempi andati, questo era quello che dovevi fare se volevi modificare un documento, ed essere in grado di usarlo in qualche modo (ad esempio restituendolo in una risposta del server). Mongoose ha un metodo di aggiornamento dedicato: `Model.update()`. Esso è legato al driver di basso livello di mongo. Può modificare contemporaneamente più documenti che corrispondono a determinati criteri, ma non restituisce il documento aggiornato, solo un messaggio di 'stato'. Inoltre, rende difficile le validazioni del modello, perché chiama direttamente il driver di mongo.

# --instructions--

Modifica la funzione `findEditThenSave` per trovare una persona in base al suo `_id` (utilizza uno qualsiasi dei metodi visti in precedenza) con il parametro `personId` come chiave di ricerca. Aggiungi `"hamburger"` alla lista dei `favoriteFoods` della persona (puoi usare `Array.push()`). Quindi - all'interno della callback find - salva (`save()`) la `Person` aggiornata.

**Nota:** Potrebbe essere complicato, se nel tuo Schema, hai dichiarato `favoriteFoods` come Array, senza specificare il tipo (cioè `[String]`). In questo caso, `favoriteFoods` prende di default il tipo misto, e devi contrassegnarlo manualmente come modificato utilizzando `document.markModified('edited-field')`. Vedi il nostro <a href="https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/" target="_blank" rel="noopener noreferrer nofollow">articolo su Mongoose</a>.

# --hints--

Il Find-edit-update di un elemento dovrebbe avere successo

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
