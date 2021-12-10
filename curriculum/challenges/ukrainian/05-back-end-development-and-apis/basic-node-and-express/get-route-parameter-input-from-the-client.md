---
id: 587d7fb2367417b2b2512bf5
title: Отримати ввід параметру маршруту від Клієнта
challengeType: 2
forumTopicId: 301513
dashedName: get-route-parameter-input-from-the-client
---

# --description--

Створюючи API, ми повинні дозволити користувачам спілкуватися з нами, на тему того, що вони хочуть отримати від наших послуг. Наприклад, якщо клієнт запитує інформацію про користувача, збереженого в базі даних, їм потрібно мати шлях повідомити нам, який саме користувач їх цікавить. Одним із можливих способів досягнення цього результату є використання параметрів маршруту. Параметри маршруту мають назву сегментів URL, розділені косою рискою (/). Кожен сегмент фіксує значення частини URL, який відповідає його позиції. Збережені значення можна знайти в об’єкті `req.params`.

<blockquote>маршрут: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

Побудуйте ехо-сервер, вмонтований у маршрут `GET /:word/echo`. Відреагуйте JSON об'єктом, використовуючи структуру `{echo: word}`. Ви можете знайти слово, яке потрібно повторити у `req.params.word`. Ви можете перевірити свій маршрут з адресної стрічки вашого браузера, відвідавши деякі відповідні маршрути, наприклад `your-app-rootpath/freecodecamp/echo`.

# --hints--

Тест 1: Ваш ехо сервер повинен коректно повторити слова

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/eChOtEsT/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'eChOtEsT',
        'Test 1: the echo server is not working as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Тест 2: Ваш ехо сервер повинен коректно повторити слова

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/ech0-t3st/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'ech0-t3st',
        'Test 2: the echo server is not working as expected'
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
