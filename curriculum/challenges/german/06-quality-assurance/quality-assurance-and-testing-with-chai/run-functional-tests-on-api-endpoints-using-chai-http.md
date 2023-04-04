---
id: 587d824e367417b2b2512c58
title: Funktionstests auf API-Endpunkten unter Verwendung von Chai-HTTP durchführen
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

Zur Erinnerung: Dieses Projekt baut auf dem folgenden Startprojekt auf, welches entweder auf <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> gefunden oder durch <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> geklont werden kann.

Mocha erlaubt es, asynchrone Vorgänge wie Aufrufe an API-Endpunkte mit einem Plugin namens `chai-http` zu testen.

Das Folgende ist ein Beispiel für einen Test, in dem `chai-http` für eine Suite namens `'GET /hello?name=[name] => "hello [name]"'` verwendet wird:

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

Der Test sendet eine `GET` Anfrage an den Server mit einem URL Query String als Namen (`?name=John`). In der Callback Funktion der `end` Methode, wird das Antwortobjekt (`res`) empfangen und enthält die `status` Eigenschaft.

Die erste `assert.equal` überprüft ob der Status gleich `200` ist. Die zweite `assert.equal` prüft, dass der Antwort-String (`res.text`) gleich `"hello John"` ist.

Beachte auch den Parameter `done` in der Callback-Funktion des Tests. Der Aufruf ohne Argument am Ende eines Tests ist notwendig, um zu signalisieren, dass der asynchrone Vorgang abgeschlossen ist.

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
