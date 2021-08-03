---
id: 5f8884f4c46685731aabfc41
title: Executar testes funcionais usando um navegador headless II
challengeType: 2
forumTopicId: 301594
dashedName: run-functional-tests-using-a-headless-browser-ii
---

# --description--

Lembrando que este projeto está sendo construído a partir do [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai), ou pose ser clonado no [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

# --instructions--

Dentro de `tests/2_functional-tests.js`, no teste `'submit "surname" : "Vespucci" - write your e2e test...'` (`// #6`), automatize o preenchimento e o envio do formulário desde o início:

1.  Preencha o formulário com o `surname` `Vespucci`
2.  Envie-o pressionando o botão `'submit'`

Dentro da função de callback:

1.  avalie se o status é `200`
2.  avalie se o texto dentro do elemento `span#name` é `'Amerigo'`
3.  avalie se o texto dentro do elemento `span#surname` é `'Vespucci'`
4.  avalie se o(s) elemento(s) `span#dates` existe(m) e sua contagem é `1`

Não se esqueça de remover a chamada `assert.fail()`.

# --hints--

Todos os testes devem passar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve avaliar se a solicitação do navegador headless foi bem-sucedida.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'browser.success');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve avaliar se o texto dentro do elemento 'span#name' é 'Amerigo'.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'browser.text');
      assert.match(data.assertions[1].args[0], /('|")span#name\1/);
      assert.match(data.assertions[1].args[1], /('|")Amerigo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve avaliar se o texto dentro do elemento 'span#surname' é 'Vespucci'.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'browser.text');
      assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
      assert.match(data.assertions[2].args[1], /('|")Vespucci\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve avaliar se o elemento 'span#dates' existe e que sua contagem é 1.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'browser.elements');
      assert.match(data.assertions[3].args[0], /('|")span#dates\1/);
      assert.equal(data.assertions[3].args[1], 1);
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
