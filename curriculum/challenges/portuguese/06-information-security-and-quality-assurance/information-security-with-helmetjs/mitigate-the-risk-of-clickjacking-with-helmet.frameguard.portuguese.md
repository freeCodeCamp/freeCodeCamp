---
id: 587d8247367417b2b2512c38
title: Mitigate the Risk of Clickjacking with helmet.frameguard()
challengeType: 2
videoUrl: ''
localeTitle: Mitigar o risco de clickjacking com helmet.frameguard ()
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Sua página pode ser colocada em um <code>&lt;frame&gt;</code> ou <code>&lt;iframe&gt;</code> sem o seu consentimento. Isso pode resultar em ataques de clickjacking, entre outras coisas. O clickjacking é uma técnica para induzir o usuário a interagir com uma página diferente do que o usuário pensa que é. Isto pode ser obtido executando sua página em um contexto malicioso, por meio de iframing. Nesse contexto, um hacker pode colocar uma camada oculta na sua página. Botões ocultos podem ser usados ​​para executar scripts inválidos. Este middleware define o cabeçalho X-Frame-Options. Ele restringe quem pode colocar seu site em um frame. Tem três modos: DENY, SAMEORIGIN e ALLOW-FROM. Nós não precisamos que nosso aplicativo seja enquadrado. Você deve usar <code>helmet.frameguard()</code> passando com o objeto de configuração <code>{action: &#39;deny&#39;}</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O middleware helmet.frameguard () deve ser montado corretamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "frameguard", "helmet.frameguard() middleware is not mounted correctly"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: helmet.frameguard () 'action' deve ser definido como 'DENY'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.property(data.headers, "x-frame-options"); assert.equal(data.headers["x-frame-options"], "DENY");}, xhr => { throw new Error(xhr.responseText); })'

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
