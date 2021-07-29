---
id: 587d824e367417b2b2512c58
title: Executar testes funcionais no endpoint da API usando Chai-HTTP
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

Lembrando que este projeto está sento construído a partir do [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai), ou pose ser clonado no [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

O Mocha permite testar operações assíncronas. Há uma pequena (GRANDE) diferença. Você consegue identificar?

Podemos testar os endpoints de API usando um plugin, chamado `chai-http`. Vamos ver como isso funciona. E lembre-se: as chamadas de API são assíncronas.

A seguir, vemos um exemplo de um teste usando `chai-http` para a suite `'GET /hello?name=[name] => "hello [name]"'`. O teste envia uma string de nome em uma string de consulta de url (`?name=John`) usando uma solicitação de `GET` para o `server`. Na função de callback do método `end`, o objeto de resposta (`res`) é recebido e contém a propriedade `status`. O primeiro `assert.equal` verifica se o status é igual a `200`. O segundo `assert.equal` verifica se a string de resposta (`res.text`) é igual a `"hello John"`.

```js
suite('GET /hello?name=[name] => "hello [name]"', function () {
  test("?name=John", function (done) {
    chai
      .request(server)
      .get("/hello?name=John")
      .end(function (err, res) {
        assert.equal(res.status, 200, "response status should be 200");
        assert.equal(
          res.text,
          "hello John",
          'response should be "hello John"'
        );
        done();
      });
  });
```

Observe o parâmetro `done` na função de callback do teste. Chamá-la no final sem um argumento é necessário para sinalizar uma conclusão assíncrona bem-sucedida.

# --instructions--

Dentro de `tests/2_functional-tests.js`, altere o teste `'Test GET /hello with no name'` (`// #1`) para afirmar o `status` e a resposta `text` para fazer o teste passar. Não altere os argumentos passados às afirmações.

Não deve haver nome na consulta. O endpoint responde com `hello Guest`.

# --hints--

Todos os testes devem passar

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

Você deve testar se 'res.status' == 200

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

Você deve testar se 'res.text' == 'hello Guest'

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
