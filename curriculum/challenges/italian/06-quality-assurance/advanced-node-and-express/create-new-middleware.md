---
id: 5895f70df9fc0f352b528e6a
title: Creare un nuovo middleware
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

Attualmente, ogni utente può andare a `/profile` indipendentemente dal fatto che sia autenticato o meno, semplicemente digitando l'url. Vogliamo evitarlo, controllando che l'utente sia autenticato prima di visualizzare la pagina del profilo. Questo è l'esempio perfetto di quando conviene creare un middleware.

La sfida consiste nel creare la funzione middleware `ensureAuthenticated(req, res, next)`, che controlla se un utente è autenticato o meno invocando il metodo `isAuthenticated` di passport su `request`, e questo a sua volta controlla se `req.user` è definito. Se lo è, allora `next()` dovrebbe essere invocato, altrimenti, possiamo rispondere alla richiesta con un reindirizzamento alla homepage per fare l'autenticazione. Una implementazione di questo middleware è:

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

Ora aggiungi *ensureAuthenticated* come middleware alla richiesta per la pagina del profilo prima dell'argomento della richiesta GET che contiene la funzione che visualizza la pagina.

```js
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render(process.cwd() + '/views/pug/profile');
 });
```

Invia la tua pagina quando pensi di averlo fatto correttamente. Se dovessi incontrare degli errori, puoi controllare il progetto completato fino a questo punto [qui](https://gist.github.com/camperbot/ae49b8778cab87e93284a91343da0959).

# --hints--

Il middleware ensureAuthenticated dovrebbe essere inplementato sulla rotta /profile.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /ensureAuthenticated[^]*req.isAuthenticated/gi,
        'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'
      );
      assert.match(
        data,
        /profile[^]*get[^]*ensureAuthenticated/gi,
        'Your ensureAuthenticated middleware should be attached to the /profile route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Una richiesta Get a /profile dovrebbe reindirizzare a / visto che non siamo autenticati.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/profile').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
