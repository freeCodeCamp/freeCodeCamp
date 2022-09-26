---
id: 587d7fb5367417b2b2512c04
title: Remover um pacote de suas dependências
challengeType: 2
forumTopicId: 301530
dashedName: remove-a-package-from-your-dependencies
---

# --description--

Você agora já testou algumas maneiras de gerenciar as dependências do seu projeto usando a seção de dependências do package.json. Você também incluiu pacotes externos, adicionando-os ao arquivo e até dizendo ao npm quais tipos de versões você quer, usando caracteres especiais como o til ou o circunflexo.

Mas e se você quisesse remover um pacote externo do qual você não precisa mais? Você já deve ter adivinhado: apenas remova o par chave-valor correspondente a esse pacote das dependências.

Este mesmo método também se aplica à remoção de outros campos no seu package.json.

# --instructions--

Remova o pacote `@freecodecamp/example` das dependências.

**Observação:** certifique-se de que você tem a quantidade certa de vírgulas depois de removê-lo.

# --hints--

`"dependencies"` não deve incluir `"@freecodecamp/example"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.notProperty(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" still includes "@freecodecamp/example"'
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
