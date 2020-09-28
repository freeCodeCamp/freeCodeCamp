---
id: 587d8248367417b2b2512c3c
title: Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
challengeType: 2
videoUrl: ''
localeTitle: Peça aos navegadores que acessem seu site via HTTPS somente com helmet.hsts ()
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . A Segurança de Transporte Rígido HTTP (HSTS) é uma política de segurança da Web que ajuda a proteger sites contra ataques de downgrade de protocolo e sequestro de cookies. Se o seu site pode ser acessado via HTTPS, você pode pedir aos navegadores do usuário para evitar o uso de HTTP inseguro. Ao definir o cabeçalho Strict-Transport-Security, você indica aos navegadores que usem HTTPS para as solicitações futuras em um período de tempo especificado. Isso funcionará para as solicitações após a solicitação inicial. Configure helmet.hsts () para usar HTTPS nos próximos 90 dias. Passe o objeto de configuração {maxAge: timeInSeconds, force: true}. Glitch já tem hsts habilitado. Para sobrescrever suas configurações, você precisa definir o campo &quot;force&quot; como true no objeto de configuração. Vamos interceptar e restaurar o cabeçalho Glitch, depois de inspecioná-lo para teste. Nota: A configuração de HTTPS em um site personalizado requer a aquisição de um domínio e um certificado SSL / TSL. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O middleware helmet.hsts () deve ser montado corretamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "hsts"); assert.property(data.headers, "strict-transport-security"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: maxAge deve ser igual a 7776000 ms (90 dias)
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.match(data.headers["strict-transport-security"], /^max-age=7776000;?/); }, xhr => { throw new Error(xhr.responseText); })'

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
