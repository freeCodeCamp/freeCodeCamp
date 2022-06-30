---
id: 587d8248367417b2b2512c3a
title: Evitare di dedurre il tipo MIME della risposta con helmet.noSniff()
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonato da <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>. I browser possono usare lo sniffing del contenuto o del MIME per sovrascrivere le intestazioni `Content-Type` per indovinare ed elaborare i dati utilizzando un tipo di contenuto implicito. Anche se questo può essere conveniente in alcuni scenari, può anche portare ad alcuni attacchi pericolosi. Questo middleware imposta l'intestazione X-Content-Type-Options a `nosniff`, istruendo il browser di non bypassare il tipo di contenuto fornito `Content-Type`.

# --instructions--

Usa il metodo `helmet.noSniff()` sul tuo server.

# --hints--

Il middleware helmet.noSniff() deve essere montato correttamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nosniff');
      assert.equal(data.headers['x-content-type-options'], 'nosniff');
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
