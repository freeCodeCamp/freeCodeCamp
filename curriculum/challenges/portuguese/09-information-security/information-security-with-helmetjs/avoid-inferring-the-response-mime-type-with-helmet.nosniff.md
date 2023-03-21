---
id: 587d8248367417b2b2512c3a
title: Evitar inferências da resposta de MIME Type com helmet.noSniff()
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>. Os navegadores podem usar detecção de conteúdo ou de MIME para substituir o cabeçalho `Content-Type` de uma resposta de modo a adivinhar e processar os dados usando um tipo de conteúdo implícito. Embora isso possa ser conveniente em alguns cenários, também pode levar a alguns ataques perigosos. Este middleware define o cabeçalho `X-Content-Type-Options` para `nosniff`, instruindo o navegador a não ignorar o `Content-Type` fornecido.

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
