---
id: 587d8248367417b2b2512c3a
title: Evitar inferências da resposta de MIME Type com helmet.noSniff()
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>. Browsers can use content or MIME sniffing to override the `Content-Type` header of a response to guess and process the data using an implicit content type. Embora isso possa ser conveniente em alguns cenários, também pode levar a alguns ataques perigosos. This middleware sets the `X-Content-Type-Options` header to `nosniff`, instructing the browser to not bypass the provided `Content-Type`.

# --instructions--

Use o método `helmet.noSniff()` no seu servidor.

# --hints--

O middleware helmet.noSniff() deve ser montado corretamente

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
