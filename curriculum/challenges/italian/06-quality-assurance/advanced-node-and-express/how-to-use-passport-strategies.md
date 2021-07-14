---
id: 5895f70df9fc0f352b528e69
title: Usare le strategie passport
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

Nel file `index.pug` fornito, c'è in realtà un modulo di login. In precedenza è stato nascosto a causa del JavaScript in linea `if showLogin` con il modulo indentato dopo di esso. `showLogin` non è mai stato definito come variabile in precedenza, quindi non ha mai presentato il blocco di codice contenente il modulo. Vai avanti e nel `res.render` per quella pagina aggiungi una nuova variabile all'oggetto `showLogin: true`. Quando aggiorni la pagina, dovresti vedere il modulo! Questo modulo è impostato per fare una richiesta **POST** su `/login`, quindi qui è dove dovremmo mettere il codice per accettare il POST e autenticare l'utente.

Per questa sfida dovresti aggiungere la rotta `/login` per accettare una richiesta POST. Per autenticarsi su questo percorso, è necessario aggiungere un middleware per farlo prima di inviare una risposta. Questo viene fatto semplicemente passando un altro argomento con il middleware prima della tua `function(req,res)` con la tua risposta! Il middleware da usare è `passport.authenticate('local')`.

`passport.authenticate` può anche prendere alcune opzioni come un argomento tipo: `{ failureRedirect: '/' }` che è incredibilmente utile, quindi assicurati di aggiungere anche quello. La risposta dopo aver utilizzato il middleware (che verrà chiamato solo se l'autenticazione middleware ha successo) dovrebbe essere quella di reindirizzare l'utente a `/profile` e tale percorso dovrebbe presentare la vista `profile.pug`.

Se l'autenticazione è riuscita, l'oggetto utente verrà salvato in `req.user`.

A questo punto, se inserisci un nome utente e una password nel modulo, esso dovrebbe reindirizzare alla home page `/`, e la console del tuo server dovrebbe mostrare `'User {USERNAME} attempted to log in.'`, dato che al momento non possiamo effettuare il login di un utente che non è registrato.

Invia la tua pagina quando pensi di averlo fatto correttamente. Se dovessi incontrare degli errori, puoi controllare il progetto completato fino a questo punto [qui](https://gist.github.com/camperbot/7ad011ac54612ad53188b500c5e99cb9).

# --hints--

Tutti i passaggi dovrebbero essere correttamente implementati nel server.js.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /showLogin:( |)true/gi,
        'You should be passing the variable "showLogin" as true to your render function for the homepage'
      );
      assert.match(
        data,
        /failureRedirect:( |)('|")\/('|")/gi,
        'Your code should include a failureRedirect to the "/" route'
      );
      assert.match(
        data,
        /login[^]*post[^]*local/gi,
        'You should have a route for login which accepts a POST and passport.authenticates local'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Una richiesta POST a /login dovrebbe reindirizzare correttamente a /.

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/login').then(
    (data) => {
      assert.match(
        data,
        /Looks like this page is being rendered from Pug into HTML!/gi,
        'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
