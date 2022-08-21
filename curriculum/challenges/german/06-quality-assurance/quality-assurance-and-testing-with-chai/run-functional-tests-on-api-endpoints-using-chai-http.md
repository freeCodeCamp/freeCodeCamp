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

# --instructions--

Innerhalb von `tests/2_functional-tests.js`, ändere `'Test GET /hello with no name'` Test (`// #1`) um den `status` und den `text` der Antwort geltend zu machen, um en Test zu bestehen. Die an die Asserts übergebenen Argumente dürfen nicht verändert werden.

Es sollte keine URL Query geben. Ohne eine Namens-URL-Abfrage antwortet der Endpunkt mit `hello Guest`.

# --hints--

Alle Tests sollten bestanden werden

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

Du solltest auf `res.status` == 200 testen

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

Du solltest auf `res.text` == `'hello Guest'` testen

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
