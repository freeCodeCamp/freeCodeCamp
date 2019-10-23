---
id: 587d8247367417b2b2512c39
title: Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()
challengeType: 2
videoUrl: ''
localeTitle: Reduza o risco de ataques de script de site cruzado (XSS) com helmet.xssFilter ()
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . O script entre sites (XSS) é um tipo freqüente de ataque, em que scripts mal-intencionados são injetados em páginas vulneráveis, com o objetivo de roubar dados confidenciais, como cookies de sessão ou senhas. A regra básica para diminuir o risco de um ataque XSS é simples: “Nunca confie na entrada do usuário”. Como desenvolvedor, você deve sempre higienizar toda a entrada vinda de fora. Isso inclui dados provenientes de formulários, URLs de consulta GET e até mesmo de corpos POST. Saneantes significa que você deve encontrar e codificar os caracteres que podem ser perigosos, por exemplo, &lt;,&gt;. Os navegadores modernos podem ajudar a reduzir o risco adotando melhores estratégias de software. Muitas vezes, eles são configuráveis ​​por meio de cabeçalhos http. O cabeçalho HTTP X-XSS-Protection é uma proteção básica. O navegador detecta um potencial script injetado usando um filtro heurístico. Se o cabeçalho estiver ativado, o navegador alterará o código de script, neutralizando-o. Ainda tem suporte limitado. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O middleware helmet.xssFilter () deve ser montado corretamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "xXssProtection"); assert.property(data.headers, "x-xss-protection"); }, xhr => { throw new Error(xhr.responseText); })'

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
