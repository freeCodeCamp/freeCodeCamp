---
id: 587d8250367417b2b2512c5d
title: Executar testes funcionais usando um navegador headless
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Na página, há um formulário de entrada. Ele envia dados para o endpoint de `PUT /travellers` como uma solicitação AJAX.

Quando a requisição é concluída com sucesso, o código do client anexa um `<div>` contendo a informação na resposta ao DOM.

Aqui está um exemplo de como usar o Zombie.js para interagir com o formulário:

```js
test('Submit the surname "Polo" in the HTML form', function (done) {
  browser.fill('surname', 'Polo').then(() => {
    browser.pressButton('submit', () => {
      browser.assert.success();
      browser.assert.text('span#name', 'Marco');
      browser.assert.text('span#surname', 'Polo');
      browser.assert.elements('span#dates', 1);
      done();
    });
  });
});
```

Primeiramente, o método `fill` do objeto `browser` preenche o campo `surname` do formulário com o valor `'Polo'`. `fill` retorna uma promise. Assim, `then` está encadeado a ela.

Na callback de `then`, o método `pressButton` do objeto `browser` é usado para invocar o listener de eventos `submit` do formulário. O método `pressButton` é assíncrono.

Então, assim que uma resposta é recebida da solicitação de AJAX, algumas afirmações são feitas confirmando:

1.  O status da resposta é `200`
2.  O texto dentro do elemento `<span id='name'></span>` corresponde a `'Marco'`
3.  O texto dentro do elemento `<span id='surname'></span>` corresponde a `'Polo'`
4.  Há `1` `<span id='dates'></span>` elemento.

Finalmente, a função de callback `done` é invocada, o que é necessário devido ao teste assíncrono.

# --instructions--

Em `tests/2_functional-tests.js`, no teste `'Submit the surname "Colombo" in the HTML form'` (`// #5`), automatize o seguinte:

1.  Preencha o formulário com o surname `Colombo`
2.  Pressione o botão Submit

Na callback `pressButton`:

1.  Avalie se o status é OK `200`
2.  Avalie se o texto dentro do elemento `span#name` é `'Cristoforo'`
3.  Avalie se o texto dentro do elemento `span#surname` é `'Colombo'`
4.  Avalie se o(s) elemento(s) `span#dates` existe(m) e sua contagem é `1`

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

Você deve avaliar se o texto dentro do elemento `span#name` é `'Cristoforo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
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

Você deve avaliar se o texto dentro do elemento `span#surname` é `'Colombo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
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

Você deve avaliar se o elemento `span#dates` existe e que sua contagem é 1.

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
