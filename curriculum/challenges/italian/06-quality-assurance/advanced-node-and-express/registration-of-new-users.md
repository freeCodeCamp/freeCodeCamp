---
id: 58966a17f9fc0f352b528e6d
title: Registrazione di nuovi utenti
challengeType: 2
forumTopicId: 301561
dashedName: registration-of-new-users
---

# --description--

Ora dobbiamo permettere ad un nuovo utente di creare un account sul nostro sito. In `res.render` per l'home page aggiungi una nuova variabile all'oggetto passato `showRegistration: true`. Quando aggiorni la pagina, dovresti vedere un modulo di registrazione che era già stato creato nel file `index.pug`! Questo modulo è impostato in modo da mandare una richiesta **POST** su `/register`, quindi è qui che dovremmo accettare le richieste **POST** e creare l'oggetto dell'utente nel database.

La logica della rotta di registrazione dovrebbe essere come segue: Registrare il nuovo utente > Autenticare il nuovo utente > Reindirizzamento a /profile

La logica dello step 1, registrare un nuovo utente, dovrebbe essere come segue: Fare la richiesta al database con un comando findOne > se l'utente è ritornato allora esiste, e reindirizzare all'home *O* se l'utente non è definito e nessun errore occorre allora inserire l'utente con 'insertOne' nel database con nome utente e password, e finché nessun errore occorre, invocare *next* per andare allo step 2, autenticare il nuovo utente, per cui abbiamo già scritto la logica nella rotta POST */logic*.

```js
app.route('/register')
  .post((req, res, next) => {
    myDataBase.findOne({ username: req.body.username }, function(err, user) {
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

Invia la tua pagina quando pensi di averlo fatto correttamente. Se stai avendo errori, puoi vedere <a href="https://gist.github.com/camperbot/b230a5b3bbc89b1fa0ce32a2aa7b083e" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

**NOTA:** Da questo punto in poi, possono sorgere problemi relativi all'uso del browser *picture-in-picture*. Se stai utilizzando un IDE online che offre una preview dell'app nell'editor, è raccomandato aprire la preview in una nuova scheda.

# --hints--

Dovresti registrare il percorso e visualizzare nella home.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /showRegistration:( |)true/gi,
        'You should be passing the variable showRegistration as true to your render function for the homepage'
      );
      assert.match(
        data,
        /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi,
        'You should have a route accepted a post request on register that querys the db with findone and the query being username: req.body.username'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
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
