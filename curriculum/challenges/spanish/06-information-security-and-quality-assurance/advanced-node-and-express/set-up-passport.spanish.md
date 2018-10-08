---
id: 5895f70cf9fc0f352b528e65
title: Set up Passport
localeTitle: Configurar pasaporte
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a> . 
Es hora de configurar <em>Passport</em> para que finalmente podamos comenzar a permitir que un usuario se registre o inicie sesión en una cuenta! Además de Passport, usaremos Express-session para manejar las sesiones. El uso de este middleware guarda el id de sesión como una cookie en el cliente y nos permite acceder a los datos de la sesión usando ese id en el servidor. De esta manera, mantenemos la información de la cuenta personal fuera de la cookie utilizada por el cliente para verificar que nuestro servidor esté autenticado y solo mantengamos la <em>clave</em> para acceder a los datos almacenados en el servidor. 
Para configurar Passport para su uso en su proyecto, primero deberá agregarlo como una dependencia en su package.json. <code>&quot;passport&quot;: &quot;^0.3.2&quot;</code> 
Además, agregue Express-session como una dependencia ahora también. Express-session tiene un montón de funciones avanzadas que puedes usar, ¡pero por ahora solo usaremos lo básico! <code>&quot;express-session&quot;: &quot;^1.15.0&quot;</code> 
Deberá configurar los ajustes de la sesión ahora e inicializar Passport. Asegúrese de crear primero las variables &#39;sesión&#39; y &#39;pasaporte&#39; para requerir &#39;sesión rápida&#39; y &#39;pasaporte&#39; respectivamente. 
Para configurar su aplicación Express para usar la sesión, definiremos solo algunas opciones básicas. Asegúrese de agregar &#39;SESSION_SECRET&#39; a su archivo .env y asígnele un valor aleatorio. Esto se usa para calcular el hash utilizado para cifrar su cookie. 
<pre> app.use (session ({ 
secret: process.env.SESSION_SECRET, 
resave: true, 
saveUninitialized: true, 
})); </pre> 
También puede continuar y decirle a su aplicación Express que <b>use</b> &#39;passport.initialize ()&#39; y &#39;passport.session ()&#39;. (Por ejemplo, <code>app.use(passport.initialize());</code> ) 
Envíe su página cuando crea que la tiene correcta. Si está teniendo errores, puede consultar el proyecto completado hasta este punto <a href='https://gist.github.com/JosephLivengood/338a9c5a326923c3826a666d430e65c3'>aquí</a> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Passort y Express-Session son dependencias.
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport", "Your project should list "passport" as a dependency"); assert.property(packJson.dependencies, "express-session", "Your project should list "express-session" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Dependencias requeridas correctamente
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")passport("|")/gi, "You should have required passport"); assert.match(data, /require.*("|")express-session("|")/gi, "You should have required express-session"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: La aplicación Express usa nuevas dependencias
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.initialize/gi, "Your express app should use "passport.initialize()""); assert.match(data, /passport.session/gi, "Your express app should use "passport.session()""); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Sesión y sesión secreta correctamente configurada
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /secret:( |)process.env.SESSION_SECRET/gi, "Your express app should have express-session set up with your secret as process.env.SESSION_SECRET"); }, xhr => { throw new Error(xhr.statusText); })'

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
