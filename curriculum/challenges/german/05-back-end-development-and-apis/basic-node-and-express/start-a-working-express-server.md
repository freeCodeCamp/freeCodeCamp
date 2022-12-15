---
id: 587d7fb0367417b2b2512bee
title: Starte einen funktionierenden Express-Server
challengeType: 2
forumTopicId: 301519
dashedName: start-a-working-express-server
---

# --description--

In den ersten zwei Zeilen der Datei `myApp.js` siehst du, wie einfach es ist, ein Objekt der Express-Bibliothek zu erzeugen. Dieses Objekt verfügt über verschiedene Methoden – in diesen Aufgaben lernst du mehrere dieser kennen. Eine grundlegende Methode ist hierbei `app.listen(port)`. Diese teilt deinen Server mit, auf einen bestimmten Port zu hören, und sich in den Zustand "running" zu begeben. Aus Testzwecken muss diese Anwendung im Hintergrund laufen – wir haben deshalb diese Methode in der Datei `server.js` für dich erstellt.

Lass uns unseren ersten String erstellen! In Express verwenden Routen die folgende Struktur: `app.METHOD(PATH, HANDLER)`. METHOD ist eine HTTP-Methode in Kleinbuchstaben. PATH ist ein relativer Pfad auf deinem Server (kann sowohl String als auch regulärer Ausdruck sein). HANDLER ist eine von Express aufgerufene Funktion, wenn auf die Route zugegriffen wird. Handler werden über das Format `function(req, res) {...}` verwendet – req ist hier das Anfragen- und res das Antwortobjekt. So wird dieser Handler beispielsweise

```js
function(req, res) {
  res.send('Response String');
}
```

den String 'Response String' zurückgeben.

# --instructions--

Benutze die `app.get()`-Methode, um den String "Hello Express" an GET Anfragen zu erstellen, die mit `/` (Hauptverzeichnis) übereinstimmen. Stelle über einen Blick auf die Logs sicher, dass dein Code funktioniert; siehe dann die Ergebnisse in der Vorschau ein – wenn du Replit verwendest.

**Hinweis:** Der gesamte Code für diese Lektionen sollte zwischen den wenigen Codezeilen eingefügt werden, mit denen du angefangen hast.

# --hints--

Deine App sollte die Zeichenfolge "Hello Express" ausgeben

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.equal(
        data,
        'Hello Express',
        'Your app does not serve the text "Hello Express"'
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
