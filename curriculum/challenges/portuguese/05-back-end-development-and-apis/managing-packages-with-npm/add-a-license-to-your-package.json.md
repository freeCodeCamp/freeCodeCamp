---
id: 587d7fb4367417b2b2512bfe
title: Adicionar uma licença ao package.json
challengeType: 2
forumTopicId: 301523
dashedName: add-a-license-to-your-package-json
---

# --description--

O campo `license` é onde você informa aos usuários o que eles têm permissão para fazer com o seu projeto.

Algumas licenças comuns para projetos de código aberto incluem a MIT e a BSD. Informações de licença não são necessárias. As leis de direitos autorais na maioria dos países lhe darão a propriedade do que você criou por padrão. No entanto, é sempre uma boa prática indicar explicitamente o que os usuários podem e não podem fazer. Aqui está um exemplo do campo license:

```json
"license": "MIT",
```

# --instructions--

Preencha o campo `license` no arquivo package.json do seu projeto conforme achar adequado.

# --hints--

O package.json deve ter uma chave "license" válida

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.license, '"license" is missing');
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
