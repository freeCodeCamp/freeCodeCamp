---
id: 587d7fb2367417b2b2512bf6
title: Отримання вхідних даних параметра запиту від клієнта
challengeType: 2
forumTopicId: 301512
dashedName: get-query-parameter-input-from-the-client
---

# --description--

Інший поширений шлях отримати вхідні дані від клієнта – це кодування даних шляхом маршруту, використовуючи рядок запиту. Рядок запиту обмежений знаком питання (?) і містить в собі пари поле=значення. Кожна пара розділена амперсандами (&). Express може проаналізувати дані з рядка запиту і заповнити об’єкт `req.query`. Деякі символи, як-от відсотки (%), не можуть бути в URL-адресі і повинні бути закодовані в іншому форматі перед надсиланням. Якщо ви використовуєте API з JavaScript, ви можете використовувати певні методи для кодування/декодування цих символів.

<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&#x26;bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

Створіть кінцеву точку API, монтовану в `GET /name`. Надайте відповідь з документом JSON, використовуючи структуру `{ name: 'firstname lastname'}`. Перший і останній параметри імені повинні бути закодовані в рядку запиту, наприклад `?first=firstname&last=lastname`.

**Примітка:** у цьому завданні ви будете отримувати дані із запиту POST, на тому самому маршруті `/name`. За бажанням можна використати метод `app.route(path).get(handler).post(handler)`. Цей синтаксис дозволяє об'єднувати різні обробники дієслів на тому ж шляху. Вам не знадобиться багато друкувати і ви матимете чистіший код.

# --hints--

Тест 1: ваша кінцева точка API повинна відповідати з `{ "name": "Mick Jagger" }`, коли кінцева точка `/name` викликається з `?first=Mick&last=Jagger`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?first=Mick&last=Jagger').then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Тест 2: ваша кінцева точка API повинна відповідати з `{ "name": "Keith Richards" }`, коли кінцева точка `/name` викликається з `?first=Keith&last=Richards`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?last=Richards&first=Keith').then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "GET /name" route does not behave as expected'
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
