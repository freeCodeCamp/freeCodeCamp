---
id: 587d7fb5367417b2b2512c04
title: Remove a Package from Your Dependencies
localeTitle: Remover um pacote de suas dependências
challengeType: 2
---

## Description
<section id='description'> 
Agora você testou algumas maneiras de gerenciar dependências do seu projeto usando a seção de dependências do package.json. Você incluiu pacotes externos adicionando-os ao arquivo e até informou ao npm que tipos de versões você deseja usando caracteres especiais como o til (~) ou o cursor (^). 
Mas e se você quiser remover um pacote externo que não precisa mais? Você já deve ter adivinhado - Apenas remova a "chave" correspondente: par de valores para isso de suas dependências. 
Esse mesmo método se aplica à remoção de outros campos no seu package.json também 
Instruções 
Remova o momento do pacote de suas dependências. 
Verifique se você tem a quantidade certa de vírgulas depois de removê-lo. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "'dependências' não devem incluir 'momento' "
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.notProperty(packJson.dependencies, ''moment'', ''"dependencies" still includes "moment"''); }, xhr => { throw new Error(xhr.responseText); })'

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
