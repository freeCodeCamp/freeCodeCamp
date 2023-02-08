---
id: 587d7fb5367417b2b2512c02
title: Usar o til para usar sempre a última versão de patch de uma dependência
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

No último desafio, você disse ao npm para incluir apenas uma versão específica de um pacote. Essa é uma maneira útil de congelar suas dependências, caso você precise garantir que diferentes partes do seu projeto permaneçam compatíveis entre si. Mas, na maioria dos casos de uso, você não quer perder as correções de erros, já que elas geralmente incluem correções de segurança importantes e (esperamos que) não quebrem nada ao fazer isso.

Para permitir que uma dependência do npm atualize para a última versão de PATCH, você pode prefixar a versão da dependência com o caractere de til (`~`). Aqui está um exemplo de como permitir atualizações para qualquer versão `1.3.x`.

```json
"package": "~1.3.8"
```

# --instructions--

No arquivo package.json, a regra atual de como o npm pode atualizar `@freecodecamp/example` é usar uma versão específica (`1.2.13`). Mas agora, você deseja permitir a última versão de `1.2.x`.

Use o til (`~`) para prefixar a versão de `@freecodecamp/example` nas dependências e permitir que o npm atualize o pacote para qualquer nova versão _patch_.

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

A versão de `"@freecodecamp/example"` deve corresponder a `"~1.2.13"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\~1\.2\.13/,
        'Wrong version of "@freecodecamp/example". It should be ~1.2.13'
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
