---
id: 587d8249367417b2b2512c3f
title: Set a Content Security Policy with helmet.contentSecurityPolicy()
challengeType: 2
videoUrl: ''
localeTitle: Definir uma política de segurança de conteúdo com helmet.contentSecurityPolicy ()
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Esse desafio destaca uma nova e promissora defesa que pode reduzir significativamente o risco e o impacto de muitos tipos de ataques em navegadores modernos. Ao definir e configurar uma política de segurança de conteúdo, você pode evitar a injeção de qualquer coisa não intencional em sua página. Isso protegerá seu aplicativo contra vulnerabilidades de XSS, rastreamento indesejado, quadros mal-intencionados e muito mais. O CSP funciona definindo uma lista de permissões de fontes de conteúdo confiáveis. Você pode configurá-los para cada tipo de recurso que uma página da Web possa precisar (scripts, folhas de estilo, fontes, quadros, mídia etc.). Existem várias diretivas disponíveis, portanto, o proprietário de um site pode ter um controle granular. Veja HTML 5 Rocks, KeyCDN para mais detalhes. Infelizmente, o CSP não é suportado pelo navegador mais antigo. Por padrão, as diretivas estão abertas, por isso é importante definir a diretiva defaultSrc como um fallback. O Helmet suporta os estilos de nomenclatura defaultSrc e default-src. O fallback aplica-se à maioria das diretivas não especificadas. Neste exercício, use helmet.contentSecurityPolicy () e configure-o definindo a diretiva defaultSrc como [&quot;self&quot;] (a lista de fontes permitidas deve estar em uma matriz), para confiar apenas no endereço do site por padrão. Defina também a diretiva scriptSrc para permitir que os scripts sejam baixados do seu site e do domínio &#39;trusted-cdn.com&#39;. Dica: na palavra-chave &quot;&#39;self&#39;&quot;, as aspas simples fazem parte da palavra-chave em si, portanto, ela deve estar entre aspas duplas para funcionar. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: middleware helmet.csp () deve ser montado corretamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "csp"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Sua configuração csp não está correta. defaultSrc deve ser ["" self ""] e scriptSrc deve ser ["" self "", "trusted-cdn.com"]'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { var cspHeader = Object.keys(data.headers).filter(function(k){ return k === "content-security-policy" || k === "x-webkit-csp" || k === "x-content-security-policy" })[0]; assert.equal(data.headers[cspHeader], "default-src "self"; script-src "self" trusted-cdn.com"); }, xhr => { throw new Error(xhr.responseText); })'

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
