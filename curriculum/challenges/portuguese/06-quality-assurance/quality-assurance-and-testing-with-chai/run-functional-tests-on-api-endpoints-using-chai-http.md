---
id: 587d824e367417b2b2512c58
title: Executar testes funcionais no endpoint da API usando Chai-HTTP
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

O Mocha permite que você teste operações assíncronas, como chamadas para endpoints de API, com um plugin chamado `chai-http`.

A seguir, vemos um exemplo de um teste usando `chai-http` para a suite chamada `'GET /hello?name=[name] => "hello [name]"'`:

```js
suite('GET /hello?name=[name] => "hello [name]"', function () {
  test('?name=John', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/hello?name=John')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.text, 'hello John', 'Response should be "hello John"');
        done();
      });
  });
});
```

O teste envia uma solicitação de `GET` para o servidor com um nome (name) como a string de consulta do URL (`?name=John`). Na função de callback do método `end`, o objeto de resposta (`res`) é recebido e contém a propriedade `status`.

O primeiro `assert.equal` verifica se o status é igual a `200`. O segundo `assert.equal` verifica se a string de resposta (`res.text`) é igual a `"hello John"`.

Além disso, observe o parâmetro `done` na função de callback do teste. Chamá-la sem um argumento no final de um teste é necessário para sinalizar que a operação assíncrona está completa.

Finally, note the `keepOpen` method just after the `request` method. Normally you would run your tests from the command line, or as part of an automated integration process, and you could let `chai-http` start and stop your server automatically.

However, the tests that run when you submit the link to your project require your server to be up, so you need to use the `keepOpen` method to prevent `chai-http` from stopping your server.

# --instructions--

Within `tests/2_functional-tests.js`, alter the `'Test GET /hello with no name'` test (`// #1`) to assert the `status` and the `text` of the response to make the test pass. Do not alter the arguments passed to the asserts.

There should be no URL query. Without a name URL query, the endpoint responds with `hello Guest`.

# --hints--

All tests should pass

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should test for `res.status` == 200

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'equal');
      assert.equal(data.assertions[0].args[0], 'res.status');
      assert.equal(data.assertions[0].args[1], '200');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should test for `res.text` == `'hello Guest'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.text');
      assert.match(data.assertions[1].args[1], /('|")hello Guest\1/);
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
