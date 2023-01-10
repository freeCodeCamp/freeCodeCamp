---
id: 587d824f367417b2b2512c5b
title: Executar testes funcionais em uma resposta de API usando Chai-HTTP IV - método PUT
challengeType: 2
forumTopicId: 301591
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iv---put-method
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Este exercício é semelhante ao anterior.

Agora que você sabe como testar uma solicitação de `PUT`, é sua vez de fazer isso do zero.

# --instructions--

Em `tests/2_functional-tests.js`, altere o teste `'Send {surname: "da Verrazzano"}'` (`// #4`) e use os métodos `put` e `send` para testar o endpoint  `'/travellers'`.

Envie o objeto JSON a seguir com a sua solicitação de PUT:

```json
{
  "surname": "da Verrazzano"
}
```

Verifique o seguinte dentro da função de callback de `request.end`:

1.  O `status` deve ser `200`
2.  O `type` deve ser `application/json`
3.  O `body.name` deve ser `Giovanni`
4.  O `body.surname` deve ser `da Verrazzano`

Siga a ordem de declarações acima, pois dependemos disso. Além disso, não se esqueça de remover `assert.fail()` assim que o teste terminar.

# --hints--

Todos os testes devem passar

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve testar que `res.status` seja 200

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
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

Você deve testar se `res.type` será `'application/json'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
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

Você deve testar se `res.body.name` será `'Giovanni'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Giovanni\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve testar se `res.body.surname` será `'da Verrazzano'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")da Verrazzano\1/);
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
