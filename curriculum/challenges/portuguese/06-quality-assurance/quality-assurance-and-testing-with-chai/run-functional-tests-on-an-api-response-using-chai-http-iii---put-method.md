---
id: 587d824f367417b2b2512c5a
title: Executar testes funcionais em uma resposta de API usando Chai-HTTP III - método PUT
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--

Lembrando que este projeto está sento construído a partir do [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai), ou pose ser clonado no [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

No próximo exemplo, veremos como enviar dados em uma payload de solicitação (corpo). Vamos testar uma solicitação de PUT. O endpoint `'/travellers'` aceita um objeto JSON que tem essa estrutura:

```json
{
  "surname": [last name of a traveller of the past]
}
```

A rota responde com:

```json
{
  "name": [first name], "surname": [last name], "dates": [birth - death years]
}
```

Veja o código do servidor para mais detalhes.

# --instructions--

Dentro de `tests/2_functional-tests.js`, altere o teste `'send {surname: "Colombo"}'` test (`// #3`):

Enviar a seguinte resposta JSON como payload:

```json
{
  "surname": "Colombo"
}
```

Verifique o seguinte, dentro da função de callback de `request.end`:

1.  `status`
2.  `type`
3.  `body.name`
4.  `body.surname`

Siga a ordem de declarações acima, pois dependemos disso. Não se esqueça de remover `assert.fail()` assim que o teste terminar.

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

Você deve testar se 'res.status' será 200.

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

Você deve testar se 'res.type' será 'application/json'.

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

Você deve testar se 'res.body.name' será 'Cristoforo'.

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

Você deve testar se 'res.body.surname' será 'Colombo'.

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
