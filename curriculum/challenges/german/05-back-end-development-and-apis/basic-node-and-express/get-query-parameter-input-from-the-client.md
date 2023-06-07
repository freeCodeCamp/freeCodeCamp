---
id: 587d7fb2367417b2b2512bf6
title: Erhalte den Input der Query-Parameter vom Nutzer
challengeType: 2
forumTopicId: 301512
dashedName: get-query-parameter-input-from-the-client
---

# --description--

Eine weitere gängige Methode, um Eingaben vom Nutzer zu erhalten, ist die Kodierung der Daten nach dem Routenpfad unter Verwendung eines Abfrage-Strings. Der Query-String wird durch ein Fragezeichen (?) begrenzt und enthält Feld=Wert-Paare. Jedes Paar ist durch ein kaufmännisches Und-Zeichen (&) getrennt. Express kann die Daten aus dem Query-String auswerten und das Objekt `req.query` füllen. Einige Zeichen, wie z. B. das Prozentzeichen (%), können nicht in URLs enthalten sein und müssen in einem anderen Format kodiert werden, bevor man sie senden kann. Wenn du die API von JavaScript verwendest, kannst du bestimmte Methoden zur Kodierung/Dekodierung dieser Zeichen einsetzen.

<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&#x26;bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

Erstelle einen API-Endpunkt, der unter `GET /name` eingebunden ist. Antworte mit einem JSON-Dokument, indem du die Struktur `{ name: 'firstname lastname'}` verwendest. Die Parameter Vor- und Nachname sollten in einem Query-String kodiert werden, z. B. `?first=firstname&last=lastname`.

**Hinweis:** In der folgenden Übung wirst du Daten von einer POST-Anfrage erhalten, und zwar über denselben `/name`-Routenpfad. Wenn du möchtest, kannst du die folgende Methode verwenden `app.route(path).get(handler).post(handler)`. Mit dieser Syntax kannst du verschiedene Verb-Handler auf demselben Pfad verketten. Du kannst dir ein wenig Tipparbeit sparen und du erhälst einen sauberen Code.

# --hints--

Test 1: Dein API-Endpunkt sollte mit `{ "name": "Mick Jagger" }` antworten, wenn der `/name`-Endpunkt mit `?first=Mick&last=Jagger` aufgerufen wird

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?first=Mick&last=Jagger').then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Test 2: Dein API-Endpunkt sollte mit `{ "name": "Keith Richards" }` anworten, wenn der `/name`-Endpunkt mit `?first=Keith&last=Richards` aufgerufen wird

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?last=Richards&first=Keith').then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "GET /name" route does not behave as expected'
      );
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
