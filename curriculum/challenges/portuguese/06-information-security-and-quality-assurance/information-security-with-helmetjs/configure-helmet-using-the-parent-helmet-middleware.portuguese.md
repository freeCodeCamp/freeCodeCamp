---
id: 587d8249367417b2b2512c40
title: Configure Helmet Using the ‘parent’ helmet() Middleware
challengeType: 2
videoUrl: ''
localeTitle: Configurar o capacete usando o middleware "pai" de capacete ()
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . app.use (helmet ()) incluirá automaticamente todos os middlewares apresentados acima, exceto noCache () e contentSecurityPolicy (), mas estes podem ser habilitados se necessário. Você também pode desabilitar ou configurar qualquer outro middleware individualmente, usando um objeto de configuração. // Exemplo <code>app.use(helmet({</code> <code>frameguard: { // configure</code> <code>action: &#39;deny&#39;</code> <code>},</code> <code>contentSecurityPolicy: { // enable and configure</code> <code>directives: {</code> <code>defaultSrc: [&quot;self&quot;],</code> <code>styleSrc: [&#39;style.com&#39;],</code> <code>}</code> <code>},</code> <code>dnsPrefetchControl: false // disable</code> <code>}))</code> Introduzimos cada middleware separadamente para fins de ensino e para facilitar o teste. Usar o middleware &#39;pai&#39; () é mais fácil e mais limpo para um projeto real. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: sem testes - é um desafio descritivo
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
