---
id: 587d8249367417b2b2512c3e
title: Desativar o cache do lado do client com helmet.noCache()
challengeType: 2
forumTopicId: 301576
dashedName: disable-client-side-caching-with-helmet-nocache
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Se estiver lançando uma atualização para o seu site, e quiser que os usuários façam o download da versão mais recente, você pode (tentar) desabilitar o cache no navegador do client. Isso também pode ser útil para o desenvolvimento. O caching tem benefícios de desempenho, que você vai perder. Então, use esta opção apenas quando houver uma necessidade real.

# --instructions--

Use o método `helmet.noCache()` no seu servidor.

# --hints--

O middleware helmet.noCache() deve ser montado corretamente

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
