---
id: 587d8249367417b2b2512c3e
title: Disable Client-Side Caching with helmet.noCache()
challengeType: 2
videoUrl: ''
localeTitle: Desativar o cache do cliente com helmet.noCache ()
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Se você está lançando uma atualização para o seu site, e quer que os usuários sempre baixem a versão mais recente, você pode (tentar) desativar o cache no navegador do cliente. Pode ser útil no desenvolvimento também. O armazenamento em cache tem benefícios de desempenho, que você perderá, portanto, use essa opção somente quando houver uma necessidade real. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: middleware helmet.noCache () deve ser montado corretamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "nocache"); assert.equal(data.headers["cache-control"], "no-store, no-cache, must-revalidate, proxy-revalidate"); }, xhr => { throw new Error(xhr.responseText); })'

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
