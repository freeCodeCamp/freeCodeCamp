---
id: 5895f70ef9fc0f352b528e6b
title: Mettere insieme un profilo
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

Ora che possiamo garantire che l'utente che accede al `/profile` sia autenticato, possiamo utilizzare le informazioni contenute in `req.user` sulla nostra pagina!

Passa un oggetto contenente la proprietà `username` e il valore di `req.user.username` come secondo argomento per il metodo render della vista del profilo. Quindi, vai alla tua vista `profile.pug`, e aggiungi la seguente riga sotto l'elemento `h1` esistente, e allo stesso livello di indentazione:

```pug
h2.center#welcome Welcome, #{username}!
```

Questo crea un elemento `h2` di classe '`center`' e con id '`welcome`' contenente il testo '`Welcome,`' seguito dal nome utente.

Inoltre, in `profile.pug`, aggiungi un link relativo alla rotta `/logout`, che ospiterà la logica per disconnettere un utente.

```pug
a(href='/logout') Logout
```

Invia la tua pagina quando pensi di averlo fatto correttamente. Se dovessi incontrare degli errori, puoi controllare il progetto completato fino a questo punto [qui](https://gist.github.com/camperbot/136b3ad611cc80b41cab6f74bb460f6a).

# --hints--

Dovresti aggiungere correttamente una variabile di rendering Pug a /profile.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /username:( |)req.user.username/gi,
        'You should be passing the variable username with req.user.username into the render function of the profile page'
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
