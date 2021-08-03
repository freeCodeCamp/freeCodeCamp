---
id: 587d8250367417b2b2512c5d
title: Executar testes funcionais usando um navegador headless
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

Lembrando que este projeto está sendo construído a partir do [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai), ou pose ser clonado no [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

Na visualização principal em HTML, fornecemos um formulário de entrada. Ele envia dados para o endpoint de `PUT /travellers` que usamos acima com uma solicitação Ajax. Quando a requisição é concluída com sucesso, o código do cliente anexa um `<div>` contendo a informação retornada pela chamada ao DOM. Aqui está um exemplo de como interagir com este formulário:

```js
test('#test - submit the input "surname" : "Polo"', function (done) {
  browser.fill('surname', 'Polo').pressButton('submit', function () {
    browser.assert.success();
    browser.assert.text('span#name', 'Marco');
    browser.assert.text('span#surname', 'Polo');
    browser.assert.elements('span#dates', 1);
    done();
  });
}
```

Primeiramente, o método `fill` do objeto `browser` preenche o campo `surname` do formulário com o valor `'Polo'`. Imediatamente depois, o método `pressButton` invoca o listener de evento `submit` do formulário. O método `pressButton` é assíncrono.

Então, assim que uma resposta é recebida da solicitação de AJAX, algumas afirmações são feitas confirmando:

1.  O status da resposta é `200`
2.  O texto dentro do elemento `<span id='name'></span>` corresponde a `'Marco'`
3.  O texto dentro do elemento `<span id='surname'></span>` corresponde a `'Polo'`
4.  Há `1` `<span id='dates'></span>` elemento.

Finalmente, a função de callback `done` é invocada, o que é necessário devido ao teste assíncrono.

# --instructions--

Dentro de `tests/2_functional-tests.js`, no teste `'submit "surname" : "Colombo" - write your e2e test...'` (`// #5`), automatize o preenchimento e o envio do formulário:

1.  Preencha o formulário
2.  Envie-o pressionando o botão `'submit'`.

Dentro da função de callback:

1.  avalie se o status é OK `200`
2.  avalie se o texto dentro do elemento `span#name` é `'Cristoforo'`
3.  avalie se o texto dentro do elemento `span#surname` é `'Colombo'`
4.  avalie se o(s) elemento(s) `span#dates` existe(m) e sua contagem é `1`

Não se esqueça de remover a chamada `assert.fail()`.

# --hints--

Todos os testes devem passar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
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
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'browser.success');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve avaliar se o texto dentro do elemento 'span#name' é 'Cristoforo'.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'browser.text');
      assert.match(data.assertions[1].args[0], /('|")span#name\1/);
      assert.match(data.assertions[1].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve avaliar se o texto dentro do elemento 'span#surname' é 'Colombo'.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'browser.text');
      assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
      assert.match(data.assertions[2].args[1], /('|")Colombo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Você deve avaliar se o elemento 'span#dates' existe e que sua contagem é 1.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
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
