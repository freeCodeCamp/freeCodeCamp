---
id: 58a25bcff9fc0f352b528e7e
title: Синхронне перетворення паролів на дані та їх порівняння
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Синхронне перетворення паролів на дані (хешування) легко виконати, однак це може спричинити затримку, якщо використовувати його на серверній стороні з високою вартістю або з хешуванням, яке проводиться дуже часто. Перетворення таким методом так само легко виконати як і ввести

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

Додайте цей метод хешування до свого коду і потім виведіть результат на консоль. Знову ж таки, змінні, що використовуються, вже визначені на сервері, тому вам не потрібно їх змінювати. Ви можете помітити, що незважаючи на те, що ви хешуєте ті самі паролі як і в асинхронному методі, результат на консолі відрізняється. Це пов'язано з випадково згенерованим модифікатором (сіль) кожного разу як створюються перші 22 символи в третьому рядку хешу. Щоб порівняти вхідний пароль з новим синхронним хешом, використайте метод compareSync:

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

з результатом буде логічне значення true або false.

# --instructions--

Додайте функцію і увійдіть в консоль щоб побачити, як вона працює.

Підтвердіть вашу сторінку, якщо все зрозуміло.

# --hints--

Синхронне хешування необхідно правильно згенерувати і правильно синхронізувати.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi,
        'You should call bcrypt.hashSync on myPlaintextPassword with saltRounds'
      );
      assert.match(
        data,
        /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi,
        'You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
