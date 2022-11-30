---
id: 587d7fb0367417b2b2512bef
title: Bereitstellen einer HTML-Datei
challengeType: 2
forumTopicId: 301516
dashedName: serve-an-html-file
---

# --description--

Du kannst auf Anfragen mit einer Datei antworten, indem du die Methode `res.sendFile(path)` verwendest. You can put it inside the `app.get('/', ...)` route handler. Behind the scenes, this method will set the appropriate headers to instruct your browser on how to handle the file you want to send, according to its type. Dann wird die Datei gelesen und gesendet. Diese Methode benötigt einen absoluten Dateipfad. Wir empfehlen dir, die globale Node-Variable `__dirname` zu verwenden, um den Pfad wie folgt zu berechnen:

```js
absolutePath = __dirname + relativePath/file.ext
```

# --instructions--

Sende die `/views/index.html`-Datei als Antwort auf GET-Anfragen an den `/`-Pfad. If you view your live app, you should see a big HTML heading (and a form that we will use later…), with no style applied.

**Note:** You can edit the solution of the previous challenge or create a new one. If you create a new solution, keep in mind that Express evaluates routes from top to bottom, and executes the handler for the first match. You have to comment out the preceding solution, or the server will keep responding with a string.

# --hints--

Your app should serve the file views/index.html

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
