---
id: 587d824f367417b2b2512c5a
title: Funktionstests für eine API-Antwort mit Chai-HTTP III - PUT-Methode durchführen
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--

Zur Erinnerung: Dieses Projekt baut auf dem folgenden Startprojekt auf, welches entweder auf <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> gefunden oder durch <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> geklont werden kann.

Wenn du eine `PUT`-Anfrage testest, sendest du oft auch Daten mit. Die Daten, die du in deine `PUT`-Anfrage einfügst, nennt man den Body der Anfrage.

Um eine `PUT` Anfrage und ein JSON Objekt an den `'/travellers'` Endpunkt zu senden, kannst du `chai-http` Plugins `put` und `send` Methoden verwenden:

```js
chai
  .request(server)
  .put('/travellers')
  .send({
    "surname": [last name of a traveller of the past]
  })
  ...
```

Und der Pfad antwortet mit:

```json
{
  "name": [first name],
  "surname": [last name],
  "dates": [birth - death years]
}
```

Sieh dir den Servercode für die verschiedenen Antworten auf den Endpunkt `'/travellers'` an.

# --instructions--

Innerhalb `tests/2_functional-tests.js`, ändere den `'Send {surname: "Colombo"}'` Test (`// #3`) und verwende die `put` und `send` Methoden, um den `'/travellers'` Endpunkt zu testen.

Sende das folgende JSON-Objekt mit deiner PUT-Anfrage:

```json
{
  "surname": "Colombo"
}
```

Überprüfe, ob der `request.end` Callback Folgendes enthält:

1.  Der `status` sollte `200` betragen
2.  Der `type` sollte `application/json` sein
3.  Der `body.name` sollte `Cristoforo` sein
4.  Der `body.surname` sollte `Colombo` sein

Folge der obigen Behauptungsreihenfolge - wir benötigen sie. Stelle außerdem sicher, dass du `assert.fail()` nach der Fertigstellung entfernst.

# --hints--

Alle Tests sollten bestanden werden.

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

Du solltest testen ob der `res.status` 200 beträgt.

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

Du solltest testen ob `res.type` Folgendes ist: `'application/json'`.

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

Du solltest testen ob `res.body.name` Folgendes ist: `'Cristoforo'`.

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

Du solltest testen ob `res.body.surname` Folgendes ist: `'Colombo'`.

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
