---
id: 589690e6f9fc0f352b528e6e
title: Ordne dein Projekt mit Modulen
challengeType: 2
forumTopicId: 301549
dashedName: clean-up-your-project-with-modules
---

# --description--

Im Moment ist alles, was du hast, in deiner `server.js`-Datei. Dies kann dazu führen, dass der Code schwer zu verwalten und nicht erweiterbar ist. Erstelle 2 neue Dateien: `routes.js` und `auth.js`

Beide sollten mit folgendem Code beginnen:

```js
module.exports = function (app, myDataBase) {

}
```

In der obersten Datei deines Servers musst du diese Dateien wie folgt angeben: `const routes = require('./routes.js');` Nachdem du eine erfolgreiche Verbindung mit der Datenbank hergestellt hast, instanziiere jede dieser Dateien wie folgt: `routes(app, myDataBase)`

Schließlich füge jeden Pfad auf deinem Server in die neuen Dateien ein und entfernen sie aus der Serverdatei. Verwende die Funktion `ensureAuthenticated`, da sie speziell für das Routing entwickelt wurde. Jetzt musst du die Abhängigkeiten korrekt hinzufügen, in denen verwendet wird, wie zum Beispiel `const passport = require('passport');`, ganz oben, oberhalb der Exportlinie in deinen `routes.js` Datei.

Keep adding them until no more errors exist, and your server file no longer has any routing (**except for the route in the catch block**)!

Do the same thing in your `auth.js` file with all of the things related to authentication such as the serialization and the setting up of the local strategy and erase them from your server file. Be sure to add the dependencies in and call `auth(app, myDataBase)` in the server in the same spot.

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#clean-up-your-project-with-modules-2" target="_blank" rel="noopener noreferrer nofollow">check out an example of the completed project</a>.

# --hints--

Module sollten vorhanden sein.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require\s*\(('|")\.\/routes(\.js)?\1\)/gi,
    'You should have required your new files'
  );
  assert.match(
    data,
    /client\s*\.db[^]*routes/gi,
    'Your new modules should be called after your connection to the database'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
