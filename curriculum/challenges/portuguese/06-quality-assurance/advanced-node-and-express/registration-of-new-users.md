---
id: 58966a17f9fc0f352b528e6d
title: Registrar novos usuários
challengeType: 2
forumTopicId: 301561
dashedName: registration-of-new-users
---

# --description--

Agora, precisamos permitir que um novo usuário em nosso site crie uma conta. Na `res.render` para a página inicial, adicione uma nova variável para o objeto passado, `showRegistration: true`. Ao atualizar sua página, você deve então ver o formulário de registro que já foi criado no arquivo `index.pug`! Este formulário está configurado para o método **POST** em `/register`. Então, é aqui que devemos configurar para aceitar a solicitação de **POST** e criar o objeto de usuário no banco de dados.

A lógica da rota de registro deve ser a seguinte: registrar o novo usuário > autenticar o novo usuário > redirecionar para /profile

A lógica da etapa 1, registrar o novo usuário, deve ser a seguinte: consultar banco de dados com um comando findOne > se o usuário for retornado, então ele existe e devemos redirecionar de volta para a página inicial *OU*, se o usuário retornar undefined e nenhum erro ocorrer, então 'insertOne' (inserir um) no banco de dados com o nome de usuário e senha. Desde que não haja erros, chamar *next* para ir para a etapa 2, autenticando o novo usuário, para o qual já escrevemos a lógica em nossa solicitação de POST para a rota */login*.

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

Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto concluído até este momento em <a href="https://gist.github.com/camperbot/b230a5b3bbc89b1fa0ce32a2aa7b083e" target="_blank" rel="noopener noreferrer nofollow">https://gist.github.com/camperbot/b230a5b3bbc89b1fa0ce32a2aa7b083e</a>.

**OBSERVAÇÃO:** a partir deste ponto, podem surgir problemas relacionados com o uso do navegador *picture-in-picture*. Se você estiver usando uma IDE on-line que oferece uma pré-visualização do aplicativo dentro do editor, é recomendável abrir esta pré-visualização em uma nova aba.

# --hints--

Você deve registrar a rota e exibi-la na página inicial.

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

O registo deve dar certo.

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

O login deve dar certo.

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

O logout deve dar certo.

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

O perfil não deve mais funcionar após o logout.

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
