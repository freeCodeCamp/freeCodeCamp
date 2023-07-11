---
id: 58966a17f9fc0f352b528e6d
title: Registro de nuevos usuarios
challengeType: 2
forumTopicId: 301561
dashedName: registration-of-new-users
---

# --description--

Ahora necesitas permitir que un nuevo usuario registre una cuenta. En el método `res.render` para la página de inicio añade una nueva variable al objeto que se le pasa como argumento - `showRegistration: true`. Cuando actualizas tu página, entonces verás el formulatio de registro que ya fue creado en tu archivo `index.pug`. Este formulario esta configurado para **POST** en `/register`, así crea esa ruta y tiene que agregar el objeto usuario a la base de datos siguiendo la lógica a continuación.

La lógica de la ruta de registro debería ser la siguiente:

1. Registrar el nuevo usuario
2. Autenticar el nuevo usuario
3. Redireccionar a `/profile`

La lógica del paso 1 debería ser la siguiente:

1. Consulta la base de datos con `findOne`
2. Si hay un error, llama a `next` con el error
3. Si el usuario es devuelto, redirecciona de regreso al inicio
4. Si un usuario no fue encontrado y no ocurren errores, entonces `insertOne` en la base de datos con el nombre de usuario y contraseña. Mientras no ocurran errores ahí, llama a `next` para ir al paso 2, autenticando el nuevo usuario, para el cual escribiste la lógica para entrar en tu ruta `POST /login`.

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

Envía tu página cuando creas que lo has hecho bien. Si tu ejecución lleva a errrores, puedes <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#registration-of-new-users-11" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

**NOTA:** A partir de este punto, pueden surgir problemas relacionados con el uso del navegador *picture-in-picture*. Si está utilizando un IDE en línea que ofrece una vista previa de la aplicación dentro del editor, se recomienda abrir esta vista previa en una nueva pestaña.

# --hints--

Deberías tener una ruta a `/register` y mostrar un formulario en la página de inicio.

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
