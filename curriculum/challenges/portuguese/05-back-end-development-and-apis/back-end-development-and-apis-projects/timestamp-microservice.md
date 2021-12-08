---
id: bd7158d8c443edefaeb5bdef
title: Microsserviço de timestamp
challengeType: 4
forumTopicId: 301508
dashedName: timestamp-microservice
---

# --description--

Crie um aplicativo full stack em JavaScript que seja funcionalmente semelhante a este: <https://timestamp-microservice.freecodecamp.rocks/>. Trabalhar nesse projeto vai fazer com que você escreva seu código usando um dos seguintes métodos:

-   Clone [este repositório do GitHub](https://github.com/freeCodeCamp/boilerplate-project-timestamp/) e complete o projeto localmente.
-   Use [nosso projeto inicial do Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-timestamp) para completar o projeto.
-   Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para ela no campo `Solution Link`. Como opção, envie também um link para o código-fonte do projeto no campo `GitHub Link`.

**Observação:** a conversão de fusos horários não é um dos objetivos deste projeto, então suponha que todas as datas válidas enviadas serão analisadas com `new Date()` como datas GMT.

# --hints--

Você deve fornecer seu próprio projeto, não o exemplo de URL.

```js
(getUserInput) => {
  assert(
    !/.*\/timestamp-microservice\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Uma solicitação a `/api/:date?` com uma data válida deve retornar um objeto JSON com uma chave `unix`, que é um timestamp do Unix da data de entrada em milissegundos

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.unix,
        1482624000000,
        'Should be a valid unix timestamp'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Uma solicitação a `/api/:date?` com uma data válida deve retornar um objeto JSON com uma chave `utc` que é uma string da data de entrada no formato: `Thu, 01 Jan 1970 00:00:00 GMT`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.utc,
        'Sun, 25 Dec 2016 00:00:00 GMT',
        'Should be a valid UTC date string'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Uma solicitação a `/api/1451001600000` deve retornar `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/1451001600000').then(
    (data) => {
      assert(
        data.unix === 1451001600000 &&
          data.utc === 'Fri, 25 Dec 2015 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Seu projeto pode tratar as datas que podem ser analisadas com sucesso por `new Date(date_string)`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/05 October 2011, GMT').then(
    (data) => {
      assert(
        data.unix === 1317772800000 &&
          data.utc === 'Wed, 05 Oct 2011 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Se a string de data de entrada for inválida, a api retorna um objeto que tem a estrutura `{ error : "Invalid Date" }`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/this-is-not-a-date').then(
    (data) => {
      assert.equal(data.error.toLowerCase(), 'invalid date');
    },
    (xhr) => {
      assert(xhr.responseJSON.error.toLowerCase() === 'invalid date');
    }
  );
```

Um parâmetro de data vazia deve retornar o tempo atual em um objeto JSON com a chave `unix`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      assert.approximately(data.unix, now, 20000);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Um parâmetro de data vazia deve retornar o tempo atual em um objeto JSON com a chave `utc`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      var serverTime = new Date(data.utc).getTime();
      assert.approximately(serverTime, now, 20000);
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
