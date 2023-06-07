---
id: 587d7fb1367417b2b2512bf4
title: Encadear middleware para criar um servidor de tempo
challengeType: 2
forumTopicId: 301510
dashedName: chain-middleware-to-create-a-time-server
---

# --description--

O middleware pode ser montado em uma rota específica usando `app.METHOD(path, middlewareFunction)`. O middleware também pode ser encadeado nas definições de rota.

Observe o exemplo abaixo:

```js
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});
```

Esse método é útil para separar as operações de servidor em pedaços menores. Isso fornece uma melhor estrutura de aplicativo, além da possibilidade de reusar código em partes diferentes. Esse método também pode ser usado para realizar algumas validações de dados. Em cada ponto da pilha de middleware, você poderá bloquear a execução da cadeia atual e passar o controle para funções específicas criadas especificamente para gerenciar erros. Você também pode passar o controle para a próxima rota correspondente, para gerenciar casos especiais. Veremos como fazer isso na seção avançada do Express.

# --instructions--

Na rota `app.get('/now', ...)`, encadeie uma função middleware e o handler final. Na função middleware, você deverá adicionar o tempo atual no objeto de requisição na chave `req.time`. Você pode usar `new Date().toString()`. No gerenciador, responda com um objeto JSON, pegando a estrutura `{time: req.time}`.

**Observação:** o teste não vai passar se você não encadear o middleware. Se você montar a função em algum outro lugar, o teste vai falhar, mesmo que o resultado final esteja correto.

# --hints--

O endpoint (URL) /now deve ter o middleware montado

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/chain-middleware-time').then(
    (data) => {
      assert.equal(
        data.stackLength,
        2,
        '"/now" route has no mounted middleware'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

O endpoint `/now` deve retornar a hora atual.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/chain-middleware-time').then(
    (data) => {
      var now = new Date();
      assert.isAtMost(
        Math.abs(new Date(data.time) - now),
        20000,
        'the returned time is not between +- 20 secs from now'
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
