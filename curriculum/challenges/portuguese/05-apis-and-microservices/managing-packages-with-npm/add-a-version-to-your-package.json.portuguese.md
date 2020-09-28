---
id: 587d7fb4367417b2b2512bff
title: Add a Version to Your package.json
localeTitle: Adicione uma versão ao seu pacote.json
challengeType: 2
---

## Description
<section id='description'> 
A versão é junto com o nome de um dos campos obrigatórios em um package.json. Este campo descreve a versão atual do seu projeto. 
Exemplo 
<code>"version": "1.2",</code> 
Instruções 
Adicione uma versão ao pacote.json no seu projeto Glitch. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'package.json deve ter uma chave "version" válida'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.version, ''"version" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
