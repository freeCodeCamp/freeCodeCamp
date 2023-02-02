---
id: 587d7fb3367417b2b2512bfb
title: 'Utilizar o package.json, o centro de qualquer projeto do Node.js ou pacote npm'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

Trabalhar nesses desafios vai fazer com que você escreva seu código usando um dos seguintes métodos:

- Clone <a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">este repositório do GitHub</a> e complete esses desafios localmente.
- Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-npm" target="_blank" rel="noopener noreferrer nofollow">nosso projeto inicial do Replit</a> para completar esses desafios.
- Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Se você usa o Replit, siga estas etapas para configurar o projeto:

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para a solução no campo Solution Link.

O arquivo `package.json` é o centro de qualquer projeto do Node.js ou pacote do npm. It stores information about your project, similar to how the `head` section of an HTML document describes the content of a webpage. Ele consiste em um único objeto JSON, onde as informações são armazenadas em pares de chave-valor. There are only two required fields; `name` and `version`, but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.

If you look at the file tree of your project, you will find the `package.json` file on the top level of the tree. Este é o arquivo que você vai melhorar nos próximos desafios.

Uma das informações mais comuns neste arquivo é o campo `author`. Especifica quem criou o projeto e pode consistir em uma string ou um objeto com detalhes de contato ou outros. Um objeto é recomendado para projetos maiores, mas uma string simples como o exemplo a seguir já servirá para este projeto.

```json
"author": "Jane Doe",
```

# --instructions--

Add your name as the `author` of the project in the `package.json` file.

**Observação:** lembre-se de que você está escrevendo JSON. Então, todos os nomes de campos devem usar aspas duplas (") e ser separados por uma vírgula (,).

# --hints--

`package.json` should have a valid "author" key

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
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
