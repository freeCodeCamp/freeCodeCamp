---
id: 587d7fb5367417b2b2512c01
title: Manage npm Dependencies By Understanding Semantic Versioning
localeTitle: Gerenciar Dependências do npm Entendendo o Versionamento Semântico
challengeType: 2
---

## Description
<section id='description'> 
Versões dos pacotes npm na seção de dependências do seu package.json seguem o que é chamado de Semântica, um padrão da indústria para versionamento de software com o objetivo de facilitar o gerenciamento de dependências. Bibliotecas, estruturas ou outras ferramentas publicadas no npm devem usar o SemVer para comunicar claramente que tipo de mudanças os projetos que dependem do pacote podem esperar se atualizarem. 
SemVer não faz sentido em projetos sem APIs públicas - portanto, a menos que seu projeto seja semelhante aos exemplos acima, use outro formato de versão. 
Então, por que você precisa entender a SemVer? 
Saber SemVer pode ser útil quando você desenvolve softwares que usam dependências externas (o que você quase sempre faz). Um dia, a sua compreensão desses números evitará que você introduza acidentalmente alterações inesperadas em seu projeto sem entender por que as coisas “que funcionaram ontem” de repente não o fazem. 
É assim que o Versioning Semântico funciona de acordo com o site oficial: 
Dado um número de versão MAJOR.MINOR.PATCH, incremente a: 
versão MAJOR quando você faz alterações incompatíveis de API, versão 
MINOR quando adiciona funcionalidade de maneira compatível com versões anteriores e 
versão PATCH quando você faz correções de bugs compatíveis com versões anteriores. 
Isso significa que os PATCHES são correções de bugs e os MINORs adicionam novos recursos, mas nenhum deles quebra o que funcionou antes. Finalmente, os MAJORs adicionam alterações que não funcionam com versões anteriores. 
Exemplo 
Um número de versão semântica: 1.3.8 
Instruções 
Na seção dependencies do seu pacote.json, altere a versão do momento para coincidir com MAJOR versão 2, MINOR versão 10 e PATCH versão 2 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "dependências devem incluir 'momento' "
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'A versão "momento" deve ser "2.10.2" '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^[\^\~]?2\.10\.2/, ''Wrong version of "moment". It should be 2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
