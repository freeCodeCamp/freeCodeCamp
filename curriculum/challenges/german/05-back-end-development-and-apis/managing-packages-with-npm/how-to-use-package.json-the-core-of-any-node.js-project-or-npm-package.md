---
id: 587d7fb3367417b2b2512bfb
title: 'How to Use package.json, the Core of Any Node.js Project or npm Package'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

Bei der Bearbeitung dieser Aufgaben musst du deinen Code nach einer der folgenden Methoden schreiben:

- Clone <a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">this GitHub repo</a> and complete these challenges locally.
- Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-npm" target="_blank" rel="noopener noreferrer nofollow">our Replit starter project</a> to complete these challenges.
- Verwende einen Site-Builder deiner Wahl, um das Projekt fertigzustellen. Be sure to incorporate all the files from our GitHub repo.

Wenn du fertig bist, stelle sicher, dass dein Projekt öffentlich zugänglich gehostet ist. Gib dann die URL in das `Solution Link`-Feld ein.

The `package.json` file is the center of any Node.js project or npm package. Es speichert Informationen über dein Projekt, ähnlich wie der Abschnitt &lt;head> eines HTML-Dokuments den Inhalt einer Webseite beschreibt. Es besteht aus einem einzigen JSON-Objekt, in dem Informationen in Schlüssel-Wert-Paaren gespeichert sind. Es gibt nur zwei Pflichtfelder: "name" und "version". Es ist jedoch empfehlenswert, zusätzliche Informationen über dein Projekt anzugeben, die für zukünftige Benutzer oder Maintainer nützlich sein könnten.

Wenn du dir den Dateibaum deines Projekts ansiehst, wirst du die Datei package.json auf der obersten Ebene des Baums finden. This is the file that you will be improving in the next couple of challenges.

One of the most common pieces of information in this file is the `author` field. Sie gibt an, wer das Projekt erstellt hat, und kann aus einem String oder einem Objekt mit Kontakt- oder anderen Informationen bestehen. Für größere Projekte wird ein Objekt empfohlen, aber ein einfacher String wie das folgende Beispiel ist für dieses Projekt ausreichend.

```json
"author": "Jane Doe",
```

# --instructions--

Add your name as the `author` of the project in the package.json file.

**Hinweis:** Denk daran, dass du JSON schreibst, daher müssen alle Feldnamen in Anführungszeichen (") gesetzt und durch ein Komma (,) getrennt werden.

# --hints--

package.json should have a valid "author" key

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
