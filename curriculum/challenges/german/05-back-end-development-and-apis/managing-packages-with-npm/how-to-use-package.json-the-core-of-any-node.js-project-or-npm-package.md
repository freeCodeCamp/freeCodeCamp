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
- Benutze <a href="https://replit.com/github/freeCodeCamp/boilerplate-npm" target="_blank" rel="noopener noreferrer nofollow">unser Replit-Starterprojekt</a>, um diese Aufgabe fertigzustellen.
- Verwende einen Site-Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien von unserem GitHub-Repo zu integrieren.

Wenn du Replit verwendest, folge diesen Schritten, um das Projekt einzurichten:

-   Beginne, indem du das Projekt in Replit importierst.
-   Als nächstes wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` aus und klicke die `Done`-Schaltfläche.

Wenn du fertig bist, stelle sicher, dass eine funktionierende Demo deines Projekts irgendwo öffentlich gehostet wird. Then submit the URL to it in the Solution Link field.

Die `package.json`-Datei stellt das Zentrum eines Node.js-Projekts oder npm-Pakets dar. It stores information about your project, similar to how the `head` section of an HTML document describes the content of a webpage. Es besteht aus einem einzigen JSON-Objekt, in dem Informationen in Schlüssel-Wert-Paaren gespeichert sind. There are only two required fields; `name` and `version`, but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.

If you look at the file tree of your project, you will find the `package.json` file on the top level of the tree. Das ist die Datei, die du in den nächsten paar Aufgaben verbessern wirst.

Eine der häufigsten Angaben in dieser Datei stellt das `author`-Feld dar. Es gibt an, wer das Projekt erstellt hat, und kann aus einer Zeichenfolge oder einem Objekt mit Kontaktdaten oder anderen Informationen bestehen. Für größere Projekte wird ein Objekt empfohlen, aber eine einfache Zeichenfolge wie das folgende Beispiel ist für dieses Projekt ausreichend.

```json
"author": "Jane Doe",
```

# --instructions--

Add your name as the `author` of the project in the `package.json` file.

**Hinweis:** Denk daran, dass du JSON schreibst, daher müssen alle Feldnamen in doppelten Anführungszeichen (") gesetzt und durch ein Komma (,) getrennt werden.

# --hints--

`package.json` should have a valid "author" key

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
