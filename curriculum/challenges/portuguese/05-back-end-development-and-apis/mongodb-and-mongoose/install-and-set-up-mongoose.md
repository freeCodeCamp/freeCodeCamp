---
id: 587d7fb6367417b2b2512c06
title: Instalar e configurar o Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

Trabalhar nesses desafios vai fazer com que você escreva seu código usando um dos seguintes métodos:

- Clone <a href="https://github.com/freeCodeCamp/boilerplate-mongomongoose/" target="_blank" rel="noopener noreferrer nofollow">este repositório do GitHub</a> e complete esses desafios localmente.
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mongomongoose/" target="_blank" rel="noopener noreferrer nofollow">nosso projeto inicial no Gitpod</a> para completar esses desafios.
- Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Neste desafio, você vai configurar um banco de dados do MongoDB Atlas e importar os pacotes necessários para se conectar a ele.

Siga <a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' target="_blank" rel="noopener noreferrer nofollow">este tutorial</a> para configurar um banco de dados hospedado no MongoDB Atlas.

# --instructions--

`mongoose@^5.11.15` foi adicionado ao arquivo `package.json` do projeto. Primeiro, solicite o mongoose como `mongoose` no `myApp.js`. Depois, crie um arquivo `.env` e adicione uma variável `MONGO_URI` a ele. Esse valor deve ser o URI de banco de dados do MongoDB Atlas. Não se esqueça de cercar o URI com aspas simples ou duplas. Lembre-se de que você não pode usar espaços ao redor de `=` em variáveis de ambiente. Por exemplo, `MONGO_URI='VALUE'`.

Quando terminar, conecte-se ao banco de dados chamando o método `connect` dentro do seu arquivo `myApp.js` usando a seguinte sintaxe:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

A dependência "mongoose version ^5.11.15" deve estar no package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
      assert.match(
        packJson.dependencies.mongoose,
        /^\^5\.11\.15/,
        'Wrong version of "mongoose". It should be ^5.11.15'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

O "mongoose" deve estar conectado a um banco de dados

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(
    (data) => {
      assert.isTrue(data.isMongooseOk, 'mongoose is not connected');
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
