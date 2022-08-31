---
id: 587d8249367417b2b2512c3e
title: Disabilitare il caching dal lato client con helmet.noCache()
challengeType: 2
forumTopicId: 301576
dashedName: disable-client-side-caching-with-helmet-nocache
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonato da <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Se stai rilasciando un aggiornamento per il tuo sito web, e vuoi che gli utenti scarichino sempre la versione più recente, puoi (provare a) disabilitare la cache sul browser del client. Può essere utile anche in fase di sviluppo. Il caching ha benefici sulle prestazioni, che perderai, quindi usa questa opzione solo quando c'è una vera necessità.

# --instructions--

Usa il metodo `helmet.noCache()` sul tuo server.

# --hints--

Il middleware helmet.noCache() deve essere montato correttamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nocache');
      assert.equal(
        data.headers['cache-control'],
        'no-store, no-cache, must-revalidate, proxy-revalidate'
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
