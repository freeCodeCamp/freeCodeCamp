---
id: 58966a17f9fc0f352b528e6d
title: Registro de nuevos usuarios
challengeType: 2
forumTopicId: 301561
dashedName: registration-of-new-users
---

# --description--

Ahora tenemos que permitir que un nuevo usuario en nuestro sitio registre una cuenta. En el `res.render` de la página de inicio agrega una nueva variable al objeto pasado: `showRegistration: true`. Cuando actualices tu página, ¡debes ver el formulario de registro que ya fue creado en tu archivo `index.pug`! Este formulario está configurado para hacer una petición **POST** en `/register`, así que aquí es donde debemos configurar para aceptar el **POST** y crear el objeto usuario en la base de datos.

La lógica de la ruta de registro debe ser la siguiente: Registrar al nuevo usuario > Autentificar al nuevo usuario > Redirigir a /profile

La lógica del paso 1, el registro del nuevo usuario, debe ser la siguiente: Consultar la base de datos con un comando findOne > si el usuario es devuelto entonces existe y redirige de nuevo a la página de inicio *OR* si el usuario es indefinido y no se produce ningún error entonces 'insertOne' en la base de datos con el nombre de usuario y la contraseña, y, siempre que no se produzcan errores, llamar a *next* para ir al paso 2, autentificar al nuevo usuario, para lo que ya hemos escrito la lógica en nuestra ruta POST */login*.

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

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes revisar el proyecto completado hasta este punto [aquí](https://gist.github.com/camperbot/b230a5b3bbc89b1fa0ce32a2aa7b083e).

**NOTA:** A partir de este punto, pueden surgir problemas relacionados con el uso del navegador *picture-in-picture*. Si está utilizando un IDE en línea que ofrece una vista previa de la aplicación dentro del editor, se recomienda abrir esta vista previa en una nueva pestaña.

# --hints--

Debes registrar la ruta y mostrarla en la página de inicio.

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

El registro debe funcionar.

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

El inicio de sesión debe funcionar.

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

El cierre de sesión debe funcionar.

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

El perfil ya no debe funcionar después de cerrar la sesión.

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
