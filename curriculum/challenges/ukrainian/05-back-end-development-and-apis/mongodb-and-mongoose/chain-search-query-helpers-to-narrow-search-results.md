---
id: 587d7fb9367417b2b2512c12
title: Ланцюжкові помічники пошукових запитів для звуження результату
challengeType: 2
forumTopicId: 301533
dashedName: chain-search-query-helpers-to-narrow-search-results
---

# --description--

Якщо ви не передаєте зворотній виклик як останній аргумент до `Model.find()` (або інших пошукових методів), запит не буде виконуватися. Ви можете зберегти запит в змінній для подальшого використання. Цей тип об'єкту дозволяє створювати запит за допомогою ланцюгового синтаксису. Сам пошук виконується, коли ви остаточно з'єднали метод `.exec()`. Ви завжди повинні передавати зворотний виклик цьому останньому методу. Існує багато помічників для запитів, тут ми використовуємо найпоширеніші.

# --instructions--

Змініть функцію `queryChain`, щоб знайти людей, які люблять їжу, вказану змінною `foodToSearch`. Посортуйте їх за `name`, знизьте кількість результатів до двох документів та приховайте їхній вік. Об'єднайте `.find()`, `.sort()`, `.limit()`, `.select()` та `.exec()`. Передайте зворотній виклик `done(err, data)` до `exec()`.

# --hints--

Використання ланцюгових помічників для запитів має бути успішним

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/query-tools',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'Pablo', age: 26, favoriteFoods: ['burrito', 'hot-dog'] },
      { name: 'Bob', age: 23, favoriteFoods: ['pizza', 'nachos'] },
      { name: 'Ashley', age: 32, favoriteFoods: ['steak', 'burrito'] },
      { name: 'Mario', age: 51, favoriteFoods: ['burrito', 'prosciutto'] }
    ])
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an Array');
      assert.equal(
        data.length,
        2,
        'the data array length is not what expected'
      );
      assert.notProperty(
        data[0],
        'age',
        'The returned first item has too many properties'
      );
      assert.equal(
        data[0].name,
        'Ashley',
        'The returned first item name is not what expected'
      );
      assert.notProperty(
        data[1],
        'age',
        'The returned second item has too many properties'
      );
      assert.equal(
        data[1].name,
        'Mario',
        'The returned second item name is not what expected'
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
