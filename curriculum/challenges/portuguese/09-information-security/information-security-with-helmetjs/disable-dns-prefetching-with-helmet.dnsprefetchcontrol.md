---
id: 587d8248367417b2b2512c3d
title: Desativar o DNS Prefetching com helmet.dnsPrefetchControl()
challengeType: 2
forumTopicId: 301577
dashedName: disable-dns-prefetching-with-helmet-dnsprefetchcontrol
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Para melhorar o desempenho, a maioria dos navegadores registra antes do fetching o DNS dos links de uma página. Desta maneira, o IP de destino já é conhecido quando o usuário clica em um link. Isso pode levar a um uso excessivo do serviço de DNS (se você possui um site grande, visitado por milhões de pessoas…), problemas de privacidade (uma escuta pode inferir que você está em uma determinada página), ou em alterações das estatísticas da página (alguns links podem aparecer visitados, mesmo que não sejam). Se você tem elevadas necessidades de segurança, pode desativar a pré-busca de DNS, ao custo de uma penalização de desempenho.

# --instructions--

Use o método `helmet.dnsPrefetchControl()` no seu servidor.

# --hints--

O middleware helmet.dnsPrefetchControl() deve ser montado corretamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'dnsPrefetchControl');
      assert.equal(data.headers['x-dns-prefetch-control'], 'off');
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
