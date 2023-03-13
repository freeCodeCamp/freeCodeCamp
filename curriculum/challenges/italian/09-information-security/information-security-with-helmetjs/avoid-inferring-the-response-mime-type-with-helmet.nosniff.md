---
id: 587d8248367417b2b2512c3a
title: Evitare di dedurre il tipo MIME della risposta con helmet.noSniff()
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonato da <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>. Browsers can use content or MIME sniffing to override the `Content-Type` header of a response to guess and process the data using an implicit content type. Anche se questo può essere conveniente in alcuni scenari, può anche portare ad alcuni attacchi pericolosi. This middleware sets the `X-Content-Type-Options` header to `nosniff`, instructing the browser to not bypass the provided `Content-Type`.

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
