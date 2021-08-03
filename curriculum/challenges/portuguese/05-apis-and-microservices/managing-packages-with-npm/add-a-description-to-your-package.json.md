---
id: 587d7fb3367417b2b2512bfc
title: Adicionar uma descrição ao package.json
challengeType: 2
forumTopicId: 301522
dashedName: add-a-description-to-your-package-json
---

# --description--

A próxima parte de um bom arquivo package.json é o campo `description`. É aqui que você deve colocar uma descrição curta, mas informativa, do projeto.

Se você planeja publicar um pacote no npm, esta é a string que deve vender a ideia ao usuário para que ele decida se deseja instalar o pacote ou não. No entanto, esse não é o único caso de uso para a descrição. Ela é uma ótima maneira de resumir o que um projeto faz. Também é importante, em qualquer projeto do Node.js, ajudar outros desenvolvedores, futuros mantenedores ou, até mesmo, seu futuro eu a entender rapidamente o projeto.

Independentemente do que você planeja para seu projeto, uma descrição é definitivamente recomendada. Exemplo:

```json
"description": "A project that does something awesome",
```

# --instructions--

Adicione uma `description` ao arquivo package.json do projeto.

**Observação:** lembre-se de usar aspas duplas para nomes de campo (") e vírgulas (,) para separar os campos.

# --hints--

O package.json deve ter uma chave "description" válida

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.description, '"description" is missing');
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
