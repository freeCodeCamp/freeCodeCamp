---
id: 587d7fb5367417b2b2512c03
title: Usar o circunflexo para usar a última versão secundária de uma dependência
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

Da mesma forma que o til, que aprendemos no último desafio e que permite que o npm instale o último PATCH de uma dependência, o circunflexo (`^`) permite que o npm instale atualizações futuras também. A diferença é que o circunflexo permitirá tanto atualizações MINOR quanto PATCHes.

Sua versão atual de `@freecodecamp/example` deve ser `~1.2.13`, o que permitirá que o npm instale a versão `1.2.x` mais recente. Se você usasse o circunflexo (^) como um prefixo de versão, o npm teria permissão para atualizar para qualquer versão `1.x.x`.

```json
"package": "^1.3.8"
```

Isso permitiria atualizações para qualquer versão `1.x.x` do pacote.

# --instructions--

Use o circunflexo (`^`) para prefixar a versão de `@freecodecamp/example` em suas dependências e permitir que o npm atualize para qualquer versão MINOR.

**Observação:** os números da versão em si não devem ser alterados.

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

A versão de `"@freecodecamp/example"` deve corresponder a `"^1.x.x"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\^1\./,
        'Wrong version of "@freecodecamp/example". It should be ^1.2.13'
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
