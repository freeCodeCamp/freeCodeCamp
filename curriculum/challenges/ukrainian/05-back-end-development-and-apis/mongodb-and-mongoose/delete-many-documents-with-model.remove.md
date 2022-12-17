---
id: 587d7fb8367417b2b2512c11
title: Видаліть багато документів за допомогою model.remove()
challengeType: 2
forumTopicId: 301538
dashedName: delete-many-documents-with-model-remove
---

# --description--

`Model.remove()` корисний для видалення всіх документів, що відповідають заданим критеріям.

# --instructions--

Змініть функцію `removeManyPeople`, щоб видалити всіх людей, ім'я яких знаходиться в змінній `nameToRemove`, використовуючи `Model.remove()`. Передайте її до документа запиту з набором полів `name` та зворотнім викликом.

**Примітка:** `Model.remove()` повертає не видалений документ, а об'єкт JSON, що містить вивід операції та кількість постраждалих елементів. Не забудьте передати його до зворотного виклику `done()`, оскільки він буде використовуватися у тестах.

# --hints--

Видалення одразу декількох елементів має пройти успішно

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/remove-many-people',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'Mary', age: 16, favoriteFoods: ['lollipop'] },
      { name: 'Mary', age: 21, favoriteFoods: ['steak'] }
    ])
  }).then(
    (data) => {
      assert.isTrue(!!data.ok, 'The mongo stats are not what expected');
      assert.equal(
        data.n,
        2,
        'The number of items affected is not what expected'
      );
      assert.equal(data.count, 0, 'the db items count is not what expected');
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
