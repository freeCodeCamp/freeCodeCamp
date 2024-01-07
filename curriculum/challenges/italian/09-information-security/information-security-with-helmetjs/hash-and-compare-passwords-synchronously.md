---
id: 58a25bcff9fc0f352b528e7e
title: Crittografare e confrontare le password in modo sincrono
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonato da <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

L' hashing sincrono è altrettanto facile da fare, ma può causare ritardo se lo si utilizza dal lato server con un costo elevato o con hashing fatto molto spesso. Crittografare con questo metodo è facile come chiamare

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

Aggiungi questo metodo di hashing al tuo codice e poi scrivi il risultato sulla console. Anche in questo caso, le variabili utilizzate sono già definite nel server, quindi non è necessario modificarle. Puoi notare che, anche se stiamo crittografando la stessa password come nella funzione asincrona, il risultato nella console è diverso - questo è dovuto al fatto che il salt viene generato casualmente ogni volta come si vede dai primi 22 caratteri nella terza stringa dell'hash. Ora per confrontare un inserimento di password con il nuovo hash di sincronizzazione, si utilizza il metodo compareSync:

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

il cui risultato è un booleano vero o falso.

# --instructions--

Aggiungi la funzione e scrivi il risultato sulla console per vederla funzionare.

Invia la tua pagina quando pensi di averlo fatto correttamente.

# --hints--

L'hash asincrono dovrebbe essere generato e confrontato correttamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi,
        'You should call bcrypt.hashSync on myPlaintextPassword with saltRounds'
      );
      assert.match(
        data,
        /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi,
        'You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
