---
id: 589a69f5f9fc0f352b528e70
title: Implementazione dell'autenticazione con i social
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

Il percorso di base che seguirà questo tipo di autenticazione nella tua app è:

1.  L'utente fa clic su un pulsante o link che li reindirizza alla nostra rotta per autenticarsi utilizzando una strategia specifica (ad esempio GitHub).
2.  La tua rotta chiama `passport.authenticate('github')` che li reindirizza a GitHub.
3.  La pagina su cui l'utente atterra, su GitHub, permette loro di effettuare il login se non sono già loggati. Poi chiede loro di approvare l'accesso al loro profilo dalla nostra app.
4.  L'utente viene quindi rimandato alla nostra app a una specifica url di callback con il loro profilo, se è approvato.
5.  Ora è autenticato, e la tua app dovrebbe controllare se si tratta di un profilo che è tornato, o salvarlo nel tuo database se non lo è.

Le strategie con OAuth richiedono di avere almeno un *ID client* e un *Client Secret* che è un modo per il servizio di verificare da chi proviene la richiesta di autenticazione e se è valida. Questi sono ottenuti dal sito con cui si sta tentando di implementare l'autenticazione, ad esempio GitHub, e sono unici per la tua app--**NON DEVONO ESSERE CONDIVISI** e non dovrebbero mai essere caricati in un archivio pubblico o scritti direttamente nel tuo codice. Una pratica comune è metterli nel tuo file `.env` e fare riferimento a loro in questo modo: `process.env.GITHUB_CLIENT_ID`. Per questa sfida useremo la strategia GitHub.

L'ottenimento del tuo *Client ID e Client Secret* da GitHub viene effettuato nelle impostazioni del profilo del tuo account in 'developer settings', quindi in '[OAuth applications](https://github.com/settings/developers)'. Clicca su 'Register a new application', dai un nome alla tua app, incolla l'url alla tua homepage di Replit (**Non l'url del progetto**), e infine, per l'url di callback, incolla lo stesso url della homepage ma con l'aggiunta di `/auth/github/callback`. È qui che gli utenti verranno reindirizzati per essere gestiti da noi dopo l'autenticazione su GitHub. Salva le informazioni restituite come `'GITHUB_CLIENT_ID'` e `'GITHUB_CLIENT_SECRET'` nel tuo file `.env`.

Nel tuo file `routes.js`, aggiungi `showSocialAuth: true` alla rotta homepage, dopo `showRegistration: true`. Ora, crea 2 rotte che accettano le richieste GET: `/auth/github` e `/auth/github/callback`. La prima dovrebbe chiamare solo passport per autenticare `'github'`. La seconda dovrebbe chiamare passport per autenticare `'github'` con un reindirizzamento fallito a `/`, e poi, se questo è riuscito, reindirizzare a `/profile` (simile al nostro ultimo progetto).

Un esempio di come `/auth/github/callback` deve essere è simile a come abbiamo gestito un normale login:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Invia la tua pagina quando pensi di averlo fatto correttamente. Se dovessi incontrare degli errori, puoi controllare il progetto fino a questo punto [qui](https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e).

# --hints--

La rotta /auth/github dovrebbe essere corretta.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/routes.js').then(
    (data) => {
      assert.match(
        data.replace(/\s/g, ''),
        /('|")\/auth\/github\/?\1[^]*?get.*?passport.authenticate.*?github/gi,
        'Route auth/github should only call passport.authenticate with github'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

La rotta /auth/github/callback dovrebbe essere corretta.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/routes.js').then(
    (data) => {
      assert.match(
        data.replace(/\s/g, ''),
        /('|")\/auth\/github\/callback\/?\1[^]*?get.*?passport.authenticate.*?github.*?failureRedirect:("|')\/\2/gi,
        'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'
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
