---
id: 587d7fb0367417b2b2512bed
title: Lerne Node console kennen
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

Bei der Arbeit an diesen Aufgaben wirst du deinen Code mithilfe folgender Methoden schreiben:

- Klone <a href="https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">diese GitHub-Repo</a> und schließe dein Projekt lokal ab.
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- Verwende einen Site-Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien von unserem GitHub-Repo zu integrieren.

Während des Entwicklungsprozesses ist es wichtig, überprüfen zu können, was in deinem Code passiert.

Node ist nur eine JavaScript-Umgebung. Wie bei JavaScript auf der Clientenseite kannst du die Konsole verwenden, um nützliche Debug-Informationen anzuzeigen. Auf deinem lokalen Rechner würdest du die Konsolenausgabe in einem Terminal sehen. On Gitpod, a terminal is open at the bottom of the editor by default.

Wir empfehlen, das Terminal während der Arbeit an diesen Aufgaben geöffnet zu lassen. Wenn du die Ausgabe im Terminal liest, kannst du eventuell auftretende Fehler erkennen.

The server must be restarted after making changes to its files.

You can stop the server from the terminal using `Ctrl + C` and start it using Node directly (`node mainEntryFile.js`) or using a run script in the `package.json` file with `npm run`.

For example, the `"start": "node server.js"` script would be run from the terminal using `npm run start`.

To implement server auto restarting on file save Node provides the `--watch` flag you can add to your start script `"start": "node --watch server.js"` or you can install an npm package like `nodemon`. We will leave this to you as an exercise.

# --instructions--

Ändere die `myApp.js`-Datei, um "Hello World" auf der Konsole zu protokollieren.

# --hints--

`"Hello World"` sollte in der Konsole erscheinen

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
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
