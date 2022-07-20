---
id: 587d7fb5367417b2b2512c01
title: Gerenciar dependências do npm entendendo o versionamento semântico
challengeType: 2
forumTopicId: 301529
dashedName: manage-npm-dependencies-by-understanding-semantic-versioning
---

# --description--

As `Versions` (versões) dos pacotes do npm na seção de dependências do seu arquivo package.json seguem o que chamamos de Semantic Versioning (SemVer), um padrão do setor para versionamento de software, com o objetivo de facilitar o gerenciamento de dependências. Bibliotecas, frameworks ou outras ferramentas publicadas no npm devem usar o SemVer para comunicar claramente que tipo de mudanças os projetos podem esperar caso eles atualizem.

Conhecer o SemVer pode ser útil quando você desenvolve um software que usa dependências externas (algo que você faz quase sempre). Um dia, seu entendimento desses números vai evitar que você introduza acidentalmente alterações que causem problemas em seu projeto, sem compreender por que as coisas que funcionaram ontem, de repente, não funcionam hoje. É assim que o Versionamento Semântico funciona de acordo com o site oficial:

```json
"package": "MAJOR.MINOR.PATCH"
```

A versão MAJOR (principal) deve incrementar quando você fizer alterações incompatíveis na API. A versão MINOR (secundária) deve incrementar quando adicionar funcionalidades retrocompatíveis. A versão PATCH deve incrementar quando você fizer consertos de bugs retrocompatíveis. Isso significa que PATCHes são correções de bugs e MINORs adicionam novas funcionalidades, mas nenhum deles quebra o que funcionava antes. Por fim, as MAJORs adicionam alterações que não funcionarão com versões anteriores.

# --instructions--

Na seção de dependências do seu arquivo package.json, altere a `version` do moment para que corresponda à versão MAJOR 2, à versão MINOR 10 e à versão 2 de PATCH

# --hints--

As "dependencies" devem incluir o "moment"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'moment',
        '"dependencies" does not include "moment"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A versão do "moment" deve ser a "2.10.2"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.equal(
        packJson.dependencies.moment,
        '2.10.2',
        'Wrong version of "moment". It should be 2.10.2'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
