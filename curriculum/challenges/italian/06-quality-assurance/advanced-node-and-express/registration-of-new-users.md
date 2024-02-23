---
id: 58966a17f9fc0f352b528e6d
title: Registrazione di nuovi utenti
challengeType: 2
forumTopicId: 301561
dashedName: registration-of-new-users
---

# --description--

Ora devi permettere a un nuovo utente di creare un account sul tuo sito. Su `res.render` per l'home page aggiungi una nuova variabile all'oggetto passato - `showRegistration: true`. Quando aggiorni la pagina, dovresti vedere un modulo di registrazione che era già stato creato nel file `index.pug`. Questo modulo è impostato con **POST** su `/register`, quindi crea questa rotta e fa' sì che aggiunga l'oggetto user al database seguendo la logica qui sotto.

La logica della rotta di registrazione dovrebbe essere la seguente:

1. Registra il nuovo utente
2. Autentica il nuovo utente
3. Reindirizza a `/profile`

La logica della fase 1 dovrebbe essere la seguente:

1. Esegui una query nel database con `findOne`
2. Se c'è un errore, chiama `next` con l'errore
3. Se viene restituito un utente, reindirizza alla home
4. Se un utente non viene trovato e non si verificano errori, usa `insertOne` nel database con il nome utente e la password. Finché non si verificano errori, chiama `next` per andare alla fase 2, autenticando il nuovo utente, per cui hai già scritto la logica nella rotta `POST /login`.

```js
app.route('/register')
  .post((req, res, next) => {
    myDataBase.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        next(err);
      } else if (user) {
        res.redirect('/');
      } else {
        myDataBase.insertOne({
          username: req.body.username,
          password: req.body.password
        },
          (err, doc) => {
            if (err) {
              res.redirect('/');
            } else {
              // The inserted document is held within
              // the ops property of the doc
              next(null, doc.ops[0]);
            }
          }
        )
      }
    })
  },
    passport.authenticate('local', { failureRedirect: '/' }),
    (req, res, next) => {
      res.redirect('/profile');
    }
  );
```

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#registration-of-new-users-11" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

**NOTA:** Da questo punto in poi, possono sorgere problemi relativi all'uso del browser *picture-in-picture*. Se stai utilizzando un IDE online che offre una preview dell'app nell'editor, è raccomandato aprire la preview in una nuova scheda.

# --hints--

Dovresti avere una rotta `/register` e visualizzare un modulo di registrazione sulla home page.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /showRegistration:( |)true/gi,
    'You should be passing the variable showRegistration as true to your render function for the homepage'
  );
  assert.match(
    data,
    /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi,
    'You should have a route that accepts a POST request on /register that queries the db with findOne and the query being username: req.body.username'
  );
}
```

Deve essere possibile registrarsi.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const user = `freeCodeCampTester${Date.now()}`;
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      test(this);
    } else {
      throw new Error(`${this.status} ${this.statusText}`);
    }
  };
  xhttp.open('POST', url + '/register', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send(`username=${user}&password=${user}`);
  function test(xhttpRes) {
    const data = xhttpRes.responseText;
    assert.match(
      data,
      /Profile/gi,
      'Register should work, and redirect successfully to the profile.'
    );
  }
};
```

Deve essere possibile autenticarsi.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const user = `freeCodeCampTester${Date.now()}`;
  const xhttpReg = new XMLHttpRequest();
  xhttpReg.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      login();
    } else {
      throw new Error(`${this.status} ${this.statusText}`);
    }
  };
  xhttpReg.open('POST', url + '/register', true);
  xhttpReg.setRequestHeader(
    'Content-type',
    'application/x-www-form-urlencoded'
  );
  xhttpReg.send(`username=${user}&password=${user}`);
  function login() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        test(this);
      } else {
        throw new Error(`${this.status} ${this.statusText}`);
      }
    };
    xhttp.open('POST', url + '/login', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`username=${user}&password=${user}`);
  }
  function test(xhttpRes) {
    const data = xhttpRes.responseText;
    assert.match(
      data,
      /Profile/gi,
      'Login should work if previous test was done successfully and redirect successfully to the profile.'
    );
    assert.match(
      data,
      new RegExp(user, 'g'),
      'The profile should properly display the welcome to the user logged in'
    );
  }
};
```

Deve essere possibile fare logout.

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/logout',
    type: 'GET',
    xhrFields: { withCredentials: true }
  }).then(
    (data) => {
      assert.match(data, /Home/gi, 'Logout should redirect to home');
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Il profilo non deve più essere accessibile dopo aver fatto logout.

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/profile',
    type: 'GET',
    crossDomain: true,
    xhrFields: { withCredentials: true }
  }).then(
    (data) => {
      assert.match(
        data,
        /Home/gi,
        'Profile should redirect to home when we are logged out now again'
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
