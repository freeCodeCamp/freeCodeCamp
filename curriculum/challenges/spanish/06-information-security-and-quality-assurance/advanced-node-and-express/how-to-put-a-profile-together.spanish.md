---
id: 5895f70ef9fc0f352b528e6b
title: How to Put a Profile Together
challengeType: 2
videoUrl: ''
localeTitle: Cómo armar un perfil
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Ahora que podemos asegurarnos de que el usuario que accede al <em>/ profile</em> esté autenticado, ¡podemos usar la información contenida en &#39;req.user&#39; en nuestra página! Continúe y pase el objeto que contiene la variable <em>nombre de usuario que</em> equivale a &#39;req.user.username&#39; en el método de representación de la vista de perfil. Luego vaya a su vista &#39;profile.pug&#39; y añada la línea <code>h2.center#welcome Welcome, #{username}!</code> creando el elemento h2 con la clase &#39;center&#39; e id &#39;welcome&#39; que contiene el texto &#39;Welcome&#39; y el nombre de usuario! También en el perfil, agregue un enlace a <em>/ logout</em> . Esa ruta alojará la lógica para no autenticar a un usuario. <code>a(href=&#39;/logout&#39;) Logout</code> Envíe su página cuando crea que la tiene correcta. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Agregó correctamente una variable de renderizado Pug a / perfil
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /\/views\/pug\/profile[^]*username:( |)req.user.username/gi, "You should be passing the variable username with req.user.username into the render function of the profile page"); }, xhr => { throw new Error(xhr.statusText); })'

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
