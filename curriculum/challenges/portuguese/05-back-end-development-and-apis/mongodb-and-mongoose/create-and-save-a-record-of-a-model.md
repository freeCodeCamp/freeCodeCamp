---
id: 587d7fb6367417b2b2512c09
title: Criar e salvar um registro de um modelo
challengeType: 2
forumTopicId: 301536
dashedName: create-and-save-a-record-of-a-model
---

# --description--

Neste desafio, você terá que criar e salvar um registro de um modelo.

# --instructions--

Dentro da função `createAndSavePerson`, crie uma instância de documento usando o construtor de modelo `Person` que você criou antes. Passe para o construtor um objeto que tenha os campos `name`, `age` e `favoriteFoods`. Seus tipos devem estar em conformidade com os que estão no `personSchema`. Em seguida, chame o método `document.save()` na instância do documento retornado. Passe a ele um callback usando a convenção do Node. Este é um padrão comum. Todos os métodos CRUD a seguir recebem uma função de callback como essa como o último argumento.

```js
/* Example */

// ...
person.save(function(err, data) {
  //   ...do your stuff here...
});
```

# --hints--

Você deve ter sucesso na criação e no salvamento de itens do banco de dados

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/create-and-save-person').then(
    (data) => {
      assert.isString(data.name, '"item.name" should be a String');
      assert.isNumber(data.age, '28', '"item.age" should be a Number');
      assert.isArray(
        data.favoriteFoods,
        '"item.favoriteFoods" should be an Array'
      );
      assert.equal(data.__v, 0, 'The db item should be not previously edited');
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
