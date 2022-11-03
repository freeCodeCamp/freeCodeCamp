---
id: 589a69f5f9fc0f352b528e70
title: Implementazione dell'autenticazione con i social
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

Il percorso di base che seguirà questo tipo di autenticazione nella tua app è:

1.  L'utente fa clic su un pulsante o link che lo reindirizza alla tua rotta per autenticarsi utilizzando una strategia specifica (ad esempio GitHub).
2.  La tua rotta chiama `passport.authenticate('github')` che lo reindirizza a GitHub.
3.  La pagina su cui arriva l'utente, su GitHub, gli permette di effettuare il login se non è già loggato. Poi gli chiede di approvare l'accesso al suo profilo dalla tua app.
4.  L'utente viene quindi rimandato alla tua app a uno specifico url di callback con il suo profilo, se è approvato.
5.  Ora è autenticato, e la tua app dovrebbe controllare se si tratta di un profilo che è tornato, o salvarlo nel tuo database se non lo è.

Le strategie con OAuth richiedono di avere almeno un *ID client* e un *Client Secret* che è un modo per il servizio di verificare da chi proviene la richiesta di autenticazione e se è valida. Questi sono ottenuti dal sito con cui si sta tentando di implementare l'autenticazione, ad esempio GitHub, e sono unici per la tua app--**NON DEVONO ESSERE CONDIVISI** e non dovrebbero mai essere caricati in un archivio pubblico o scritti direttamente nel tuo codice. Una pratica comune è metterli nel tuo file `.env` e fare riferimento a loro in questo modo: `process.env.GITHUB_CLIENT_ID`. Per questa sfida userai la strategia GitHub.

Segui questa strategia per ottenere *Client ID e Segreto* da GitHub. Vai sulle impostazioni del tuo profilo GitHub e clicca su 'developer settings', poi su <a href="https://github.com/settings/developers" target="_blank" rel="noopener noreferrer nofollow">'OAuth Apps'</a>. Clicca su 'New OAuth App', poi dai un nome alla tua app, incolla l'URL alla tua home page Replit (**Non l'url al codice del progetto**) e, per l'URL di callback, incolla lo stesso URL dell'home page ma aggiungi `/auth/github/callback` alla sua fine. È qui che gli utenti verranno reindirizzati dopo l'autenticazione su GitHub. Dopo aver fatto tutto questo, clicca su 'Register application'.

Nella pagina successiva, clicca su 'Generate a new client secret' per creare un nuovo segreto client. Salva l'ID client e il tuo segreto client nel file `.env` del tuo progetto come `GITHUB_CLIENT_ID` e `GITHUB_CLIENT_SECRET`.

Nel tuo file `routes.js`, aggiungi `showSocialAuth: true` alla rotta homepage, dopo `showRegistration: true`. Ora, crea 2 rotte che accettano le richieste GET: `/auth/github` e `/auth/github/callback`. La prima dovrebbe chiamare solo passport per autenticare `'github'`. La seconda dovrebbe chiamare passport per autenticare `'github'` con un reindirizzamento fallito a `/`, e poi, se questo è riuscito, reindirizzare a `/profile` (simile al tuo ultimo progetto).

Un esempio di come `/auth/github/callback` deve essere è simile al modo in cui hai gestito un normale login:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Invia la tua pagina quando pensi che sia tutto corretto. Se incontri degli errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-3" target="_blank" rel="noopener noreferrer nofollow">il progetto fino a questo punto</a>.

# --hints--

La rotta `/auth/github` dovrebbe essere corretta.

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
          data.replace(/\s/g, ''),
          /passport.authenticate.*?github/g,
          'Route auth/github should only call passport.authenticate with github'
        );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
}
```

La rotta `/auth/github/callback` dovrebbe essere corretta.

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
        data.replace(/\s/g, ''),
        /failureRedirect:("|')\/\1/g,
        'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'
      );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github/callback');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github/callback"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
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
