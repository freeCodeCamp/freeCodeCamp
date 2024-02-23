---
id: 58965611f9fc0f352b528e6c
title: Einen Nutzer abmelden
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

Die Logout-Logik zu erstellen ist einfach. The route should just unauthenticate the user, and redirect to the home page instead of rendering any view.

In passport, unauthenticating a user is as easy as just calling `req.logout()` before redirecting. Füge diese `/logout`-Route hinzu, um dies zu tun:

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

Du hast vielleicht bemerkt, dass du fehlende Seiten (404) nicht behandelst. Der übliche Weg, dies in Node zu handhaben, ist mithilfe folgender Middleware. Füge dies nach all deinen anderen Routen ein:

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. Wenn du auf Fehler stößt, kannst du <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#logging-a-user-out-10" target="_blank" rel="noopener noreferrer nofollow">das bis zu diesem Punkt abgeschlossene Projekt überprüfen</a>.

# --hints--

`req.logout()` should be called in your `/logout` route.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /req.logout/gi,
    'You should be calling req.logout() in your /logout route'
  );
}
```

`/logout` sollte auf die Startseite umleiten.

```js
async (getUserInput) => {
  const url = new URL("/logout", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Home page/gi,
    'When a user logs out they should be redirected to the homepage'
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
