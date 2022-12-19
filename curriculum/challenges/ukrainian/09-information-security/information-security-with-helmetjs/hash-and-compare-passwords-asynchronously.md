---
id: 58a25bcff9fc0f352b528e7d
title: Асинхронне хешування та порівняння паролів
challengeType: 2
forumTopicId: 301578
dashedName: hash-and-compare-passwords-asynchronously
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Оскільки хешування розраховане на інтенсивне обчислення, його рекомендовано виконувати асинхронно на своєму сервері, щоб уникнути блокування вхідного з'єднання. Все, що потрібно зробити для асинхронного хешування пароля – це викликати

```js
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
});
```

# --instructions--

Додайте цю функцію хешування на свій сервер (ми вже визначили змінні для вас) та запишіть її в консоль, щоб побачити! Як правило, на цьому етапі ви б зберегли хешування у своїй базі даних.

Тепер, коли вам необхідно з'ясувати чи нові вхідні дані відповідають хешу, просто використайте функцію порівняння.

```js
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
});
```

Додайте це до своєї наявної хеш-функції (оскільки вам потрібно дочекатися завершення хешу перед викликом функції порівняння) після того, як ви записали повний хеш та ввели «res» на консоль в межах порівняння. На консолі з'являться хеш, а потім «true»! Якщо ви зміните «myPlaintextPassword» у функції порівняння на «someOtherPlaintextPassword», то з'явиться «false».

```js
bcrypt.hash('passw0rd!', 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    console.log(res); //true
  });
});

```

Відправте свою сторінку коли впевнились, що все правильно.

# --hints--

Асинхронне хешування повинне бути правильно згенероване та порівняне.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi,
        'You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback'
      );
      assert.match(
        data,
        /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi,
        'Nested within the hash function should be the compare function comparing myPlaintextPassword to hash'
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
