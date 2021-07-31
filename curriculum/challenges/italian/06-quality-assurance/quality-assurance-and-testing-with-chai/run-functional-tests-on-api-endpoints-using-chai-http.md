---
id: 587d824e367417b2b2512c58
title: Eseguire test funzionali sugli endpoint API utilizzando Chai-HTTP
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai), o clonato da [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

Mocha consente di testare operazioni asincrone. C'è una piccola (GRANDE) differenza. Riesce a individuarla?

Possiamo testare i nostri endpoint API utilizzando un plugin, chiamato `chai-http`. Vediamo come funziona. E ricorda, le chiamate API sono asincrone.

Il seguente è un esempio di test che utilizza `chai-http` per la suite `'GET /hello?name=[name] => "hello [name]"'`. Il test invia un nome in una stringa di query URL (`?name=John`) utilizzando una richiesta `GET` al `server`. Nella funzione di callback del metodo `end`, l'oggetto di risposta (`res`) viene ricevuto e contiene la proprietà `status`. Il primo `assert.equal` controlla se lo stato è pari a `200`. Il secondo `assert.equal` verifica che la stringa di risposta (`res.text`) sia uguale a `"hello John"`.

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

Nota il parametro `done` nella funzione di callback del test. Chiamarlo alla fine senza un argomento è necessario per segnalare il successo del completamento asincrono.

# --instructions--

All'interno di `tests/2_functional-tests.js`, modifica il test `'Test GET /hello with no name'` (`// #1`) per asserire che le risposte `status` e `text` facciano passare i test. Non alterare gli argomenti passati alle asserzioni.

Non ci dovrebbe essere alcun nome nella query; l'endpoint risponde con `hello Guest`.

# --hints--

Tutti i test dovrebbero essere superati

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

Dovresti verificare che 'res.status' == 200

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

Dovresti testare che 'res.text' == 'hello Guest'

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
