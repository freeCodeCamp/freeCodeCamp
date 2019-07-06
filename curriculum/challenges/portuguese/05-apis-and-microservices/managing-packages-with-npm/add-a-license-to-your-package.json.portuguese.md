---
id: 587d7fb4367417b2b2512bfe
title: Add a License to Your package.json
localeTitle: Adicione uma licença ao seu pacote.json
challengeType: 2
---

## Description
<section id='description'> 
O campo de licença é onde você informa aos usuários do seu projeto o que eles podem fazer com ele. 
Algumas licenças comuns para projetos de código aberto incluem o MIT e o BSD. http://choosealicense.com é um ótimo recurso se você quiser saber mais sobre qual licença pode se encaixar em seu projeto. 
Informações de licença não são necessárias. As leis de direitos autorais na maioria dos países dão a você a propriedade do que você cria por padrão. No entanto, é sempre uma boa prática declarar explicitamente o que os usuários podem e não podem fazer. 
Exemplo 
<code>"license": "MIT",</code> 
Instruções 
Preencha o campo de licença no package.json do seu projeto Glitch conforme achar conveniente. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'package.json deve ter uma chave de "licença" válida'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.license, ''"license" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
