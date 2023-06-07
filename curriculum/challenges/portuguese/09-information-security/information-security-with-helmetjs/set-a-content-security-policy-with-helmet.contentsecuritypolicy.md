---
id: 587d8249367417b2b2512c3f
title: Definir uma política de segurança de conteúdo com helmet.contentSecurityPolicy()
challengeType: 2
forumTopicId: 301585
dashedName: set-a-content-security-policy-with-helmet-contentsecuritypolicy
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Este desafio destaca um novo defensor promissor que pode reduzir significativamente o risco e o impacto de muitos tipos de ataques em navegadores modernos. Ao definir e configurar uma política de segurança de conteúdo, você pode evitar a injeção de qualquer coisa indesejada na sua página. Isso protegerá seu aplicativo de vulnerabilidades de XSS, rastreamento indesejado, frames maliciosos e muito mais. O CSP funciona definindo uma lista permitida de fontes de conteúdo confiáveis. Você pode configurá-las para cada tipo de recurso que uma página da web pode precisar (scripts, stylesheets, fontes, frames, mídia e assim por diante…). Há várias diretivas disponíveis. Por isso, o proprietário do site pode ter um controle granular. Veja HTML 5 Rocks, KeyCDN para mais detalhes. Infelizmente, o CSP não é suportado por navegadores mais antigos.

Por padrão, as diretivas são abertas. Por isso, é importante definir a diretiva defaultSrc como regra. O helmet suporta estilos de nomeação defaultSrc e default-src. A regra aplica-se à maior parte das diretivas não especificadas.

# --instructions--

Neste exercício, use `helmet.contentSecurityPolicy()`. Configure-o adicionando um objeto `directives`. No objeto, defina o `defaultSrc` como `["'self'"]` (a lista de fontes permitidas deve estar em um array). Por padrão, para confiar apenas no endereço do seu site. Defina também a diretiva `scriptSrc` para que você só permita que os scripts sejam baixados do seu site (`'self'`), e do domínio `'trusted-cdn.com'`.

Dica: na palavra-chave `'self'`, as aspas simples são parte da própria palavra-chave. Por isso, é preciso que ele esteja envolvido em aspas duplas para poder funcionar.

# --hints--

O middleware helmet.contentSecurityPolicy() deve ser montado corretamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'csp');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A configuração do csp não está correta. defaultSrc deve ser ["'self'"] e scriptSrc deve ser ["self'", 'trusted-cdn.com']

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      var cspHeader = Object.keys(data.headers).filter(function (k) {
        return (
          k === 'content-security-policy' ||
          k === 'x-webkit-csp' ||
          k === 'x-content-security-policy'
        );
      })[0];
      assert.equal(
        data.headers[cspHeader],
        "default-src 'self'; script-src 'self' trusted-cdn.com"
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
