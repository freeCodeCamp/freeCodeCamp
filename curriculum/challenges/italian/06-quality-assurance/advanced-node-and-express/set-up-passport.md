---
id: 5895f70cf9fc0f352b528e65
title: Configurare Passport
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

È ora di configurare *Passport* così da permettere finalmente ad un utente di registrarsi od accedere ad un account! In aggiunta a Passport, useremo Express-session per gestire le sessioni. Usare questo middleware salva l'id di sessione come cookie nel client e permettere di accedere ai dati di sessione usando quell'id sul server. In questo modo teniamo informazioni personali dell'account al di fuori del cookie usato dal client per verificare con il server di essere autenticato e teniamo solo la *key* per accedere ai dati immagazzinati nel server.

Per configurare Passport per usarlo nel tuo progetto dovrai prima aggiungerlo come dipendenza nel tuo package.json. `passport@~0.4.1`

In aggiunta, aggiungi anche Express-session come dipendenza. Express-session ha un sacco di feature avanzate che puoi usare ma per ora useremo solo le basi! `express-session@~1.17.1`

Ora dovrai configurare le impostazioni della sessione e inizializzare Passport. Assicurati di creare prima le variabili 'session' e 'passport' per richiedere rispettivamente 'express-session' e 'passport'.

Per configurare la tua app express per utilizzare la sessione, definiremo solo alcune opzioni di base. Assicurati di aggiungere 'SESSION_SECRET' al tuo file .env e dagli un valore casuale. Questo è usato per calcolare l'hash usato per crittografare il tuo cookie!

```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

Puoi anche andare avanti e dire alla tua app express di **usare** 'passport.initialize()' e 'passport.session()'. (Per esempio, `app.use(passport.initialize());`)

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi controllare il progetto completato fino a questo punto [qui](https://gist.github.com/camperbot/4068a7662a2f9f5d5011074397d6788c).

# --hints--

Passaport e Express-session dovrebbero essere dipendenze.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport',
        'Your project should list "passport" as a dependency'
      );
      assert.property(
        packJson.dependencies,
        'express-session',
        'Your project should list "express-session" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Le dipendenze dovrebbero essere correttamente richieste.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport("|')/gi,
        'You should have required passport'
      );
      assert.match(
        data,
        /require.*("|')express-session("|')/gi,
        'You should have required express-session'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Express app dovrebbe utilizzare nuove dipendenze.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.initialize/gi,
        'Your express app should use "passport.initialize()"'
      );
      assert.match(
        data,
        /passport.session/gi,
        'Your express app should use "passport.session()"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

La sessione e il segreto di sessione dovrebbero essere impostate correttamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /secret:( |)process\.env(\.SESSION_SECRET|\[(?<q>"|')SESSION_SECRET\k<q>\])/g,
        'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'
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
