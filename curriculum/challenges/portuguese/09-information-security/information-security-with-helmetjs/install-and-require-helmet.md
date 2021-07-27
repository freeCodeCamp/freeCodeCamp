---
id: 587d8247367417b2b2512c36
title: Instalar e solicitar o Helmet
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

Trabalhar nesses desafios irá fazer com que você escreva seu código usando um dos seguintes métodos:

- Clone [este repositório do GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) e complete esses desafios localmente.
- Use [nosso projeto inicial do Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) para completar esses desafios.
- Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para ela no campo `Solution Link`.

O Helmet ajuda você a proteger seus aplicativos do Express, definindo vários cabeçalhos HTTP.

# --instructions--

Todo o código para estas aulas vai para o arquivo `myApp.js` entre as linhas de código que fornecemos para você começar. Não altere nem exclua o código que adicionamos para você.

Instale a versão `3.21.3` do Helmet e, em seguida, solicite-a. Você pode instalar uma versão específica de um pacote com o `npm install --save-exact package@version` ou adicionando-a ao seu `package.json` diretamente.

# --hints--

A versão do `helmet` `3.21.3` deve estar no `package.json`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      const packJson = JSON.parse(data);
      const helmet = packJson.dependencies.helmet;
      assert(helmet === '3.21.3' || helmet === '^3.21.3');
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
