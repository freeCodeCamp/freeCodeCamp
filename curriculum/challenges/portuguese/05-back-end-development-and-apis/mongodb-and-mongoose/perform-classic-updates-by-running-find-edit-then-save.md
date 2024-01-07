---
id: 587d7fb8367417b2b2512c0e
title: 'Realizar atualizações clássicas executando Find, Edit e Save'
challengeType: 2
forumTopicId: 301541
dashedName: perform-classic-updates-by-running-find-edit-then-save
---

# --description--

Nos bons e velhos tempos, era isso que você precisava fazer se você quisesse editar um documento e ser capaz de usá-lo de algum modo (ou seja, enviando o documento de volta em uma resposta do servidor). O Mongoose tem um método dedicado à atualização: `Model.update()`. Ele está vinculado ao driver do mongo de nível mais baixo. Ele pode editar em massa muitos documentos que correspondem a certos critérios, mas não envia de volta o documento atualizado, apenas uma mensagem de 'status'. Além disso, ele dificulta as validações de modelo, porque apenas chama diretamente o driver do mongo.

# --instructions--

Modifique a função `findEditThenSave` para encontrar uma pessoa por `_id` (use qualquer um dos métodos acima) com o parâmetro `personId` como chave de pesquisa. Adicione `"hamburger"` à lista dos `favoriteFoods` da pessoa (você pode usar `Array.push()`). Em seguida, dentro do callback de find, use `save()` para salvar a `Person` atualizada.

**Observação:** isso pode ser complicado, se em seu Schema você declarou as `favoriteFoods` como um array, sem especificar o tipo (por exemplo, `[String]`). Nesse caso, `favoriteFoods` tem como padrão o tipo Mixed e você precisa marcá-lo manualmente como editado usando `document.markModified('edited-field')`. Veja nosso <a href="https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/" target="_blank" rel="noopener noreferrer nofollow">artigo sobre o Mongoose</a>.

# --hints--

Você deve ter sucesso em encontrar, editar e atualizar um item

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-edit-save', {
    name: 'Poldo',
    age: 40,
    favoriteFoods: ['spaghetti']
  }).then(
    (data) => {
      assert.equal(data.name, 'Poldo', 'item.name is not what is expected');
      assert.equal(data.age, 40, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['spaghetti', 'hamburger'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 1, 'The item should be previously edited');
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
