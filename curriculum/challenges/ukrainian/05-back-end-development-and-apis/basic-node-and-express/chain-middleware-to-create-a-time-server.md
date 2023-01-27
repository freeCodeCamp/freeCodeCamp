---
id: 587d7fb1367417b2b2512bf4
title: Ланцюжкове проміжне ПЗ для створення сервера часу
challengeType: 2
forumTopicId: 301510
dashedName: chain-middleware-to-create-a-time-server
---

# --description--

Проміжне програмне забезпечення можна підключити за певним маршрутом за допомогою `app.METHOD(path, middlewareFunction)`. Проміжне програмне забезпечення також можна поєднати в межах визначення маршруту.

Розглянемо наступний приклад:

```js
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});
```

Цей підхід корисний для поділу серверних операцій на менші одиниці. Це призводить до кращої структури додатків та можливості повторного використання коду в різних місцях. Цей підхід також може бути використаний для проведення деякої перевірки даних. У кожній точці стеку проміжного ПЗ можна заблокувати виконання поточного ланцюжка та передати управління функціями, спеціально розробленими для обробки помилок. Або ви можете передати контроль до наступних відповідних маршрутів, щоб впоратися з особливими випадками. У розділі «Розширений Express» ми побачимо яким чином.

# --instructions--

У маршруті `app.get('/now', ...)` об'єднайте функцію проміжного ПЗ та кінцевий обробник. У функції проміжного ПЗ ви повинні додати поточний час до об’єкта запиту в ключі `req.time`. Ви можете використати `new Date().toString()`. В обробнику відповідайте з об'єктом JSON, використовуючи структуру `{time: req.time}`.

**Примітка:** тест провалиться, якщо ви не об'єднаєте проміжне ПЗ. Якщо ви встановите функцію в іншому місці, тест провалиться, навіть якщо результат виводу правильний.

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

Кінцева точка `/now` повинна повертати поточний час.

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
