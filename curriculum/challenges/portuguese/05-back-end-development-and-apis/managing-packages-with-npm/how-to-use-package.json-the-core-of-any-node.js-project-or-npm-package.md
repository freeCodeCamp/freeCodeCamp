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
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">nosso projeto inicial no Gitpod</a> para completar esses desafios.
- Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

O arquivo `package.json` é o centro de qualquer projeto do Node.js ou pacote do npm. It stores information about your project. Ele consiste em um único objeto JSON, onde as informações são armazenadas em pares de chave-valor. There are only two required fields; `name` and `version`, but it’s good practice to provide additional information.

You can create the `package.json` file from the terminal using the `npm init` command. This will run a guided setup. Using `npm init` with the `-y` flag will generate the file without having it ask any questions, `npm init -y`.

Se você olhar a árvore de arquivos do projeto, você encontrará o arquivo `package.json` no nível superior da árvore. Este é o arquivo que você vai melhorar nos próximos desafios.

Uma das informações mais comuns neste arquivo é o campo `author`. Especifica quem criou o projeto e pode consistir em uma string ou um objeto com detalhes de contato ou outros. Um objeto é recomendado para projetos maiores, mas uma string simples como o exemplo a seguir já servirá para este projeto.

```json
"author": "Jane Doe",
```

# --instructions--

Adicione seu nome como o `author` do projeto no arquivo `package.json`.

**Observação:** lembre-se de que você está escrevendo JSON. Então, todos os nomes de campos devem usar aspas duplas (") e ser separados por uma vírgula (,).

Se estiver usando o Gitpod, verifique se a aplicação está sendo executada e se a janela de visualização está aberta. Copie o URL da janela de visualização e cole-a na entrada do link de solução abaixo.

# --hints--

O `package.json` deve ter uma chave "author" válida

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
