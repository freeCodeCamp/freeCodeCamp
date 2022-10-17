---
id: 587d7fb1367417b2b2512bf2
title: Використання .env-файлу
challengeType: 2
forumTopicId: 301521
dashedName: use-the--env-file
---

# --description--

Файл `.env` - це прихований файл, який використовується для передачі змінних оточень у вашому додатку. Цей файл є таємним, ніхто, крім вас, не може отримати до нього доступ, та він може використовуватися для зберігання даних, які ви хочете залишити конфіденційними або прихованими. Наприклад, ви можете зберігати API-ключі з зовнішніх сервісів або URI вашої бази даних. Ви також можете використовувати його для зберігання параметрів конфігурації. Налаштовуючи параметри конфігурації, ви можете змінити поведінку вашої програми без необхідності переписувати код.

Змінні оточення доступні з додатку як `process.env.VAR_NAME`. Об'єкт `process.env` є глобальним об'єктом Node, а змінні передаються у вигляді рядків. Згідно з правилами, ідентифікатори змінних пишуться у верхньому регістрі, а слова поділяються знаком підкресленням. `.env` - це файл оболонки, тому вам не потрібно укладати імена або значення в лапки. Також важливо відзначити, що не має бути пробілу навколо знаку рівності, коли ви привласнюєте значення змінним, наприклад, `VAR_NAME=value`. Зазвичай ви ставите визначення кожної змінної в окремий рядок.

# --instructions--

Додаймо змінну оточення в якості параметра конфігурації.

Створіть файл `.env` в основі каталогу вашого проєкту та збережіть в ньому змінну `MESSAGE_STYLE=uppercase`.

Then, in the `/json` GET route handler you created in the last challenge access `process.env.MESSAGE_STYLE` and transform the response object's `message` to uppercase if the variable equals `uppercase`. Об'єкт відповіді має бути `{"message": "Hello json"}` або `{"message": "HELLO JSON"}`, в залежності від значення `MESSAGE_STYLE`.

**Примітка:** Якщо ви використовуєте Replit, ви не можете створити файл `.env`. Замість цього використовуйте вбудовану вкладку <dfn>SECRETS</dfn> для додавання змінної.

При локальній роботі вам знадобиться пакет `dotenv`. Він завантажує змінні середовища з вашого `.env` файлу в `process.env`. The `dotenv` package has already been installed, and is in your project's `package.json` file. At the top of your `myApp.js` file, import and load the variables with `require('dotenv').config()`.

# --hints--

Відповідь кінцевої точки `/json` має змінюватися відповідно до змінної оточення `MESSAGE_STYLE`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/use-env-vars').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'The response of "/json" does not change according to MESSAGE_STYLE'
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
