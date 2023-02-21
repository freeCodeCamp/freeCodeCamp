---
id: 587d7fb1367417b2b2512bf2
title: Verwende .env-Dateien
challengeType: 2
forumTopicId: 301521
dashedName: use-the--env-file
---

# --description--

Die `.env`-Datei ist eine versteckte Datei, mit der Umgebungsvariablen an eine Anwendung übergeben werden. Diese Datei wird versteckt – niemand außer dir kann auf diese zugreifen, mit ihr kannst du Daten speichern, die du privat oder versteckt halten möchtest. Beispielsweise kannst du API-Schlüssel externer Dienste, oder deine Datenbank-URL speichern. Zudem kannst du Konfigurationsmöglichkeiten speichern. Indem du Konfigurationsmöglichkeiten einstellst, veränderst du das Verhalten deiner Anwendung – ohne den Code umzuschreiben.

Die Umgebungsvariablen sind innerhalb der App unter `process.env.VAR_NAME` aufrufbar. Das `process.env`-Objekt ist ein globales Node-Objekt, Variablen werden als Strings übergeben. Konventionell werden die Variablennamen alle in Großbuchstaben geschrieben, wobei die Wörter durch einen Unterstrich getrennt werden. `.env` ist eine Shell-Datei, somit musst du Namen oder Werte nicht in Anführungszeichen setzen. Es ist auch wichtig zu beachten, dass um das Gleichheitszeichen kein Leerzeichen stehen darf, wenn du deinen Variablen Werte zuordnest – `VAR_NAME=value`. Normalerweise wird jede Variablendefinition in eine eigene Zeile gesetzt.

# --instructions--

Lass uns eine Umgebungsvariable als Konfigurationsoption setzen.

Erstelle eine `.env`-Datei im Hauptverzeichnis deines Projekts, speichere in dieser anschließend die Variabel `MESSAGE_STYLE=uppercase`.

Greife nun in dem `/json`-GET-Route-Handler, den du in der letzten Aufgabe erstellt hast, auf`process.env.MESSAGE_STYLE` zu und verwandle das Antwort-Objekt der `message` in Großbuchstaben, wenn die Variable `uppercase` entspricht. Das Antwortobjekt sollte entweder `{"message": "Hello json"}` oder `{"message": "HELLO JSON"}` sein, je nachdem welchen Wert du für `MESSAGE_STYLE` gesetzt hast. Note that you must read the value of `process.env.MESSAGE_STYLE` **inside** the route handler, not outside of it, due to the way our tests run.

**Hinweis:** Nutzt du Replit, kannst du keine `.env`-Datei erstellen. Benutze stattdessen den eingebauten <dfn>SECRETS</dfn>-Tab, um eine Variabel hinzuzufügen.

Wenn du lokal arbeitest, benötigst du das `dotenv`-Paket. Dieses lädt Umgebungsvariablen deiner `.env`-Datei in `process.env`. Das `dotenv`-Paket wurde bereits installiert und befindet sich in deiner `package.json`-Projektdatei. At the top of your `myApp.js` file, add `require('dotenv').config()` to load the environment variables.

# --hints--

Die Antwort deines `/json`-Endpunkts sollte – abhängig von deiner Umgebungsvariable `MESSAGE_STYLE` – variieren

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/use-env-vars').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'The response of "/json" does not change according to MESSAGE_STYLE'
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
