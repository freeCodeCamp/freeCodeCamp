---
id: 587d7fb4367417b2b2512c00
title: Expand Your Project with External Packages from npm
localeTitle: Expanda seu projeto com pacotes externos do npm
challengeType: 2
---

## Description
<section id='description'> 
Um dos maiores motivos para usar um gerenciador de pacotes é seu poderoso gerenciamento de dependências. Em vez de ter que certificar-se de que você obtém todas as dependências manualmente sempre que você configura um projeto em um novo computador, o npm instala automaticamente tudo para você. Mas como pode o npm saber exatamente o que seu projeto precisa? Conheça a seção de dependências do seu package.json. 
Na seção dependencies, os pacotes que o seu projeto requer são armazenados usando o seguinte formato: 
<code>"dependencies": {</code> 
<code>"package-name": "version",</code> 
<code>"express": "4.14.0"</code> 
<code>}</code> 
Instruções 
Adicione a versão 2.14.0 do momento do pacote ao campo dependencies do seu pacote.json 
Moment é uma biblioteca útil para trabalhar com hora e datas. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "dependências devem incluir 'momento' "
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'A versão "momento" deve ser "2.14.0"'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.match(packJson.dependencies.moment, /^[\^\~]?2\.14\.0/, ''Wrong version of "moment" installed. It should be 2.14.0''); }, xhr => { throw new Error(xhr.responseText); })'

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
