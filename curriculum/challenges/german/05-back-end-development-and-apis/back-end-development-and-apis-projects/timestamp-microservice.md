---
id: bd7158d8c443edefaeb5bdef
title: Zeitstempel-Mikroservice
challengeType: 4
forumTopicId: 301508
dashedName: timestamp-microservice
---

# --description--

Erstelle eine vollständige JavaScript-Anwendung, die eine ähnliche Funktionalität wie <a href="https://timestamp-microservice.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://timestamp-microservice.freecodecamp.rocks</a> aufweist. Bei der Arbeit an diesem Projekt musst du deinen Code mit einer der folgenden Methoden schreiben:

-   Klone <a href="https://github.com/freeCodeCamp/boilerplate-project-timestamp/"  target="_blank" rel="noopener noreferrer nofollow">dieses GitHub-Repo</a> und schließe dein Projekt lokal ab.
-   Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-project-timestamp/"  target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete your project.
-   Verwende einen Site-Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien von unserem GitHub-Repo zu integrieren.

**Hinweis:** In diesem Projekt geht es nicht um die Umwandlung der Zeitzonen. Folglich kannst du davon ausgehen, dass alle gültigen Daten mit `new Date()` als GMT-Daten geparst werden.

# --hints--

Du solltest dein eigenes Projekt bereitstellen, nicht die Beispiel-URL.

```js
(getUserInput) => {
  assert(
    !/.*\/timestamp-microservice\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Eine Anfrage an `/api/:date?` mit einem gültigen Datum sollte ein JSON-Objekt mit einem `unix`-Schlüssel zurückgeben, bei dem es sich um ein Unix-Zeitstempel des Eingabedatums in Millisekunden (als Typ-Nummer) handelt

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.unix,
        1482624000000,
        'Should be a valid unix timestamp'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Eine Anfrage an `/api/:date?` mit einem gültigen Datum sollte ein JSON-Objekt mit einem `utc`-Schlüssel zurückgeben, bei dem es sich um einen String des Eingabedatums im Format: `Thu, 01 Jan 1970 00:00:00 GMT` handelt

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.utc,
        'Sun, 25 Dec 2016 00:00:00 GMT',
        'Should be a valid UTC date string'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Eine Anfrage an `/api/1451001600000` sollte `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }` zurückgeben

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/1451001600000').then(
    (data) => {
      assert(
        data.unix === 1451001600000 &&
          data.utc === 'Fri, 25 Dec 2015 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dein Projekt kann Daten verarbeiten, die erfolgreich von `new Date(date_string)` geparst werden können

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/05 October 2011, GMT').then(
    (data) => {
      assert(
        data.unix === 1317772800000 &&
          data.utc === 'Wed, 05 Oct 2011 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Wenn der String des Eingabedatums ungültig ist, gibt die API ein Objekt mit der Struktur `{ error : "Invalid Date" }` zurück

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/this-is-not-a-date').then(
    (data) => {
      assert.equal(data.error.toLowerCase(), 'invalid date');
    },
    (xhr) => {
      assert(xhr.responseJSON.error.toLowerCase() === 'invalid date');
    }
  );
```

Ein leerer Datumsparameter sollte die aktuelle Uhrzeit in einem JSON-Objekt mit einem `unix`-Schlüssel zurückgeben

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      assert.approximately(data.unix, now, 20000);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Ein leerer Datumsparameter sollte die aktuelle Uhrzeit in einem JSON-Objekt mit einem `utc`-Schlüssel zurückgeben

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      var serverTime = new Date(data.utc).getTime();
      assert.approximately(serverTime, now, 20000);
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
