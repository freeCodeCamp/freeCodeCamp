---
id: 5895f70df9fc0f352b528e69
title: How to Use Passport Strategies
challengeType: 2
videoUrl: ''
localeTitle: Cómo usar las estrategias de pasaporte
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . En el archivo index.pug suministrado hay un formulario de inicio de sesión. Anteriormente se ha ocultado debido al javascript en línea <code>if showLogin</code> con el formulario sangrado después. Antes de que se definiera showLogin como variable, nunca representaba el bloque de código que contenía el formulario. Continua y en el res.render para esa página agrega una nueva variable al objeto <code>showLogin: true</code> . Cuando actualices tu página, deberías ver el formulario! Este formulario está configurado para <b>POST</b> on <em>/ login,</em> por lo que aquí es donde debemos configurar para aceptar el POST y autenticar al usuario. Para este desafío, debes agregar la ruta / inicio de sesión para aceptar una solicitud POST. Para autenticarse en esta ruta, debes agregar un middleware para hacerlo antes de enviar una respuesta. Esto se hace simplemente pasando otro argumento con el middleware antes de su <code>function(req,res)</code> con su respuesta. El middleware a utilizar es <code>passport.authenticate(&#39;local&#39;)</code> . <em>passport.authenticate</em> también puedes tomar algunas opciones como un argumento como: <code>{ failureRedirect: &#39;/&#39; }</code> que es increíblemente útil, así que asegúrate de agregarlo también. Como respuesta después de usar el middleware (que solo se llamará si se pasa el middleware de autenticación) debe redirigir al usuario a <em>/ profile</em> y esa ruta debe mostrar la vista &#39;profile.pug&#39;. Si la autenticación fue exitosa, el objeto de usuario se guardará en <em>req.user</em> . Ahora, en este punto, si ingresa un nombre de usuario y contraseña en el formulario, debe redirigirse a la página de inicio <em>/</em> y en la consola de su servidor debe estar el &quot;Usuario {USERNAME} intentado iniciar sesión&quot;. ya que actualmente no podemos iniciar sesión en un usuario que no está registrado. Envía tu página cuando creas que lo has hecho bien. Si está teniendo errores, puede consultar el proyecto completado hasta este punto <a href="https://gist.github.com/JosephLivengood/8a335d1a68ed9170da02bb9d8f5b71d5">aquí</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos los pasos correctamente implementados en el server.js
    testString: ' getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /showLogin:( |)true/gi, "You should be passing the variable "showLogin" as true to your render function for the homepage"); assert.match(data, /failureRedirect:( |)("|")\/("|")/gi, "Your code should include a failureRedirect to the "/" route"); assert.match(data, /login[^]*post[^]*local/gi, "You should have a route for login which accepts a POST and passport.authenticates local"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Una solicitud POST para / iniciar sesión correctamente redirige a /
    testString: 'getUserInput => $.post(getUserInput("url")+ "/login") .then(data => { assert.match(data, /Looks like this page is being rendered from Pug into HTML!/gi, "A login attempt at this point should redirect to the homepage since we do not have any registered users"); }, xhr => { throw new Error(xhr.statusText); })'

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
