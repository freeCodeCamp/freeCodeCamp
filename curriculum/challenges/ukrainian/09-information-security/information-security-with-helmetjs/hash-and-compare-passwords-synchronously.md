---
id: 58a25bcff9fc0f352b528e7e
title: Синхронне хешування та порівняння паролів
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Синхронне хешування також легко виконати, однак це може спричинити затримку, якщо використовувати його на серверній стороні з високою вартістю або з хешуванням, яке проводиться дуже часто. Хешування цим методом є таким же простим, як і виклик

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

Додайте цей метод хешування до свого коду і потім виведіть результат на консоль. Знову ж таки, змінні, що використовуються, вже визначені на сервері, тому вам не потрібно їх змінювати. Ви можете помітити, що навіть якщо ви хешуєте той самий пароль, що і в асинхронному методі, результат на консолі відрізняється: це пов'язано з тим, що сіль генерується випадковим чином, як бачимо з перших 22 символів у третьому рядку хешу. Щоб порівняти вхідний пароль з новим синхронним хешом, використайте метод compareSync:

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

де результатом буде булеве значення true або false.

# --instructions--

Додайте функцію та введіть результат у консоль, щоб побачити як все працює.

Відправте свою сторінку коли впевнились, що все правильно.

# --hints--

Синхронне хешування повинне бути правильно згенероване та порівняне.

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
