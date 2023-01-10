---
id: 587d8248367417b2b2512c3c
title: Pedir aos navegadores que acessem seu site somente via HTTPS com helmet.hsts()
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

HTTP Strict Transport Security (HSTS) é uma política de segurança na web que ajuda a proteger sites contra ataques com protocolo rebaixado e sequestro de cookies. Se seu site puder ser acessado via HTTPS, você pode pedir aos navegadores do usuário que evitem o uso de HTTP não seguro. Ao definir o cabeçalho Strict-Transport-Security, você avisa aos navegadores para usar HTTPS para futuras solicitações em um período de tempo específico. Isso funcionará para as solicitações que chegarem após o pedido inicial.

# --instructions--

Configure `helmet.hsts()` para usar HTTPS pelos próximos 90 dias. Passe o objeto de configuração `{maxAge: timeInSeconds, force: true}`. Você pode criar uma variável `ninetyDaysInSeconds = 90*24*60*60;` para usar para `timeInSeconds`. O Replit já tem uma versão hsts habilitada. Para sobrescrever suas configurações, você precisa definir o campo "force" como true no objeto de configuração. Nós vamos interceptar e restaurar o cabeçalho do Replit, depois de inspecioná-lo para testes.

Observação: a configuração de HTTPS em um site personalizado requer a aquisição de um domínio e um certificado SSL/TLS.

# --hints--

O middleware helmet.hsts() deve ser montado corretamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hsts');
      assert.property(data.headers, 'strict-transport-security');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A propriedade maxAge deve ser igual a 7776000 s (90 dias)

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.match(
        data.headers['strict-transport-security'],
        /^max-age=7776000;?/
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
