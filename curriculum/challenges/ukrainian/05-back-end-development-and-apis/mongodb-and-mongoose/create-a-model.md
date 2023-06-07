---
id: 587d7fb6367417b2b2512c07
title: Створіть модель
challengeType: 2
forumTopicId: 301535
dashedName: create-a-model
---

# --description--

**C**RUD Частина І, Створення

Перш за все, вам необхідна схема. Кожна схема пов'язана з колекцією MongoDB. Вона визначає форму документів у цій колекції. Схеми будують блоки для моделей. Вони можуть бути вкладеними для того, щоб створити складні моделі, але в цьому випадку ми не будемо все ускладнювати. Модель дозволяє створювати екземпляри об’єктів, які називаються документами.

Replit – це реальний сервер, а на реальних серверах взаємодії з базою даних відбуваються у функціях обробника. Ці функції виконуються, коли трапляється якась подія (наприклад, хтось попадає на кінцеву точку вашого API). Ми будемо дотримуватись того самого підходу в цих вправах. Функція `done()` – це зворотній виклик, який повідомляє нас про те, що ми можемо продовжувати після завершення асинхронної операції, як-от як вставка, пошук, оновлення чи видалення. Вона відповідає конвенції Node і повинна називатися `done(null, data)` в разі удачі або `done(err)` в разі помилки.

Увага! Помилки можуть виникнути при взаємодії з віддаленими службами!

```js
/* Example */

const someFunc = function(done) {
  //... do something (risky) ...
  if (error) return done(error);
  done(null, result);
};
```

# --instructions--

Створіть схему під назвою `personSchema` за наступним зразком:

* Обов‘язкове поле `name` типу `String`
* Поле `age` типу `Number`
* Поле `favoriteFoods` типу `[String]`

Використайте основні типи схем Mongoose. Якщо ви хочете, то також можете додати більше полів, використати прості валідатори (наприклад, обов’язкові або унікальні) і встановити значення за замовчуванням. Див. нашу <a href="https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/" target="_blank" rel="noopener noreferrer nofollow">публікацію про Mongoose</a>.

Тепер створіть модель з `personSchema` та призначте її до наявної змінної `Person`.

# --hints--

Створення екземпляру зі схеми Mongoose повинно пройти успішно

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/mongoose-model', {
    name: 'Mike',
    age: 28,
    favoriteFoods: ['pizza', 'cheese']
  }).then(
    (data) => {
      assert.equal(data.name, 'Mike', '"model.name" is not what expected');
      assert.equal(data.age, '28', '"model.age" is not what expected');
      assert.isArray(
        data.favoriteFoods,
        '"model.favoriteFoods" is not an Array'
      );
      assert.include(
        data.favoriteFoods,
        'pizza',
        '"model.favoriteFoods" does not include the expected items'
      );
      assert.include(
        data.favoriteFoods,
        'cheese',
        '"model.favoriteFoods" does not include the expected items'
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
