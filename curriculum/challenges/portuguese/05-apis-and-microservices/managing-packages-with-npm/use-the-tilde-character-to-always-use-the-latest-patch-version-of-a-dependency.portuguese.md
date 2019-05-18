---
id: 587d7fb5367417b2b2512c02
title: Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency
localeTitle: Use o caractere Tilde para sempre usar a versão de patch mais recente de uma dependência
challengeType: 2
---

## Description
<section id='description'> 
No último desafio, dissemos ao npm para incluir apenas uma versão específica de um pacote. Essa é uma maneira útil de congelar suas dependências se você precisar garantir que partes diferentes do seu projeto permaneçam compatíveis umas com as outras. Mas, na maioria dos casos de uso, você não quer perder correções de bugs, pois elas geralmente incluem patches de segurança importantes e (espero) não quebram as coisas ao fazê-lo. 
Para permitir que uma dependência npm seja atualizada para a versão PATCH mais recente, você pode prefixar a versão da dependência com o caractere til (~). Em package.json, nossa regra atual de como o npm pode atualizar o momento é usar apenas uma versão específica (2.10.2), mas queremos permitir a última versão 2.10.x. 
Exemplo 
<code>"some-package-name": "~1.3.8" allows updates to any 1.3.x version.</code> 
Instruções 
Use o til (~) para prefixar a versão do momento em suas dependências e permitir que o npm o atualize para qualquer nova versão do PATCH. 
Observe que os números da versão não devem ser alterados. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "'dependências' devem incluir 'momento' "
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'A versão "momento" deve corresponder a "~ 2.10.2" '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\~2\.10\.2/, ''Wrong version of "moment". It should be ~2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
