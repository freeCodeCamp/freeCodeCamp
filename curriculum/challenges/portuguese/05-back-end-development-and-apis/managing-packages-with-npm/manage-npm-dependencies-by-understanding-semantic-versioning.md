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

Na seção de dependências do arquivo `package.json`, altere a versão de `@freecodecamp/example` para que corresponda à versão MAJOR 1, à versão MINOR 2 e à versão PATCH 13

# --hints--

`"dependencies"` deve incluir `"@freecodecamp/example"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" does not include "@freecodecamp/example"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A versão de `"@freecodecamp/example"` deve ser a `"1.2.13"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.equal(
        packJson.dependencies["@freecodecamp/example"],
        '1.2.13',
        'Wrong version of "@freecodecamp/example". It should be 1.2.13'
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
