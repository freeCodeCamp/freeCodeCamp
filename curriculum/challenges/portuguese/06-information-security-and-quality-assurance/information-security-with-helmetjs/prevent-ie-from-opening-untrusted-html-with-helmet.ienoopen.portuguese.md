---
id: 587d8248367417b2b2512c3b
title: Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()
challengeType: 2
videoUrl: ''
localeTitle: Impedir o IE de abrir HTML não confiável com helmet.ieNoOpen ()
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Alguns aplicativos da Web servirão HTML não confiável para download. Algumas versões do Internet Explorer, por padrão, abrem esses arquivos HTML no contexto do seu site. Isso significa que uma página HTML não confiável pode começar a fazer coisas ruins no contexto de suas páginas. Este middleware define o cabeçalho X-Download-Options como noopen. Isso impedirá que os usuários do IE executem downloads no contexto do site confiável. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O middleware helmet.ieNoOpen () deve ser montado corretamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "ienoopen"); assert.equal(data.headers["x-download-options"], "noopen"); }, xhr => { throw new Error(xhr.responseText); })'

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
