---
id: 587d824e367417b2b2512c58
title: Eseguire test funzionali sugli endpoint API utilizzando Chai-HTTP
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonato da <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Mocha consente di testare le operazioni asincrone come le chiamate agli endpoint API con un plugin chiamato `chai-http`.

Il seguente esempio è un esempio di test che utilizza `chai-http` per una suite chiamata `'GET /hello?name=[name] => "hello [name]"'`:

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

Il test invia una richiesta `GET` al server con un nome come stringa di ricerca URL (`?name=John`). Nella funzione di callback del metodo `end`, l'oggetto di risposta (`res`) viene ricevuto e contiene la proprietà `status`.

Il primo `assert.equal` controlla se lo stato è pari a `200`. Il secondo `assert.equal` verifica che la stringa di risposta (`res.text`) sia uguale a `"hello John"`.

Inoltre, nota il parametro `done` nella funzione di callback del test. Chiamarlo senza un argomento alla fine di un test è necessario per segnalare che l'operazione asincrona è completa.

Infine, nota il metodo `keepOpen` subito dopo il metodo `request`. Normalmente si eseguono i test dalla riga di comando, o come parte di un processo di integrazione automatica, e potresti lasciare che sia `chai-http` ad avviare e fermare automaticamente il server.

Tuttavia, i test che vengono eseguiti quando si invia il link al progetto richiedono che il server sia in funzione, quindi devi utilizzare il metodo `keepOpen` per impedire a `chai-http` di fermare il server.

# --instructions--

All'interno di `tests/2_functional-tests.js`, modifica il test `'Test GET /hello with no name'` (`// #1`) per asserire che lo `status` e il `text` della risposta facciano passare i test. Non cambiare gli argomenti passati alle asserzioni.

Non ci dovrebbe essere una query URL. Senza un nome nella query URL, l'endpoint risponde con `hello Guest`.

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
