---
id: 587d7fb4367417b2b2512bfd
title: Add Keywords to Your package.json
localeTitle: Adicione palavras-chave ao seu pacote.json
challengeType: 2
---

## Description
<section id='description'> 
O campo de palavras-chave é onde você pode descrever seu projeto usando palavras-chave relacionadas. 
Exemplo 
<code>"keywords": [ "descriptive", "related", "words" ],</code> 
Como você pode ver, este campo é estruturado como um array de strings com aspas duplas. 
Instruções 
Adicione uma matriz de strings adequadas ao campo keywords no package.json do seu projeto Glitch. 
Uma das palavras-chave deve ser freecodecamp. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'package.json deve ter uma chave "keywords" válida'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.keywords, ''"keywords" is missing''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'palavras-chave campo deve ser uma matriz '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.isArray(packJson.keywords, ''"keywords" is not an array''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '"palavras-chave" devem incluir "freecodecamp"'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);     assert.include(packJson.keywords, ''freecodecamp'', ''"keywords" does not include "freecodecamp"''); },  xhr => { throw new Error(xhr.responseText); })'

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
