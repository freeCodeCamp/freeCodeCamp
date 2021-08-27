---
id: 587d7fb4367417b2b2512c00
title: Expandir seu projeto com pacotes externos do npm
challengeType: 2
forumTopicId: 301527
dashedName: expand-your-project-with-external-packages-from-npm
---

# --description--

Uma das maiores razões para usar um gerenciador de pacotes é a sua poderosa gestão de dependências. Em vez de ter que garantir manualmente que tem todas as dependências sempre que você configurar um projeto em um novo computador, o npm instala tudo automaticamente para você. Mas como o npm pode saber exatamente de que seu projeto precisa? Conheça a seção `dependencies` do seu arquivo package.json.

Nesta seção, pacotes de que seu projeto necessita são armazenados usando o seguinte formato:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

# --instructions--

Adicione a versão "2.14.0" do pacote "moment" ao campo `dependencies` do seu arquivo package.json.

**Observação:** o moment é uma biblioteca útil para trabalhar com horas e datas.

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

A versão do "moment" deve ser a "2.14.0"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^[\^\~]?2\.14\.0/,
        'Wrong version of "moment" installed. It should be 2.14.0'
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
