---
id: 5895f70df9fc0f352b528e69
title: Usare le strategie passport
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

Nel file `index.pug` fornito, c'è un modulo di login. È nascosto a causa del JavaScript in linea `if showLogin` con il modulo indentato dopo di esso.

Nel `res.render` per quella pagina, aggiungi una nuova variabile all'oggetto, `showLogin: true`. Quando aggiorni la pagina, dovresti vedere il modulo! Questo modulo è impostato con **POST** su `/login`. Quindi, è qui che dovresti agire per accettare la richiesta POST e autenticare l'utente.

Per questa sfida, dovresti aggiungere la rotta `/login` per accettare una richiesta POST. Per autenticarsi su questa rotta, è necessario aggiungere un middleware per farlo prima di inviare una risposta. Questo viene fatto semplicemente passando un altro argomento con il middleware prima della tua risposta. Il middleware da usare è `passport.authenticate('local')`.

`passport.authenticate` può anche prendere alcune opzioni come un argomento tipo `{ failureRedirect: '/' }` che è incredibilmente utile, quindi assicurati di aggiungere anche quello. Aggiungi una risposta dopo aver usato il middleware (che verrà chiamata solo se il middleware di autenticazione passa) che reindirizza l'utente su `/profile`. Aggiungi anche questa rotta e fa' sì che presenti la vista `profile.pug`.

Se l'autenticazione è riuscita, l'oggetto utente verrà salvato in `req.user`.

A questo punto, se inserisci un nome utente e una password nel modulo, dovresti essere reindirizzato alla home page `/`, e la console del tuo server dovrebbe mostrare `'User {USERNAME} attempted to log in.'`, dato che al momento non possiamo effettuare il login di un utente che non è registrato.

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-use-passport-strategies-7" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

Tutti i passaggi dovrebbero essere correttamente implementati nel `server.js`.

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

Una richiesta POST a `/login` dovrebbe reindirizzare correttamente a `/`.

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
