---
id: 587d7fb3367417b2b2512bfb
title: 'Wie man package.json, den Kern eines jeden Node.js-Projekts oder npm-Pakets, verwendet'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

Bei der Arbeit an diesen Aufgaben wirst du deinen Code mithilfe folgender Methoden schreiben:

- Klone <a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">diese GitHub-Repo</a> und schließe dein Projekt lokal ab.
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- Verwende einen Site-Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien von unserem GitHub-Repo zu integrieren.

Die `package.json`-Datei stellt das Zentrum eines Node.js-Projekts oder npm-Pakets dar. It stores information about your project. Es besteht aus einem einzigen JSON-Objekt, in dem Informationen in Schlüssel-Wert-Paaren gespeichert sind. There are only two required fields; `name` and `version`, but it’s good practice to provide additional information.

You can create the `package.json` file from the terminal using the `npm init` command. This will run a guided setup. Using `npm init` with the `-y` flag will generate the file without having it ask any questions, `npm init -y`.

Wenn du dir den Dateibaum deines Projekts ansiehst, wirst du die `package.json`-Datei auf der obersten Ebene des Baums finden. Das ist die Datei, die du in den nächsten paar Aufgaben verbessern wirst.

Eine der häufigsten Angaben in dieser Datei stellt das `author`-Feld dar. Es gibt an, wer das Projekt erstellt hat, und kann aus einer Zeichenfolge oder einem Objekt mit Kontaktdaten oder anderen Informationen bestehen. Für größere Projekte wird ein Objekt empfohlen, aber eine einfache Zeichenfolge wie das folgende Beispiel ist für dieses Projekt ausreichend.

```json
"author": "Jane Doe",
```

# --instructions--

Trage in der `package.json`-Datei deinen Namen als `author` des Projekts ein.

**Hinweis:** Denk daran, dass du JSON schreibst, daher müssen alle Feldnamen in doppelten Anführungszeichen (") gesetzt und durch ein Komma (,) getrennt werden.

If you are using Gitpod, make sure the app is running and the preview window is open. Copy the preview window's URL and paste it into the Solution Link input below.

# --hints--

`package.json` sollte über einen gültigen "Autor"-Schlüssel verfügen

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
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
