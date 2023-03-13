---
id: 587d7fb6367417b2b2512c07
title: Creare un modello
challengeType: 2
forumTopicId: 301535
dashedName: create-a-model
---

# --description--

**C**RUD Parte I - CREATE

Innanzitutto abbiamo bisogno di uno Schema. Ogni schema mappa a una collezione MongoDB. Definisce la forma dei documenti all'interno di quella collezione. Gli schemi sono elementi costitutivi dei modelli. Possono essere annidati per creare modelli complessi, ma per ora terremo le cose semplici. Un modello ti permette di creare istanze dei tuoi oggetti, chiamate documenti.

Replit è un vero server, e nei server reali le interazioni con il database avvengono nelle funzioni del gestore. Queste funzioni vengono eseguite quando si verifica qualche evento (ad esempio, qualcuno raggiunge un endpoint sulla tua API). Seguiremo lo stesso approccio in questi esercizi. La funzione `done()` è una callback che ci dice che possiamo procedere dopo aver completato un'operazione asincrona come l'inserimento, la ricerca, l'aggiornamento o la cancellazione. Segue la convenzione Node e dovrebbe essere chiamata come `done(null, data)` in caso di successo, o `done(err)` in caso di errore.

Attenzione - Quando interagisci con i servizi remoti, potrebbero verificarsi degli errori!

```js
/* Example */

const someFunc = function(done) {
  //... do something (risky) ...
  if (error) return done(error);
  done(null, result);
};
```

# --instructions--

Crea uno schema persona chiamato `personSchema` con la seguente forma:

* Un campo `name` obbligatorio di tipo `String`
* Un campo `age` di tipo `Number`
* Un campo `favoriteFoods` di tipo `[String]`

Utilizzare i tipi di schema base di Mongoose. Se vuoi puoi anche aggiungere più campi, utilizzare semplici validatori come required o unique, e impostare dei valori predefiniti. Vedi il nostro <a href="https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/" target="_blank" rel="noopener noreferrer nofollow">articolo su Mongoose</a>.

Ora, crea un modello dal `personSchema` e assegnalo alla variabile esistente `Person`.

# --hints--

Creare un'istanza da uno schema mongoose dovrebbe avere successo

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/mongoose-model', {
    name: 'Mike',
    age: 28,
    favoriteFoods: ['pizza', 'cheese']
  }).then(
    (data) => {
      assert.equal(data.name, 'Mike', '"model.name" is not what expected');
      assert.equal(data.age, '28', '"model.age" is not what expected');
      assert.isArray(
        data.favoriteFoods,
        '"model.favoriteFoods" is not an Array'
      );
      assert.include(
        data.favoriteFoods,
        'pizza',
        '"model.favoriteFoods" does not include the expected items'
      );
      assert.include(
        data.favoriteFoods,
        'cheese',
        '"model.favoriteFoods" does not include the expected items'
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
