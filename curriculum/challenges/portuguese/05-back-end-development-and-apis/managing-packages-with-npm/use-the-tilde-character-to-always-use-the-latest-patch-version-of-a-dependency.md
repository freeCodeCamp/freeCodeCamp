---
id: 587d7fb5367417b2b2512c02
title: Usar o til para usar sempre a última versão de patch de uma dependência
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

No último desafio, você disse ao npm para incluir apenas uma versão específica de um pacote. Essa é uma maneira útil de congelar suas dependências, caso você precise garantir que diferentes partes do seu projeto permaneçam compatíveis entre si. Mas, na maioria dos casos de uso, você não quer perder as correções de erros, já que elas geralmente incluem correções de segurança importantes e (esperamos que) não quebrem nada ao fazer isso.

Para permitir que uma dependência do npm atualize para a última versão de PATCH, você pode prefixar a versão da dependência com o caractere de til (`~`). Aqui está um exemplo de como permitir atualizações para qualquer versão 1.3.x.

```json
"package": "~1.3.8"
```

# --instructions--

No arquivo package.json, sua regra atual de como o npm pode atualizar o moment é usar uma versão específica (2.10.2). Mas agora, você deseja permitir a última versão de 2.10.x.

Use o caractere de til (`~`) para prefixar a versão do momento em suas dependências e permitir que o npm atualize para qualquer versão de PATCH.

**Observação:** os números da versão em si não devem ser alterados.

# --hints--

"dependencies" deve incluir o "moment"

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

A versão do "moment" deve corresponder a "~2.10.2"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^\~2\.10\.2/,
        'Wrong version of "moment". It should be ~2.10.2'
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
