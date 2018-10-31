---
id: 58966a17f9fc0f352b528e6d
title: Registration of New Users
challengeType: 2
videoUrl: ''
localeTitle: Registro de nuevos usuarios
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Ahora debemos permitir que un nuevo usuario en nuestro sitio registre una cuenta. En el res.render para la página de inicio, agregue una nueva variable al objeto pasado a lo <code>showRegistration: true</code> . Cuando actualice su página, debería ver el formulario de registro que ya se creó en su archivo index.pug. Este formulario está configurado para <b>POST</b> on <em>/ register, de</em> modo que aquí es donde debemos configurar para aceptar el POST y crear el objeto de usuario en la base de datos. La lógica de la ruta de registro debe ser la siguiente: Registrar el nuevo usuario&gt; Autenticar el nuevo usuario&gt; Redirigir a / perfil La lógica del paso 1, registrar al nuevo usuario, debe ser la siguiente: Consultar la base de datos con un comando findOne&gt; if user se devuelve, entonces existe y se redirige a casa <em>O</em> si el usuario no está definido y no se produce ningún error, &#39;insertOne&#39; en la base de datos con el nombre de usuario y la contraseña, y mientras no se produzcan errores, llame al <em>siguiente</em> paso para autenticar el nuevo usuario, para lo cual ya hemos escrito la lógica en nuestra ruta POST / login. <pre> app.route (&#39;/ register&#39;)
  .post ((req, res, next) =&gt; {
      db.collection (&#39;usuarios&#39;). findOne ({username: req.body.username}, función (err, usuario) {
          if (err) {
              siguiente (err);
          } else if (usuario) {
              res.redirect (&#39;/&#39;);
          } else {
              db.collection (&#39;usuarios&#39;). insertOne (
                {username: req.body.username,
                 contraseña: req.body.password},
                (err, doc) =&gt; {
                    if (err) {
                        res.redirect (&#39;/&#39;);
                    } else {
                        siguiente (nulo, usuario);
                    }
                }
              )
          }
      })},
    passport.authenticate (&#39;local&#39;, {failureRedirect: &#39;/&#39;}),
    (req, res, next) =&gt; {
        res.redirect (&#39;/ profile&#39;);
    }
); </pre> Envía tu página cuando creas que lo has hecho bien. Si está teniendo errores, puede consultar el proyecto completado hasta este punto <a href="https://gist.github.com/JosephLivengood/6c47bee7df34df9f11820803608071ed">aquí</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Registrar ruta y mostrar en casa
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /showRegistration:( |)true/gi, "You should be passing the variable "showRegistration" as true to your render function for the homepage"); assert.match(data, /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi, "You should have a route accepted a post request on register that querys the db with findone and the query being "username: req.body.username""); }, xhr => { throw new Error(xhr.statusText); })'
  - text: El registro debería funcionar
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/register",data: {username: "freeCodeCampTester", password: "freeCodeCampTester"},crossDomain: true, type: "POST", xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, "I should be able to register and it direct me to my profile. CLEAR YOUR DATABASE if this test fails (each time until its right!)"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: El inicio de sesión debería funcionar
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/login",data: {username: "freeCodeCampTester", password: "freeCodeCampTester"}, type: "POST", xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, "Login should work if previous test was done successfully and redirect successfully to the profile. Check your work and clear your DB"); assert.match(data, /freeCodeCampTester/gi, "The profile should properly display the welcome to the user logged in"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Cerrar sesión debería funcionar
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/logout", type: "GET", xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, "Logout should redirect to home"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: El perfil ya no debería funcionar después de cerrar sesión
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
