---
id: 5895f70df9fc0f352b528e6a
title: Neue Middleware erstellen
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

So wie es ist, kann jeder Benutzer einfach zu `/profile` gehen, egal ob er sich authentifiziert hat oder nicht, indem er die URL eintippt. Du möchtest dies verhindern, indem du zuerst prüfst, ob der Benutzer authentifiziert ist, bevor die Profilseite angezeigt wird. Dies ist das perfekte Beispiel für die Erstellung einer Middleware.

The challenge here is creating the middleware function `ensureAuthenticated(req, res, next)`, which will check if a user is authenticated by calling Passport's `isAuthenticated` method on the `request` which checks if `req.user` is defined. Wenn ja, dann sollte `next()` aufgerufen werden. Otherwise, you can just respond to the request with a redirect to your homepage to login.

Eine Implementierung dieser Middleware ist:

```javascript
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

Create the above middleware function, then pass `ensureAuthenticated` as middleware to requests for the profile page before the argument to the GET request:

```javascript
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render('profile');
 });
```

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#create-new-middleware-8" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

The middleware `ensureAuthenticated` should be implemented and attached to the `/profile` route.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /ensureAuthenticated[^]*req.isAuthenticated/,
    'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'
  );
  assert.match(
    data,
    /profile[^]*get[^]*ensureAuthenticated/,
    'Your ensureAuthenticated middleware should be attached to the /profile route'
  );
}
```

An unauthenticated GET request to `/profile` should correctly redirect to `/`.

```js
async (getUserInput) => {
  const url = new URL("/profile", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Home page/,
    'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'
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
