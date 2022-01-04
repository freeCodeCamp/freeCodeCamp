---
id: 587d7fb1367417b2b2512bf4
title: Ланцюгове підпрограмне забезпечення для створення сервера часу
challengeType: 2
forumTopicId: 301510
dashedName: chain-middleware-to-create-a-time-server
---

# --description--

Програмне забезпечення можна підключити за певним маршрутом за допомогою `app.METHOD(path, middlewareFunction)`. Підрограмне забезпечення також може бути поєднане всередині визначення маршруту.

Розглянемо наступний приклад:

```js
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});
```

Цей підхід корисний для поділу серверних операцій на менші одиниці. Це призводить до кращої структури додатків, та можливості повторного використання коду в різних місцях. Цей підхід також може бути використаний для проведення деякої перевірки даних. У кожній точці стеку підпрограмного забезпечення ви можете заблокувати виконання поточного ланцюга та передати управління функціями, спеціально розробленими для обробки помилок. Або ви можете передати контроль до наступних відповідних маршрутів, щоб впоратися з особливими випадками. Ми побачимо як у розділі розширений Експрес.

# --instructions--

У маршруті `app.get('/now', ...)` об'єднайте підппрограмне забезпечення та остаточний обробник. У функції підпрограмне забезпечення ви повинні додати поточний час до об’єкта запиту в `req.time` ключі. Ви можете використати `new Date().toString()`. В обробнику, відповідайте на об'єкт JSON, використовуючи структуру `{time: req.time}`.

**Примітка:** Тест не пройде, якщо ви не об'єднаєте підпрограмне забезпечення. Якщо ви встановите функцію десь в іншому місці, тест зазнає невдачі, навіть якщо результат виводу правильний.

# --hints--

Кінцева точка /now повинна бути підключена до проміжного програмного забезпечення

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/chain-middleware-time').then(
    (data) => {
      assert.equal(
        data.stackLength,
        2,
        '"/now" route has no mounted middleware'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

/now кінцева точка повинна повернути час, який відтепер складає +/-20 сек

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/chain-middleware-time').then(
    (data) => {
      var now = new Date();
      assert.isAtMost(
        Math.abs(new Date(data.time) - now),
        20000,
        'the returned time is not between +- 20 secs from now'
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
