---
id: bd7158d8c443edefaeb5bdef
title: Timestamp Microservice
localeTitle: Microservice de registro de data e hora
challengeType: 4
isRequired: true
---

## Description
<section id='description'> 
Crie um aplicativo JavaScript de pilha completa que seja funcionalmente semelhante a este: <a href='https://curse-arrow.glitch.me/' target='_blank'>https://curse-arrow.glitch.me/</a> . 
Trabalhar neste projeto envolverá você escrevendo seu código no Glitch em nosso projeto inicial. Depois de concluir este projeto, você pode copiar sua URL de falha pública (para a página inicial do seu aplicativo) nesta tela para testá-lo! Opcionalmente, você pode optar por escrever seu projeto em outra plataforma, mas deve estar publicamente visível para nossos testes. 
iniciar este projeto em Glitch usando <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-timestamp/' target='_blank'>este link</a> ou clonar <a href='https://github.com/freeCodeCamp/boilerplate-project-timestamp/'>este repositório</a> no GitHub! Se você usa o Glitch, lembre-se de salvar o link do seu projeto em algum lugar seguro! 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Ele deve manipular uma data válida e retornar o registro de data e hora correto do unix'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.unix, 1482624000000, ''Should be a valid unix timestamp''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Ele deve manipular uma data válida e retornar a string UTC correta'
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.utc, ''Sun, 25 Dec 2016 00:00:00 GMT'', ''Should be a valid UTC date string''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Ele deve manipular uma data unix válida e retornar o registro de data e hora correto do unix'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/1482624000000'').then(data => { assert.equal(data.unix, 1482624000000) ;  }, xhr => { throw new Error(xhr.responseText); })'
  - text: Deve devolver a mensagem de erro esperada para uma data inválida
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/this-is-not-a-date'').then(data => { assert.equal(data.error.toLowerCase(), ''invalid date'');}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Ele deve manipular um parâmetro de data vazio e retornar a hora atual no formato unix'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp'').then(data => { var now = Date.now(); assert.approximately(data.unix, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Ele deve manipular um parâmetro de data vazio e retornar a hora atual no formato UTC'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp'').then(data => { var now = Date.now(); var serverTime = (new Date(data.utc)).getTime(); assert.approximately(serverTime, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })'

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
