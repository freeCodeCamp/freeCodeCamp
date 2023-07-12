---
id: 5895f70df9fc0f352b528e68
title: Authentifizierungsmöglichkeiten
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

Eine Strategie ist eine Möglichkeit, einen Benutzer zu authentifizieren. Du kannst eine Strategie anwenden, die es Nutzern ermöglicht, sich entweder auf Grundlage lokal gespeicherter Informationen zu authentifizieren (sofern sie sich zuerst registrieren) oder mithilfe verschiedener Anbieter wie Google oder GitHub. Für dieses Projekt werden wir die Passport-Middleware verwenden. Passport bietet eine umfassende Reihe von Strategien, die die Authentifizierung mit einem Benutzernamen und Passwort, GitHub, Google und mehr unterstützen.

`passport-local@~1.0.0` ist bereits als Abhängigkeit hinzugefügt worden. Füge ihn wie folgt zu Ihrem Server hinzu:

```javascript
const LocalStrategy = require('passport-local');
```

Teile Passport mithilfe von **use** mit, ein instanziiertes `LocalStrategy`-Objekt mit bestimmten Einstellungen zu verwenden. Vergewissere dich, dass dies (wie auch alles andere ab jetzt) in der Datenbankverbindung gekapselt ist, da sie davon abhängt!:

```javascript
passport.use(new LocalStrategy((username, password, done) => {
  myDataBase.findOne({ username: username }, (err, user) => {
    console.log(`User ${username} attempted to log in.`);
    if (err) return done(err);
    if (!user) return done(null, false);
    if (password !== user.password) return done(null, false);
    return done(null, user);
  });
}));
```

Hier wird der Prozess definiert, der verwendet werden soll, wenn du versuchst, jemanden lokal zu authentifizieren. Zunächst wird versucht, in deiner Datenbank einen Benutzer mit dem eingegebenen Benutzernamen zu finden. Dann wird geprüft, ob das Kennwort übereinstimmt. Wenn keine Fehler aufgetreten sind, auf die du geprüft hast (z. B. ein falsches Passwort), wird das `user`-Objekt zurückgegeben und der Benutzer ist authentifiziert.

Viele Strategien werden mit unterschiedlichen Einstellungen eingerichtet. Im Allgemeinen ist es einfach, sie anhand der README im Repository der jeweiligen Strategie einzurichten. Ein gutes Beispiel hierfür ist die GitHub-Strategie, bei der Sie sich nicht um einen Benutzernamen oder ein Passwort kümmern müssen, da der Benutzer zur Authentifizierung an die GitHub-Authentifizierungsseite weitergeleitet wird. Solange sie angemeldet sind und zustimmen, gibt GitHub ihr Profil zurück, das du verwenden kannst.

Im nächsten Schritt richten Sie ein, wie die Authentifizierungsstrategie aufgerufen werden soll, um einen Benutzer anhand von Formulardaten zu überprüfen.

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. Wenn du auf Fehler stößt, kannst du <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#authentication-strategies-6" target="_blank" rel="noopener noreferrer nofollow">das bis zu diesem Punkt abgeschlossene Projekt überprüfen</a>.

# --hints--

Passport-local sollte eine Abhängigkeit sein.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport-local',
    'Your project should list "passport-local " as a dependency'
  );
}
```

Passport-local sollte korrekt benötigt und eingerichtet werden.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport-local("|')/,
    'You should have required passport-local'
  );
  assert.match(
    data,
    /new LocalStrategy/,
    'You should have told passport to use a new strategy'
  );
  assert.match(
    data,
    /findOne/,
    'Your new local strategy should use the findOne query to find a username based on the inputs'
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
