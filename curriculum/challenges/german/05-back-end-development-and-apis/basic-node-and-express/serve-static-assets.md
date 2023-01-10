---
id: 587d7fb0367417b2b2512bf0
title: Bereitstellen von statischen Assets
challengeType: 2
forumTopicId: 301518
dashedName: serve-static-assets
---

# --description--

Ein HTML-Server verfügt normalerweise über ein oder mehr Verzeichnisse, die vom Nutzer zugänglich sind. Hier kannst du jene Assets platzieren, die von deiner Anwendung benötigt werden (Stylesheets, Skripte, Bilder).

Mit Express kannst du von dieser Funktion mit der Middleware `express.static(path)` Gebrauch machen – der `path`-Parameter ist hier der absolute Pfad, in dem sich die Assets befinden.

Wenn du nicht weißt, was Middleware ist... keine Sorge, wir werden das noch im Detail besprechen. Ganz allgemein sind Middleware Funktionen, die sich in Route-Handler zwischenschalten und Informationen hinzufügen. Eine Middleware wird mit der Methode `app.use(path, middlewareFunction)` aufgesetzt. Hierbei ist das erste `path`-Argument optional. Übergibst du dieses nicht, wird die Middleware für alle Anfragen ausgeführt.

# --instructions--

Setze eine `express.static()`-Middleware für den Pfad `/public` mit `app.use()` auf. Der absolute Pfad zum Assets-Ordner ist `__dirname + /public`.

Jetzt sollte deine Anwendung ein CSS-Stylesheet liefern können. Beachte, dass die `/public/style.css`-Datei in  der `/views/index.html` in der Projekt-Boilerplate verwendet wird. Nun sollte deine Startseite bereits ein wenig besser aussehen!

# --hints--

Deine Anwendung sollte Asset-Dateien des `/public`-Verzeichnisses an den `/public`-Pfad liefern

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/style.css').then(
    (data) => {
      assert.match(
        data,
        /body\s*\{[^\}]*\}/,
        'Your app does not serve static assets'
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
