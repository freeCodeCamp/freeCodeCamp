---
id: 5895f70df9fc0f352b528e6a
title: Create New Middleware
localeTitle: Crear nuevo middleware
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a> . 
Al igual que en, cualquier usuario puede simplemente ir a / profile si se autenticaron o no escribiendo la url. Queremos evitarlo comprobando si el usuario se autentica primero antes de representar la página de perfil. Este es el ejemplo perfecto de cuándo crear un middleware. 
El desafío aquí es crear la función de middleware <code>ensureAuthenticated(req, res, next)</code> , que verificará si un usuario se autentica llamando a los pasaportes autenticados en la <em>solicitud,</em> que a su vez verifica <em>si</em> es necesario definir el <em>usuario</em> . Si es así, se debe llamar a <em>next ()</em> , de lo contrario, solo podemos responder a la solicitud con un redireccionamiento a nuestra página de inicio para iniciar sesión. Una implementación de este middleware es: 
<pre> la función garantizarAutenticada (req, res, next) { 
if (req.isAuthenticated ()) { 
return next (); 
} 
res.redirect (&#39;/&#39;); 
}; </pre> 
Ahora agregue <em>asegúrese de Autentificado</em> como un middleware a la solicitud de la página de perfil antes del argumento a la solicitud de obtención que contiene la función que representa la página. 
<pre> app.route (&#39;/ profile&#39;) 
.get (asegurarAuthenticated, (req, res) =&gt; { 
res.render (process.cwd () + &#39;/ views / pug / profile&#39;); 
}); </pre> 
Envía tu página cuando creas que lo has hecho bien. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Middleware asegurarAutenticado debe implementarse y en nuestra ruta / perfil
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /ensureAuthenticated[^]*req.isAuthenticated/gi, "Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function"); assert.match(data, /profile[^]*get[^]*ensureAuthenticated/gi, "Your ensureAuthenticated middleware should be attached to the /profile route"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Una solicitud de obtención a / perfil redirige correctamente a / ya que no estamos autenticados
    testString: 'getUserInput => $.get(getUserInput("url")+ "/profile") .then(data => { assert.match(data, /Home page/gi, "An attempt to go to the profile at this point should redirect to the homepage since we are not logged in"); }, xhr => { throw new Error(xhr.statusText); })'

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
