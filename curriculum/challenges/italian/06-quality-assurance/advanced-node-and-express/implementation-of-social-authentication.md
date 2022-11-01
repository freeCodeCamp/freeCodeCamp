---
id: 589a69f5f9fc0f352b528e70
title: Implementazione dell'autenticazione con i social
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

Il percorso di base che seguirà questo tipo di autenticazione nella tua app è:

1.  User clicks a button or link sending them to your route to authenticate using a specific strategy (e.g. GitHub).
2.  La tua rotta chiama `passport.authenticate('github')` che li reindirizza a GitHub.
3.  La pagina su cui l'utente atterra, su GitHub, permette loro di effettuare il login se non sono già loggati. It then asks them to approve access to their profile from your app.
4.  The user is then returned to your app at a specific callback url with their profile if they are approved.
5.  Ora è autenticato, e la tua app dovrebbe controllare se si tratta di un profilo che è tornato, o salvarlo nel tuo database se non lo è.

Le strategie con OAuth richiedono di avere almeno un *ID client* e un *Client Secret* che è un modo per il servizio di verificare da chi proviene la richiesta di autenticazione e se è valida. Questi sono ottenuti dal sito con cui si sta tentando di implementare l'autenticazione, ad esempio GitHub, e sono unici per la tua app--**NON DEVONO ESSERE CONDIVISI** e non dovrebbero mai essere caricati in un archivio pubblico o scritti direttamente nel tuo codice. Una pratica comune è metterli nel tuo file `.env` e fare riferimento a loro in questo modo: `process.env.GITHUB_CLIENT_ID`. For this challenge you are going to use the GitHub strategy.

Follow these instructions to obtain your *Client ID and Secret* from GitHub. Go to your GitHub profile settings and click 'developer settings', then <a href="https://github.com/settings/developers" target="_blank" rel="noopener noreferrer nofollow">'OAuth Apps'</a>. Click 'New OAuth App', then give your app a name, paste in the URL to your Replit homepage (**Not the project code's url**) and, for the callback URL, paste in the same URL as the homepage but add `/auth/github/callback` to the end of it. This is where users will be redirected after authenticating on GitHub. After you do all that, click 'Register application'.

On the next page, click 'Generate a new client secret' to create a new client secret. Save the client ID and your client secret in your project's `.env` file as `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`.

In your `routes.js` file, add `showSocialAuth: true` to the homepage route, after `showRegistration: true`. Now, create 2 routes accepting GET requests: `/auth/github` and `/auth/github/callback`. The first should only call passport to authenticate `'github'`. The second should call passport to authenticate `'github'` with a failure redirect to `/`, and then if that is successful redirect to `/profile` (similar to your last project).

An example of how `/auth/github/callback` should look is similar to how you handled a normal login:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-3" target="_blank" rel="noopener noreferrer nofollow">check out the project up to this point</a>.

# --hints--

Route `/auth/github` should be correct.

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

Route `/auth/github/callback` should be correct.

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
