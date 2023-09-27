---
id: 58966a17f9fc0f352b528e6d
title: Registrierung neuer Nutzer
challengeType: 2
forumTopicId: 301561
dashedName: registration-of-new-users
---

# --description--

Jetzt musst du einem neuen Nutzer deiner Webseite erlauben, ein Konto zu erstellen. In the `res.render` for the home page add a new variable to the object passed along - `showRegistration: true`. Wenn du deine Seite aktualisierst, solltest du das Registrierungsformular sehen, das bereits in deiner `index.pug`-Datei erstellt wurde. This form is set up to **POST** on `/register`, so create that route and have it add the user object to the database by following the logic below.

The logic of the registration route should be as follows:

1. Registriere den neuen Nutzer
2. Authentifiziere den neuen Nutzer
3. Leite zu `/profile` weiter

Die Logik von Schritt 1 sollte wie folgt lauten:

1. Frage die Datenbank mit `findOne` ab
2. Wenn ein Fehler auftritt, rufe `next` mit dem Fehler auf
3. If a user is returned, redirect back to home
4. Wird der Nutzer nicht gefunden und tritt kein Fehler auf, so füge den Nutzernamen sowie das Passwort der Datenbank mithilfe von `insertOne` hinzu. Tritt auch hier kein Fehler auf, so rufe `next` auf, um zu Schritt 2 überzugehen – der Authentifizierung des neuen Nutzers. Die Logik hierfür hast du bereits in deiner `POST /login`-Route geschrieben.

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

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. Wenn du auf Fehler stößt, kannst du <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#registration-of-new-users-11" target="_blank" rel="noopener noreferrer nofollow">das bis zu diesem Punkt abgeschlossene Projekt überprüfen</a>.

**HINWEIS:** Ab jetzt können Probleme im Zusammenhang mit der Verwendung des *picture-in-picture*-Browsers auftreten. Wenn du eine Online-IDE verwendest, die eine Vorschau der Anwendung innerhalb des Editors bietet, wird empfohlen, diese Vorschau in einem neuen Tab zu öffnen.

# --hints--

Du solltest eine `/register`-Route haben und ein Registrierungsformular auf der Startseite anzeigen.

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

Die Registrierung sollte funktionieren.

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

Login sollte funktionieren.

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

Logout sollte funktionieren.

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

Das Profil sollte nach dem Logout nicht mehr funktionieren.

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
