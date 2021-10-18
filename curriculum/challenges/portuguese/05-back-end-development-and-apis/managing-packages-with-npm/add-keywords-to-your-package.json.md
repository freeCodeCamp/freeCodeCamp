---
id: 587d7fb4367417b2b2512bfd
title: Adicionar palavras-chave ao seu package.json
challengeType: 2
forumTopicId: 301526
dashedName: add-keywords-to-your-package-json
---

# --description--

O campo `keywords` é onde você pode descrever seu projeto usando palavras-chave relacionadas. Exemplo:

```json
"keywords": [ "descriptive", "related", "words" ],
```

Como você pode ver, este campo está estruturado como um array de frases cercadas por aspas duplas.

# --instructions--

Adicione uma array de strings adequadas para o campo `keywords` no arquivo package.json do seu projeto.

Uma das palavras-chave deve ser "freecodecamp".

# --hints--

package.json deve ter uma chave "keywords" válida

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.keywords, '"keywords" is missing');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

O campo "keywords" deve ser um array

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.isArray(packJson.keywords, '"keywords" is not an array');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

O campo "keywords" devem incluir "freecodecamp"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.include(
        packJson.keywords,
        'freecodecamp',
        '"keywords" does not include "freecodecamp"'
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
