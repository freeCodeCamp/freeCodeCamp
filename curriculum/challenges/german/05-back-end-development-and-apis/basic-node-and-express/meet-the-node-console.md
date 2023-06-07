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
- Benutze <a href="https://replit.com/github/freeCodeCamp/boilerplate-express" target="_blank" rel="noopener noreferrer nofollow">unser Replit-Starterprojekt</a>, um die Aufgaben abzuschließen.
- Verwende einen Site-Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien von unserem GitHub-Repo zu integrieren.

Wenn du Replit verwendest, dann folge diesen Schritten, um das Projekt einzurichten:

-   Beginne, indem du das Projekt in Replit importierst.
-   Daraufhin wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` aus und klicke auf die `Done`-Schaltfläche.

Wenn du fertig bist, stelle sicher, dass eine funktionierende Demo deines Projekts an einem öffentlichen Ort gehostet wird. Then submit the URL to it in the Solution Link field.

Während des Entwicklungsprozesses ist es wichtig, überprüfen zu können, was in deinem Code passiert.

Node ist nur eine JavaScript-Umgebung. Wie bei JavaScript auf der Clientenseite kannst du die Konsole verwenden, um nützliche Debug-Informationen anzuzeigen. Auf deinem lokalen Rechner würdest du die Konsolenausgabe in einem Terminal sehen. Bei Replit ist im rechten Fensterbereich standardmäßig ein Terminal geöffnet.

Wir empfehlen, das Terminal während der Arbeit an diesen Aufgaben geöffnet zu lassen. Wenn du die Ausgabe im Terminal liest, kannst du eventuell auftretende Fehler erkennen.

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
