---
id: 5895f70df9fc0f352b528e69
title: Wie man Passport-Strategien nutzt
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

In der bereitgestellten Datei `index.pug` befindet sich ein Anmeldeformular. Es wird durch das Inline-JavaScript `if showLogin` ausgeblendet, wobei das Formular hinten eingerückt wird.

Füge innerhalb des `res.render` dieser Seite dem Objekt eine neue Variable hinzu, `showLogin: true`. Wenn du deine Seite aktualisierst, solltest du das Formular sehen! Das Formular übermittelt **POST**-Anfragen an `/login`. Hier solltest du also die POST-Anfrage annehmen und den Nutzer authentifizieren.

In dieser Aufgabe erstellst du die Route `/login`, um eine POST-Anfrage anzunehmen. Um mithilfe dieser Route Nutzer zu authentifizieren, benötigst du eine Middleware, die das vor Beantwortung der Anfrage tut. Dazu wird einfach ein weiteres Argument an die Middleware übergeben, bevor die Antwort kommt. The middleware to use is `passport.authenticate('local')`.

`passport.authenticate` kann auch einige Optionen als Argument akzeptieren, wie z.B. `{ failureRedirect: '/' }`, was unglaublich nützlich ist, also füge auch das hinzu. Füge nach der Verwendung der Middleware eine Antwort hinzu (die nur aufgerufen wird, wenn die Authentifizierungs-Middleware funktioniert), die den Benutzer zu `/profile` umleitet. Fügen diese Route ebenfalls hinzu und lasse sie die Ansicht `profile.pug` rendern.

Wenn die Authentifizierung erfolgreich war, wird das Benutzerobjekt in `req.user` gespeichert.

Wenn du zu diesem Zeitpunkt einen Benutzernamen und ein Passwort in das Formular eingibst, sollte es auf die Startseite `/` umleiten und die Konsole deines Servers sollte `'User {USERNAME} attempted to log in.'` anzeigen, da wir derzeit keinen Benutzer anmelden können, der nicht registriert ist.

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. Wenn du auf Fehler stößt, kannst du <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-use-passport-strategies-7" target="_blank" rel="noopener noreferrer nofollow">das bis zu diesem Punkt abgeschlossene Projekt überprüfen</a>.

# --hints--

Alle Schritte sollten in `server.js` korrekt implementiert sein.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /showLogin:( |)true/,
    'You should be passing the variable "showLogin" as true to your render function for the homepage'
  );
  assert.match(
    data,
    /failureRedirect:( |)('|")\/('|")/,
    'Your code should include a failureRedirect to the "/" route'
  );
  assert.match(
    data,
    /login[^]*post[^]*local/,
    'You should have a route for login which accepts a POST and passport.authenticates local'
  );
}
```

Eine POST-Anfrage an `/login` sollte korrekt zu `/` weiterleiten.

```js
async (getUserInput) => {
  const url = new URL("/login", getUserInput("url"));
  const res = await fetch(url, { method: 'POST' });
  const data = await res.text();
  assert.match(
    data,
    /Looks like this page is being rendered from Pug into HTML!/,
    'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
