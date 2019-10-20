---
id: 587d8247367417b2b2512c37
title: Hide Potentially Dangerous Information Using helmet.hidePoweredBy()
challengeType: 2
videoUrl: ''
localeTitle: Ocultar informações potencialmente perigosas usando helmet.hidePoweredBy ()
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Os hackers podem explorar vulnerabilidades conhecidas no Express / Node se perceberem que seu site é ativado pelo Express. X-Powered-By: Express é enviado em todas as solicitações provenientes do Express por padrão. O middleware helmet.hidePoweredBy () removerá o cabeçalho X-Powered-By. Você também pode definir explicitamente o cabeçalho para outra coisa, para expulsar as pessoas. eg app.use (helmet.hidePoweredBy ({setTo: &#39;PHP 4.2.0&#39;})) </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O middleware helmet.hidePoweredBy () deve ser montado corretamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "hidePoweredBy"); assert.notEqual(data.headers["x-powered-by"], "Express")}, xhr => { throw new Error(xhr.responseText); })'

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
