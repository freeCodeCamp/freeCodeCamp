---
id: 587d8248367417b2b2512c3d
title: Disable DNS Prefetching with helmet.dnsPrefetchControl()
challengeType: 2
videoUrl: ''
localeTitle: Desativar pré-busca de DNS com helmet.dnsPrefetchControl ()
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Para melhorar o desempenho, a maioria dos navegadores pré-busca registros DNS para os links em uma página. Dessa forma, o ip de destino já é conhecido quando o usuário clica em um link. Isso pode levar ao uso excessivo do serviço DNS (se você possui um site grande, visitado por milhões de pessoas ...), problemas de privacidade (um intruso poderia inferir que você está em uma determinada página) ou alteração de estatísticas de página (alguns links podem aparecem visitados mesmo que não sejam). Se você tiver necessidades de alta segurança, poderá desativar a pré-busca de DNS, ao custo de uma penalidade de desempenho. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O middleware helmet.dnsPrefetchControl () deve ser montado corretamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "dnsPrefetchControl"); assert.equal(data.headers["x-dns-prefetch-control"], "off"); }, xhr => { throw new Error(xhr.responseText); })'

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
