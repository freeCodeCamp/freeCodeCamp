---
id: 589a69f5f9fc0f352b528e70
title: Implementation of Social Authentication
challengeType: 2
videoUrl: ''
localeTitle: Implementación de la autenticación social.
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-socialauth/">GitHub</a> . La ruta básica que seguirá este tipo de autenticación en su aplicación es: <ol><li> El usuario hace clic en un botón o enlace que lo envía a nuestra ruta para autenticarse mediante una estrategia específica (por ejemplo, GitHub) </li><li> Su ruta llama a <code>passport.authenticate(&#39;github&#39;)</code> que los redirige a GitHub. </li><li> La página en la que aterriza el usuario, en GitHub, les permite iniciar sesión si aún no lo están. Luego les pide que aprueben el acceso a su perfil desde nuestra aplicación. </li><li> El usuario es devuelto a nuestra aplicación en una url de devolución de llamada específica con su perfil, si se aprueban. </li><li> Ahora están autenticados y su aplicación debería verificar si se trata de un perfil de retorno, o guardarla en su base de datos si no lo está. </li></ol> Las estrategias con OAuth requieren que tenga al menos un <em>ID de cliente</em> y un <em>secreto de cliente,</em> que es una forma de verificar de quién proviene la solicitud de autenticación y si es válida. Estos se obtienen del sitio con el que está intentando implementar la autenticación, como GitHub, y son exclusivos de su aplicación. <b>NO DEBEN SER COMPARTIDOS</b> y nunca deben cargarse en un repositorio público o escribirse directamente en su código. Una práctica común es colocarlos en su archivo <em>.env</em> y hacer referencia a ellos como: <code>process.env.GITHUB_CLIENT_ID</code> . Para este desafío vamos a utilizar la estrategia GitHub. La obtención de su <em>ID de cliente y Secreto <em>de GitHub se realiza en la configuración del perfil de su cuenta en &#39;Configuración del desarrollador&#39; y luego en &#39; <a href="https://github.com/settings/developers">Aplicaciones OAuth</a> &#39;. Haga clic en &#39;Registrar una nueva aplicación&#39;, nombre su aplicación, pegue la url en su página de inicio de Glitch ( <b>no la url del código del proyecto</b> ) y, por último, para la url de devolución de llamada, pegue la misma url que la página de inicio pero con &#39;/ auth / github / callback &#39;añadido. Aquí es donde los usuarios serán redirigidos para que nosotros los manejemos después de la autenticación en GitHub. Guarde la información devuelta como &#39;GITHUB_CLIENT_ID&#39; y &#39;GITHUB_CLIENT_SECRET&#39; en su archivo .env. En su proyecto remezclado, cree 2 rutas aceptando solicitudes GET: / auth / github y / auth / github / callback. El primero solo debe llamar al pasaporte para autenticar &#39;github&#39; y el segundo debe llamar al pasaporte para autenticar &#39;github&#39; con una redirección de falla a &#39;/&#39; y luego, si eso es exitoso, redirigir a &#39;/ profile&#39; (similar a nuestro último proyecto). Un ejemplo de cómo debería verse &#39;/ auth / github / callback&#39; es similar a cómo manejamos un inicio de sesión normal en nuestro último proyecto:</em></em> <pre> <em><em>app.ruta (&#39;/ login&#39;)
  .post (passport.authenticate (&#39;local&#39;, {failureRedirect: &#39;/&#39;}), (req, res) =&gt; {
    res.redirect (&#39;/ profile&#39;);
  });</em></em> </pre> <em><em>Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes revisar el proyecto hasta este punto <a href="https://gist.github.com/JosephLivengood/28ea2cae7e1dc6a53d7f0c42d987313b">aquí</a> .</em></em> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ruta / auth / github correcta
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /("|")\/auth\/github("|")[^]*get.*passport.authenticate.*github/gi, "Route auth/github should only call passport.authenticate with github"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Ruta / auth / github / callback correcto
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /("|")\/auth\/github\/callback("|")[^]*get.*passport.authenticate.*github.*failureRedirect:( |)("|")\/("|")/gi, "Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home"); }, xhr => { throw new Error(xhr.statusText); })'

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
