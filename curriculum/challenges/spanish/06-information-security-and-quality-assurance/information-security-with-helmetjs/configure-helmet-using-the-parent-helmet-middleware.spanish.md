---
id: 587d8249367417b2b2512c40
title: Configure Helmet Using the ‘parent’ helmet() Middleware
challengeType: 2
videoUrl: ''
localeTitle: Configurar casco usando el casco "padre" () Middleware
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . app.use (helmet ()) incluirá automáticamente todo el middleware introducido anteriormente, excepto noCache () y contentSecurityPolicy (), pero se pueden habilitar si es necesario. También puede desactivar o configurar cualquier otro middleware individualmente, utilizando un objeto de configuración. // Ejemplo de <code>app.use(helmet({</code> <code>frameguard: { // configure</code> <code>action: &#39;deny&#39;</code> <code>},</code> <code>contentSecurityPolicy: { // enable and configure</code> <code>directives: {</code> <code>defaultSrc: [&quot;self&quot;],</code> <code>styleSrc: [&#39;style.com&#39;],</code> <code>}</code> <code>},</code> <code>dnsPrefetchControl: false // disable</code> <code>}))</code> Presentamos cada middleware por separado para fines de enseñanza y para facilitar la prueba. Usar el middleware &#39;parent&#39; helmet () es más fácil y más limpio para un proyecto real. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: no hay pruebas - es un desafío descriptivo
    testString: assert(true)

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
