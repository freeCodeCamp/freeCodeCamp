---
id: 58966a17f9fc0f352b528e6d
title: Registration of New Users
challengeType: 2
videoUrl: ''
localeTitle: Registro de novos usuários
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Agora precisamos permitir que um novo usuário em nosso site registre uma conta. No res.render da página inicial, adicione uma nova variável ao objeto transmitido ao <code>showRegistration: true</code> . Quando você atualiza sua página, você deve ver o formulário de registro que já foi criado no seu arquivo index.pug! Este formulário é configurado para <b>POST</b> on <em>/ register,</em> então é nesse local que devemos configurar para aceitar o POST e criar o objeto de usuário no banco de dados. A lógica da rota de registro deve ser a seguinte: Registrar o novo usuário&gt; Autenticar o novo usuário&gt; Redirecionar para / profile A lógica da etapa 1, registrando o novo usuário, deve ser a seguinte: Consultar banco de dados com um comando findOne&gt; se usuário é retornado então ele existe e redirecionar de volta para casa <em>ou</em> se o usuário é indefinido e não ocorre nenhum erro, em seguida, &#39;insertOne&#39; no banco de dados com o nome de usuário e senha e, enquanto não ocorrer erros, em seguida, chamar <em>próximo</em> a ir para o passo 2, autenticando a nova usuário, para o qual já escrevemos a lógica em nossa rota de POST / login. <pre> app.route (&#39;/ register&#39;)
  .post ((req, res, next) =&gt; {
      db.collection (&#39;users&#39;). findOne ({username: req.body.username}, função (err, user) {
          if (err) {
              próximo (err);
          } else if (usuário) {
              res.redirect (&#39;/&#39;);
          } outro {
              db.collection (&#39;users&#39;). insertOne (
                {username: req.body.username,
                 password: req.body.password},
                (err, doc) =&gt; {
                    if (err) {
                        res.redirect (&#39;/&#39;);
                    } outro {
                        next (null, usuário);
                    }
                }
              )
          }
      })},
    passport.authenticate (&#39;local&#39;, {failureRedirect: &#39;/&#39;}),
    (req, res, next) =&gt; {
        res.redirect (&#39;/ profile&#39;);
    }
); </pre> Envie sua página quando achar que está certo. Se você estiver com erros, confira o projeto concluído até este ponto <a href="https://gist.github.com/JosephLivengood/6c47bee7df34df9f11820803608071ed">aqui</a> . </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: Registrar rota e exibir em casa
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /showRegistration:( |)true/gi, "You should be passing the variable "showRegistration" as true to your render function for the homepage"); assert.match(data, /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi, "You should have a route accepted a post request on register that querys the db with findone and the query being "username: req.body.username""); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Registrando deve funcionar
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/register",data: {username: "freeCodeCampTester", password: "freeCodeCampTester"},crossDomain: true, type: "POST", xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, "I should be able to register and it direct me to my profile. CLEAR YOUR DATABASE if this test fails (each time until its right!)"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Login deve funcionar
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/login",data: {username: "freeCodeCampTester", password: "freeCodeCampTester"}, type: "POST", xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, "Login should work if previous test was done successfully and redirect successfully to the profile. Check your work and clear your DB"); assert.match(data, /freeCodeCampTester/gi, "The profile should properly display the welcome to the user logged in"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Logout deve funcionar
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/logout", type: "GET", xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, "Logout should redirect to home"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: O perfil não deve mais funcionar após o logout
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/profile", type: "GET", crossDomain: true, xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, "Profile should redirect to home when we are logged out now again"); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
