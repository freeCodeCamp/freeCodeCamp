---
id: 587d7fb2367417b2b2512bf6
title: Отримання вхідних даних параметра запиту від клієнта
challengeType: 2
forumTopicId: 301512
dashedName: get-query-parameter-input-from-the-client
---

# --description--

Інший поширений шлях отримати вхідні дані від клієнта - це кодування даних шляхом маршруту, використовуючи рядок запиту. Рядок запиту обмежений знаком питання (?), і включає в себе поле=пари значення. Кожна пара розділена амперсандами (&). Експрес може проаналізувати дані з рядка запиту і заповнити об’єкт `req.query`. Деякі символи, як-от відсотки (%), не можуть бути в URL-адресі і повинні бути закодовані в іншому форматі перед їх відправкою. Якщо ви використовуєте API з JavaScript, ви можете використовувати певні методи для кодування/декодування цих символів.

<blockquote>маршрут: '/library'<br>actual_request_URL: '/library?userId=546&#x26;bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

Створіть кінцеву точку API, монтовану в `GET /name`. Відреагуйте JSON документом, використовуючи структуру `{ name: 'firstname lastname'}`. Перший і останній параметри імені повинні бути закодовані в рядку запиту, наприклад `?first=firstname&last=lastname`.

**Примітка:** У цьому завданні ви будете отримувати дані з POST-запиту, з того ж `/name` маршруту. За бажанням, можете використовувати `app.route(path).get(handler).post(handler)`. Цей синтаксис дозволяє об'єднувати різні обробники дієслів на тому ж шляху. Вам не знадобиться багато друкувати і ви матимете чистіший код.

# --hints--

Test 1 : Your API endpoint should respond with `{ "name": "Mick Jagger" }` when the `/name` endpoint is called with `?first=Mick&last=Jagger`

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

Test 2 : Your API endpoint should respond with `{ "name": "Keith Richards" }` when the `/name` endpoint is called with `?first=Keith&last=Richards`

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
