---
id: 587d824f367417b2b2512c5a
title: Executar testes funcionais em uma resposta de API usando Chai-HTTP III - método PUT
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Ao testar uma solicitação de `PUT`, você geralmente envia dados com ela. Os dados que você inclui com sua solicitação de `PUT` são chamados de corpo (body) da solicitação.

Para enviar uma solicitação de `PUT` e um objeto JSON para o endpoint `'/travellers'`, você pode usar os métodos `put` e `send` do plugin `chai-http`:

```js
chai
  .request(server)
  .put('/travellers')
  .send({
    "surname": [last name of a traveller of the past]
  })
  ...
```

A rota responderá com:

```json
{
  "name": [first name],
  "surname": [last name],
  "dates": [birth - death years]
}
```

Consulte o código do servidor para ver as diferentes respostas para o endpoint `'/travellers'`.

# --instructions--

Em `tests/2_functional-tests.js`, altere o teste `'Send {surname: "Colombo"}'` (`// #3`) e use os métodos `put` e `send` para testar o endpoint  `'/travellers'`.

Envie o objeto JSON a seguir com a sua solicitação de PUT:

```json
{
  "surname": "Colombo"
}
```

Verifique o seguinte dentro da função de callback de `request.end`:

1.  O `status` deve ser `200`
2.  O `type` deve ser `application/json`
3.  O `body.name` deve ser `Cristoforo`
4.  O `body.surname` deve ser `Colombo`

Siga a ordem de declarações acima, pois dependemos disso. Além disso, não se esqueça de remover `assert.fail()` assim que o teste terminar.

# --hints--

Todos os testes devem passar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve testar se `res.status` será 200.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
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

Você deve testar se `res.type` será `'application/json'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.type');
      assert.match(data.assertions[1].args[1], /('|")application\/json\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve testar se `res.body.name` será `'Cristoforo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve testar se `res.body.surname` será `'Colombo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")Colombo\1/);
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
