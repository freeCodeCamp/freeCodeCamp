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

Adicione a versão `1.1.0` do pacote `@freecodecamp/example` ao campo `dependencies` do arquivo `package.json`.

**Observação:** `@freecodecamp/example` é um pacote falso usado como ferramenta de aprendizagem.

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

A versão de `"@freecodecamp/example"` deve ser a `"1.1.0"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^[\^\~]?1\.1\.0/,
        'Wrong version of "@freecodecamp/example" installed. It should be 1.1.0'
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
