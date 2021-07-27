---
id: 587d7fb4367417b2b2512bff
title: Adicionar uma versão ao package.json
challengeType: 2
forumTopicId: 301525
dashedName: add-a-version-to-your-package-json
---

# --description--

Um dos campos obrigatórios do seu arquivo package.json é o `version`. Este campo descreve a versão atual do seu projeto. Exemplo:

```json
"version": "1.2.0",
```

# --instructions--

Adicione uma `version` ao arquivo package.json do projeto.

# --hints--

O package.json deve ter uma chave "version" válida

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.version, '"version" is missing');
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
