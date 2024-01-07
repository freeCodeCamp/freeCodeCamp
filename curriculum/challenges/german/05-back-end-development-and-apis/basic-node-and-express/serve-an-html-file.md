---
id: 587d7fb0367417b2b2512bef
title: Bereitstellen einer HTML-Datei
challengeType: 2
forumTopicId: 301516
dashedName: serve-an-html-file
---

# --description--

Du kannst auf Anfragen mit einer Datei antworten, indem du die Methode `res.sendFile(path)` verwendest. Du kannst sie im `app.get('/', ...)`-Route-Handler einfügen. Im Hintergrund setzt diese Methode die jeweiligen Header, um deinem Browser mitzuteilen, wie er die von dir gesendete Datei je nach Typ zu verarbeiten hat. Dann wird die Datei gelesen und gesendet. Diese Methode benötigt einen absoluten Dateipfad. Wir empfehlen dir, die globale Node-Variable `__dirname` zu verwenden, um den Pfad wie folgt zu berechnen:

```js
absolutePath = __dirname + '/relativePath/file.ext'
```

# --instructions--

Sende die `/views/index.html`-Datei als Antwort auf GET-Anfragen an den `/`-Pfad. Siehst du dir deine laufende Anwendung an, solltest du eine große HTML-Überschrift ohne angewandten Stil sehen (und ein Formular, welches wir später verwenden werden...).

**Hinweis:** Du kannst die Lösung der vorherigen Aufgabe bearbeiten oder eine neue erstellen. Wenn du eine neue Lösung erstellst, beachte, dass Express die Pfade von oben nach unten auswertet und den Handler für die erste Übereinstimmung ausführt. Du musst die vorangehende Lösung entkommentieren, sonst antwortet der Server weiterhin mit einem String.

# --hints--

Die Anwendung sollte die Datei views/index.html bereitstellen

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.match(
        data,
        /<h1>.*<\/h1>/,
        'Your app does not serve the expected HTML'
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
