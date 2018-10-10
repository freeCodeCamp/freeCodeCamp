---
id: 587d8248367417b2b2512c3a
title: Avoid Inferring the Response MIME Type with helmet.noSniff()
challengeType: 2
videoUrl: ''
localeTitle: Evite Inferir o Tipo MIME de Resposta com helmet.noSniff ()
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Os navegadores podem usar o conteúdo ou o sniffing MIME para se adaptar a diferentes tipos de dados provenientes de uma resposta. Eles substituem os cabeçalhos Content-Type para adivinhar e processar os dados. Embora isso possa ser conveniente em alguns cenários, também pode levar a alguns ataques perigosos. Este middleware define o cabeçalho X-Content-Type-Options para nosniff. Isso instrui o navegador a não ignorar o Content-Type fornecido. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: middleware helmet.noSniff () deve ser montado corretamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "nosniff"); assert.equal(data.headers["x-content-type-options"], "nosniff"); }, xhr => { throw new Error(xhr.responseText); })'

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
