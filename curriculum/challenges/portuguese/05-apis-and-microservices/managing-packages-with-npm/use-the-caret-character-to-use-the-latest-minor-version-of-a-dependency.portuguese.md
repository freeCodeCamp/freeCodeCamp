---
id: 587d7fb5367417b2b2512c03
title: Use the Caret-Character to Use the Latest Minor Version of a Dependency
localeTitle: Use o Caret Caret para usar a última versão menor de uma dependência
challengeType: 2
---

## Description
<section id='description'> 
Semelhante ao modo como o til (~) que aprendemos no último desafio permite que o npm instale o último PATCH para uma dependência, o cursor (^) também permite que o npm instale atualizações futuras. A diferença é que o cursor permite tanto atualizações MINORIS quanto PATCHES. 
No momento, sua versão atual do momento deve ser ~ 2.10.2, que permite que o npm seja instalado na última versão 2.10.x. Se, em vez disso, usássemos o cursor (^) como nosso prefixo de versão, o npm teria permissão para atualizar para qualquer versão 2.xx. 
Exemplo 
<code>"some-package-name": "^1.3.8" allows updates to any 1.xx version.</code> 
Instruções 
Use o caractere de interpolação (^) para prefixar a versão do momento em suas dependências e permitir que o npm a atualize para qualquer nova versão MINOR. 
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
  - text: 'A versão "momento" deve corresponder a "^ 2.x.x" '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\^2\./, ''Wrong version of "moment". It should be ^2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
