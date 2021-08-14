---
id: 587d7fb8367417b2b2512c0f
title: Executar novas atualizações em um documento usando model.findOneAndUpdate()
challengeType: 2
forumTopicId: 301542
dashedName: perform-new-updates-on-a-document-using-model-findoneandupdate
---

# --description--

Versões recentes do Mongoose possuem métodos para simplificar a atualização dos documentos. Alguns recursos mais avançados (como os hooks pre/post, validação, entre outros) se comportam de modo diferente com esta abordagem. Assim, o método clássico ainda é útil em muitas situações. `findByIdAndUpdate()` pode ser usado na busca por id.

# --instructions--

Modifique a função `findAndUpdate` para encontrar uma pessoa por `Name` e defina a idade da pessoa como `20`. Use o parâmetro `personName` da função como chave de pesquisa.

**Observação:** você deve retornar o documento atualizado. Para fazer isso, você precisa passar o documento de opções `{ new: true }` como o terceiro argumento para `findOneAndUpdate()`. Por padrão, esses métodos retornam o objeto não modificado.

# --hints--

Usar findOneAndUpdate em um item deve ser bem-sucedido

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-one-update', {
    name: 'Dorian Gray',
    age: 35,
    favoriteFoods: ['unknown']
  }).then(
    (data) => {
      assert.equal(data.name, 'Dorian Gray', 'item.name is not what expected');
      assert.equal(data.age, 20, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['unknown'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(
        data.__v,
        0,
        'findOneAndUpdate does not increment version by design!'
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
