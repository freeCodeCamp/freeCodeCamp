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
- Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose" target="_blank" rel="noopener noreferrer nofollow">nosso projeto inicial do Replit</a> para completar esses desafios.
- Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para ela no campo `Solution Link`.

Neste desafio, você vai configurar um banco de dados do MongoDB Atlas e importar os pacotes necessários para se conectar a ele.

Siga <a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' target="_blank" rel="noopener noreferrer nofollow">este tutorial</a> para configurar um banco de dados hospedado no MongoDB Atlas.

# --instructions--

Adicione `mongodb@~3.6.0` e `mongoose@~5.4.0` ao `package.json` do projeto. Depois, solicite o mongoose como `mongoose` no `myApp.js`. Crie um arquivo `.env` e adicione uma variável `MONGO_URI` a ele. Esse valor deve ser o URI de banco de dados do MongoDB Atlas. Não se esqueça de cercar o URI com aspas simples ou duplas. Lembre-se de que você não pode usar espaços ao redor de `=` em variáveis de ambiente. Por exemplo, `MONGO_URI='VALUE'`.

**Observação:** se você estiver usando o Replit, você não poderá criar um arquivo `.env`. Em vez disso, use a aba embutida <dfn>SECRETS</dfn> para adicionar a variável. <em>Não</em> circule os valores com aspas ao usar a aba <em>SECRETS</em>.

Quando terminar, conecte-se ao banco de dados utilizando a seguinte sintaxe:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

A dependência "mongodb version ~3.6.0" deve estar no package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongodb')
      assert.match(
        packJson.dependencies.mongodb,
        /^\~3\.6\.0/,
        'Wrong version of "mongodb". It should be ~3.6.0'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A dependência "mongoose version ~5.4.0" deve estar no package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
      assert.match(
        packJson.dependencies.mongoose,
        /^\~5\.4\.0/,
        'Wrong version of "mongoose". It should be ~5.4.0'
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
