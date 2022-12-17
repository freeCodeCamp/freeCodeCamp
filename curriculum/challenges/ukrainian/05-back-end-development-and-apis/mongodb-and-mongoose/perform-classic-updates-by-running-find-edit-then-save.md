---
id: 587d7fb8367417b2b2512c0e
title: 'Виконайте класичні оновлення, виконавши пошук, редагування і збереження'
challengeType: 2
forumTopicId: 301541
dashedName: perform-classic-updates-by-running-find-edit-then-save
---

# --description--

У старі добрі часи це було те, що потрібно було зробити, аби відредагувати документ і мати можливість якимось чином ним користуватися (наприклад, надіслати його назад у відповіді сервера). Mongoose має спеціальний метод оновлення: `Model.update()`. Він прив'язаний до драйвера з низьким рівнем mongo. Він може редагувати багато документів, що відповідають певним критеріям, але не надсилає оновлений документ, а лише повідомлення про статус. Крім того, це ускладнює перевірку моделі, оскільки просто викликає драйвер mongo напряму.

# --instructions--

Змініть функцію `findEditThenSave`, щоб знайти людину за `_id` (використайте будь-який із вищезгаданих методів), з параметром `personId` як ключ пошуку. Додайте `"hamburger"` до списку `favoriteFoods` (можна використати `Array.push()`). Потім, всередині зворотного виклику пошуку, `save()` (збережіть) оновлений `Person`.

**Примітка:** це може бути складно, якщо у своїй схемі ви оголосили `favoriteFoods` як масив, не вказуючи тип (тобто `[String]`). В такому випадку `favoriteFoods` за замовчуванням приймає змішаний тип, і вам потрібно вручну позначити його як відредагований за допомогою `document.markModified('edited-field')`. Див. нашу <a href="https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/" target="_blank" rel="noopener noreferrer nofollow">публікацію про Mongoose</a>.

# --hints--

Пошук-редагування-оновлення елемента має бути успішним

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
